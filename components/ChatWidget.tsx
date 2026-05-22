"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import ChatMarkdown from "@/components/chat/ChatMarkdown";
import ProjectCard from "@/components/chat/ProjectCard";
import { usePortfolio } from "@/context/PortfolioContext";
import { useChat, genId } from "@/context/ChatContext";
import { usePageSections } from "@/context/PageSectionsContext";
import { executePageAction, type PageAction } from "@/lib/pageActions";
import { projectsData } from "@/lib/data";
import { usePageTracking } from "@/hooks/usePageTracking";
import { usePageContext } from "@/hooks/usePageContext";

const PHRASES = [
  "Ask AI about my work",
  "Chat with my AI replica",
  "Ask me anything",
  "Explore my projects with AI",
];

const NUDGE_FLAG = "chat_nudge_fired";
const NUDGE_DELAY_MS = 90_000;
const NUDGE_REVERT_MS = 8_000;
const NUDGE_LABEL = "Ask me about this project ✦";

function useTypingCycle(
  phrases: string[],
  typingSpeed = 55,
  pauseMs = 1800,
  deleteSpeed = 30,
  paused = false
) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (paused) return;
    const target = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < target.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
    } else if (!deleting && charIdx === target.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }

    setDisplayed(target.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, typingSpeed, pauseMs, deleteSpeed, paused]);

  return displayed;
}

const KNOWN_PROJECT_IDS = new Set(projectsData.map((p) => p.id));

const PROJECT_NAME_MAP: Array<[string, string]> = [
  ["self-checkout system", "rewe-white-label-sco"],
  ["rewe self-checkout", "rewe-white-label-sco"],
  ["billa terminal", "billa-terminal"],
  ["lehr.app", "lehr-app"],
  ["lehr app", "lehr-app"],
  ["german learning platform", "lehr-app"],
  ["tubics video optimization", "tubics-video-optimization-tool"],
  ["video optimization tool", "tubics-video-optimization-tool"],
  ["tubics design system", "tubics-design-system-documentation"],
  ["app radar", "app-radar-ui-redesign"],
  ["forasna", "forasna-form"],
];

type ParseResult = {
  projectIds: string[];
  cleanText: string;
  suppressDisplay: boolean;
};

function extractPageAction(text: string): PageAction | null {
  const match = text.match(/```page-action\n([\s\S]*?)\n```/);
  if (!match) return null;
  try {
    return JSON.parse(match[1].trim()) as PageAction;
  } catch {
    return null;
  }
}

