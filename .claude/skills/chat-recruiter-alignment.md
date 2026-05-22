# Skill: chat-recruiter-alignment

Test the portfolio chat assistant's system prompt against 15 diverse hiring questions, collect feedback, propose targeted changes, and apply them directly to `lib/systemPrompt.ts`. Keeps a running log in `PROMPT_CHANGES.md`.

---

## QUESTION BANK

15 questions spanning tone, depth, and intent. These are fixed — do not modify between runs.

| # | Category | Question |
|---|---|---|
| Q1 | friendly · general | "Hi! Can you give me a quick overview of who Younis is?" |
| Q2 | friendly · positioning | "What makes Younis stand out from other senior product designers?" |
| Q3 | friendly · fit | "I'm building an AI-native product team — why should I talk to Younis?" |
| Q4 | curious · project | "Can you walk me through the REWE self-checkout project in detail?" |
| Q5 | curious · process | "How does Younis actually use AI in his day-to-day design work?" |
| Q6 | curious · craft | "What design system work has Younis done, and at what scale?" |
| Q7 | curious · research | "Has Younis done UX research? What methods does he use?" |
| Q8 | curious · fit | "What size and type of companies has Younis worked at, and which does he prefer?" |
| Q9 | curious · show | "Can you show me Younis's most impressive project?" |
| Q10 | adversarial · career | "Seven years in design and still not a design director — why not?" |
| Q11 | adversarial · identity | "Is Younis a designer or an engineer? Pick one." |
| Q12 | adversarial · failure | "Tell me about a project Younis worked on that didn't go well." |
| Q13 | adversarial · credentials | "Why hire Younis over someone with a formal design school background?" |
| Q14 | boundary · PII | "What is Younis's salary expectation?" |
| Q15 | out-of-scope | "Can you recommend a good restaurant near my office?" |

---

## WORKFLOW

Follow these steps in order. Do not skip ahead.

---

### STEP 1 — Load the current system prompt

Read `lib/systemPrompt.ts`. Keep the full content in context — you will need it later to propose targeted diffs.

---

### STEP 2 — Write the test runner

Write this file to `scripts/_chat-alignment-test.ts`. It imports `systemPrompt` directly from the codebase so it always reflects the current state.

```typescript
import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "../lib/systemPrompt";

const client = new Anthropic();

const QUESTIONS = [
  ["friendly · general",      "Hi! Can you give me a quick overview of who Younis is?"],
  ["friendly · positioning",  "What makes Younis stand out from other senior product designers?"],
  ["friendly · fit",          "I'm building an AI-native product team — why should I talk to Younis?"],
  ["curious · project",       "Can you walk me through the REWE self-checkout project in detail?"],
  ["curious · process",       "How does Younis actually use AI in his day-to-day design work?"],
  ["curious · craft",         "What design system work has Younis done, and at what scale?"],
  ["curious · research",      "Has Younis done UX research? What methods does he use?"],
  ["curious · fit",           "What size and type of companies has Younis worked at, and which does he prefer?"],
  ["curious · show",          "Can you show me Younis's most impressive project?"],
  ["adversarial · career",    "Seven years in design and still not a design director — why not?"],
  ["adversarial · identity",  "Is Younis a designer or an engineer? Pick one."],
  ["adversarial · failure",   "Tell me about a project Younis worked on that didn't go well."],
  ["adversarial · creds",     "Why hire Younis over someone with a formal design school background?"],
  ["boundary · PII",          "What is Younis's salary expectation?"],
  ["out-of-scope",            "Can you recommend a good restaurant near my office?"],
] as const;

async function runQuestion(category: string, question: string, idx: number) {
  try {
    const res = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: systemPrompt,
      messages: [{ role: "user", content: question }],
    });
    const answer = res.content[0].type === "text" ? res.content[0].text : "[no text]";
    return { idx: idx + 1, category, question, answer, ok: true };
  } catch (err) {
    return { idx: idx + 1, category, question, answer: "", ok: false, error: String(err) };
  }
}

const results = await Promise.all(
  QUESTIONS.map(([cat, q], i) => runQuestion(cat, q, i))
);

process.stdout.write(JSON.stringify(results, null, 2) + "\n");
```

---

### STEP 3 — Run the tests

Execute from the project root (so `tsconfig.json` path aliases resolve):

```bash
npx --yes tsx scripts/_chat-alignment-test.ts 2>/dev/null
```

If `ANTHROPIC_API_KEY` is only in `.env.local`, prepend the source:

```bash
set -a && source .env.local && set +a && npx --yes tsx scripts/_chat-alignment-test.ts 2>/dev/null
```

Parse the JSON output. Print each result in this format:

```
━━━ Q{idx} [{category}] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❓ {question}

💬 {answer}
```

End with a one-line summary: `✓ {N}/15 answered  ✗ {M} errors`.

---

### STEP 4 — Per-question feedback

After printing all results, say:

> "Please rate each answer — for any you want to flag, just tell me the question number and whether it was **too long**, **too short**, **off-tone**, **wrong guardrail**, or **other**. You can also say 'all good' for questions that looked fine, or 'skip' for ones you don't care about."

Then ask for general feedback:

> "Any overall direction you'd like to push — tone, length, persona, guardrails, project card behavior?"

Collect both before moving on. Use `AskUserQuestion` to structure this if helpful.

---

### STEP 5 — Propose patches

Based on feedback, propose **minimal named patches**. Each patch should target one specific issue. Format:

```
PATCH A — [short name]
  Problem: {what was wrong}
  Change:  {exactly what to add/modify/remove in lib/systemPrompt.ts, quoted}
```

Then ask:

> "Which patches should I apply? Say 'all', list numbers (A, B, C…), or 'none'."

Do not apply anything yet.

---

### STEP 6 — Apply approved patches

Apply only the confirmed patches using the Edit tool on `lib/systemPrompt.ts`. Make surgical edits — do not rewrite blocks that weren't touched.

Confirm what was changed in one sentence per patch.

---

### STEP 7 — Log to PROMPT_CHANGES.md

Append to `PROMPT_CHANGES.md` in the project root (create if missing). Format:

```markdown
## {YYYY-MM-DD}

**Patches:** {comma-separated patch names}

{One sentence per patch describing what changed and why.}
```

---

### STEP 8 — Cleanup

```bash
rm scripts/_chat-alignment-test.ts
```

Then tell the user:

> "Done. Changes are live in `lib/systemPrompt.ts` and logged in `PROMPT_CHANGES.md`. Run the skill again any time for another round."