function parseResponse(text: string, isStreaming: boolean): ParseResult {
  if (isStreaming && text.startsWith("```")) {
    const closingFence = text.indexOf("\n```", 3);
    if (closingFence === -1) {
      const looksLikeCard =
        text.startsWith("```project-card") ||
        text.startsWith("```page-action") ||
        !!text.match(/^```[\w-]*\n\s*\{/);
      if (looksLikeCard) {
        return { projectIds: [], cleanText: "", suppressDisplay: true };
      }
    }
  }

  let cleanText = text.replace(/```page-action\n[\s\S]*?\n```/g, "").trim();

  const codeBlockRegex = /```[\w-]*\n([\s\S]*?)\n```/g;
  const codeBlocks: Array<{ full: string; content: string }> = [];
  let match: RegExpExecArray | null;
  while ((match = codeBlockRegex.exec(cleanText)) !== null) {
    codeBlocks.push({ full: match[0], content: match[1] });
  }

  const projectIds: string[] = [];

  for (const block of codeBlocks) {
    let parsed: { projectId?: string } | null = null;
    try {
      parsed = JSON.parse(block.content.trim()) as { projectId?: string };
    } catch {
      // not JSON
    }

    if (
      parsed &&
      typeof parsed.projectId === "string" &&
      KNOWN_PROJECT_IDS.has(parsed.projectId)
    ) {
      projectIds.push(parsed.projectId);
      cleanText = cleanText.split(block.full).join("").trim();
    }
  }

  if (!isStreaming && projectIds.length === 0) {
    const lower = text.toLowerCase();
    const first100 = lower.slice(0, 100);
    const triggerPhrases = [
      "here is",
      "let me show",
      "project card",
      "render",
      "display",
      "check out",
      "here's",
      "showing",
    ];
    const hasTrigger = triggerPhrases.some((p) => lower.includes(p));

    for (const [name, id] of PROJECT_NAME_MAP) {
      if (first100.includes(name) || (hasTrigger && lower.includes(name))) {
        projectIds.push(id);
        break;
      }
    }
  }

  return { projectIds, cleanText, suppressDisplay: false };
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap bg-blue-600 text-white">
        {content}
      </div>
    </div>
  );
}

function AssistantBubble({
  content,
  streaming,
}: {
  content: string;
  streaming: boolean;
}) {
  const { projectIds, cleanText, suppressDisplay } = parseResponse(
    content,
    streaming
  );

  if ((content === "" || suppressDisplay) && streaming) {
    return (
      <div className="flex justify-start">
        <div className="bg-zinc-100 dark:bg-white/10 rounded-2xl rounded-bl-sm">
          <TypingIndicator />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start w-full">
      <div className="w-full max-w-[92%]">
        {projectIds.map((id) => (
          <ProjectCard key={id} projectId={id} />
        ))}
        {cleanText.trim() && (
          <div className="bg-zinc-100 dark:bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
            <ChatMarkdown content={cleanText} />
          </div>
        )}
      </div>
    </div>
  );
}

const STARTERS = [
  "What projects have you shipped?",
  "How do you use AI in your design workflow?",
  "What's your background?",
  "What kind of roles are you looking for?",
];

export default function ChatWidget() {
  const [streaming, setStreaming] = useState(false);
  const [input, setInput] = useState("");
  const [nudgeActive, setNudgeActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, setMessages, isOpen, setIsOpen } = useChat();
  const router = useRouter();
  const pathname = usePathname();
  const { highlightSection } = usePageSections();
  const pageContext = usePageContext();

  // Register navigation tracking
  usePageTracking();

  const {
    setHighlightedProjectId,
    setActiveTagFilters,
    setAgenticProjectOrder,
    setHighlightedExperienceIds,
    setContactNudgeMessage,
    setPageActionToast,
    resetPageState,
  } = usePortfolio();

  // Refs for proactive nudge stale-closure safety
  const isOpenRef = useRef(isOpen);
  const messageCountRef = useRef(0);
  const nudgeFiredRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const displayMessages = messages.filter((m) => m.role !== "system");

  useEffect(() => {
    messageCountRef.current = displayMessages.length;
  }, [displayMessages.length]);

  // Proactive nudge: fire once per session on a project page after 90s
  useEffect(() => {
    const isProjectPage = pathname.startsWith("/projects/");
    if (!isProjectPage) return;

    // Reset nudge eligibility when navigating to a new project page
    nudgeFiredRef.current = false;

    const timer = setTimeout(() => {
      const alreadyFiredThisSession = (() => {
        try {
          return sessionStorage.getItem(NUDGE_FLAG) === "1";
        } catch {
          return false;
        }
      })();

      if (
        !isOpenRef.current &&
        messageCountRef.current === 0 &&
        !alreadyFiredThisSession &&
        !nudgeFiredRef.current
      ) {
        nudgeFiredRef.current = true;
        try {
          sessionStorage.setItem(NUDGE_FLAG, "1");
        } catch {
          // ignore
        }
        setNudgeActive(true);
        setTimeout(() => setNudgeActive(false), NUDGE_REVERT_MS);
      }
    }, NUDGE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  const typedText = useTypingCycle(PHRASES, 55, 1800, 30, nudgeActive);

  useEffect(() => {
    if (isOpen && displayMessages.length === 0) {
      inputRef.current?.focus();
    }
  }, [isOpen, displayMessages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  async function send(text: string) {
    const userMsg = {
      id: genId(),
      role: "user" as const,
      content: text,
      timestamp: Date.now(),
    };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setStreaming(true);

    const assistantId = genId();
    const assistantMsg = {
      id: assistantId,
      role: "assistant" as const,
      content: "",
      timestamp: Date.now(),
    };
    setMessages([...nextMessages, assistantMsg]);

    let finalText = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, pageContext }),
      });

      if (res.status === 429) {
        const data = (await res.json()) as { error?: string };
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content:
              data.error ??
              "Too many messages. Please try again later.",
          };
          return updated;
        });
        return;
      }

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          // Preserve id and timestamp while updating content
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: accumulated,
          };
          return updated;
        });
      }

      finalText = accumulated;
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "Sorry, something went wrong. Please try again.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }

    if (finalText) {
      const action = extractPageAction(finalText);
      if (action) {
        setTimeout(() => {
          executePageAction(action, {
            setHighlightedProjectId,
            setActiveTagFilters,
            setAgenticProjectOrder,
            setHighlightedExperienceIds,
            setContactNudgeMessage,
            setPageActionToast,
            resetPageState,
            router,
            highlightSection,
          });
        }, 400);
      }
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || streaming) return;
    send(trimmed);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              w-[360px] max-w-[calc(100vw-2.5rem)]
              h-[480px]
              flex flex-col
              rounded-3xl
              border border-black/10 dark:border-white/10
              bg-white dark:bg-zinc-900
              shadow-2xl
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Ask AI about my work
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                  Powered by Claude
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
              {displayMessages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-center text-zinc-400 dark:text-zinc-500">
                    Hi! Ask me anything about Younis&apos;s work, projects, or
                    skills.
                  </p>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {STARTERS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="text-left text-xs px-3 py-2 rounded-xl border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {displayMessages.map((msg, i) =>
                msg.role === "user" ? (
                  <UserBubble key={msg.id} content={msg.content} />
                ) : (
                  <AssistantBubble
                    key={msg.id}
                    content={msg.content}
                    streaming={streaming && i === displayMessages.length - 1}
                  />
                )
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 pb-4 pt-2 border-t border-black/[0.06] dark:border-white/[0.06] flex gap-2 items-end"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                rows={1}
                disabled={streaming}
                className="
                  flex-1 resize-none text-sm
                  bg-zinc-100 dark:bg-white/10
                  text-zinc-900 dark:text-white
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                  rounded-xl px-3 py-2.5
                  outline-none focus:ring-2 focus:ring-blue-500/30
                  max-h-28 overflow-y-auto
                  disabled:opacity-50
                  transition-all
                "
                style={{ lineHeight: "1.5" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="
                  w-9 h-9 flex-shrink-0
                  flex items-center justify-center
                  rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  disabled:opacity-40 disabled:cursor-not-allowed
                  text-white
                  transition-colors
                "
                aria-label="Send"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <div className="relative">
        {/* Pulsing outer glow — intensifies during nudge */}
        <motion.div
          className="absolute -inset-[6px] rounded-[26px] z-0 blur-md"
          style={{
            background:
              "linear-gradient(135deg, #6ee7e0, #a8d8d4, #f7e2c8, #e8a87c, #6ee7e0)",
            backgroundSize: "300% 300%",
          }}
          animate={
            nudgeActive
              ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: [0.75, 1, 0.75],
                  scale: [1, 1.06, 1],
                }
              : {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: [0.45, 0.7, 0.45],
                  scale: 1,
                }
          }
          transition={
            nudgeActive
              ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
        />

        {/* Animated gradient border ring */}
        <motion.div
          className="absolute -inset-[2.5px] rounded-[20px] z-[1]"
          style={{
            background:
              "linear-gradient(135deg, #6ee7e0, #a8d8d4, #f3efe5, #f7e2c8, #e8a87c, #6ee7e0)",
            backgroundSize: "300% 300%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            if (nudgeActive) setNudgeActive(false);
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          animate={nudgeActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
          transition={
            nudgeActive
              ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
              : {}
          }
          className="
            relative z-10
            flex items-center gap-2.5
            px-5 py-3
            rounded-[18px]
            bg-zinc-900
            text-white
            text-sm font-semibold
            min-w-[228px]
          "
        >
          {/* Animated sparkle icon */}
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#sparkle-grad)"
            strokeWidth={1.8}
            className="w-5 h-5 flex-shrink-0"
            animate={{ rotate: [0, 18, -18, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6ee7e0" />
                <stop offset="100%" stopColor="#f7b46e" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
            />
          </motion.svg>

          {/* Label: nudge text or typewriter */}
          <span className="flex-1 text-left whitespace-nowrap overflow-hidden">
            {nudgeActive ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #6ee7e0, #f7b46e)",
                }}
              >
                {NUDGE_LABEL}
              </motion.span>
            ) : (
              <>
                <span>{typedText}</span>
                <motion.span
                  className="inline-block w-[1.5px] h-[1em] bg-white align-[-1px] ml-[1px]"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </>
            )}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
