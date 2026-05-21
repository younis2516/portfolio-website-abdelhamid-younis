"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function AIPOSDashboardPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* HERO */}
      <div className="relative w-full overflow-hidden bg-[#0f172a] -mt-28 sm:-mt-36 flex items-end justify-center min-h-[16rem] sm:min-h-[22rem]">
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 transition"
            >
              <FiArrowLeft /> Back
            </Link>
          </div>
        </div>
        <div className="relative z-10 pb-10 px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-3 font-semibold">
            Enterprise · Built with AI · 2024
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight max-w-3xl">
            AI-Assisted POS Dashboard
            <br />
            <span className="text-blue-400">Figma Make × Claude Pipeline</span>
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[73rem] -mt-12 px-4 z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/10 dark:border-white/10 p-8 sm:p-12">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            AI-Assisted POS Dashboard —<br />
            Figma Make × Claude Pipeline
          </h1>
          <header className="mb-20">
            <div className="flex flex-wrap gap-8 mb-8 text-sm">
              {[
                {
                  label: "Role",
                  value: "Product Designer × AI Workflow Architect",
                },
                { label: "Year", value: "2026" },
                {
                  label: "Company",
                  value: "REWE International",
                },
                { label: "Timeline", value: "2 weeks, 10+ iteration rounds" },
                { label: "Scope", value: "UI design + functional prototyping" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40">
                    {label}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 text-lg text-gray-700 dark:text-white/70 leading-relaxed">
              Compressed a traditional 4-week design cycle into 10 days using a
              structured Figma Make → Claude → Figma Make pipeline. Key wins:
              reduced 40 inline filters to 5–6 smart quick filters, redesigned
              advanced search with grouped chips and radio buttons, and iterated
              10+ UI decisions conversationally at 2–5 min each.
            </div>
          </header>

          {/* 01 Context */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              01 — CONTEXT & CHALLENGE
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              The Problem Space
            </h2>
            <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-6 max-w-3xl">
              Austrian retail chains under REWE Group (Billa AG, Penny, BIPA,
              ADEG) needed a unified dashboard to monitor and manage POS
              hardware across 500+ retail locations in Austria, Italy,
              Lithuania, Slovakia, and Czech Republic. The system had to handle
              Kassen (cash registers) and Filialen (branches) with 200+ rows per
              view, 30+ filterable columns, and real-time status monitoring —
              with a fixed backend and a 2-week delivery window.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-red-500 dark:text-red-400 mb-2">
                  Before
                </div>
                <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center h-48 text-neutral-400 text-sm">
                  40+ inline filters, flat dropdown-heavy layout
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-green-500 dark:text-green-400 mb-2">
                  After
                </div>
                <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center h-48 text-neutral-400 text-sm">
                  5–6 smart filters + advanced search drawer
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-10 text-gray-900 dark:text-white">
              Key Constraints
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "UI-only engagement — backend APIs and data models were already built and frozen",
                "No existing design system — visual language, component library, and patterns from scratch",
                "2-week delivery window — stakeholders needed prototype + 10 iteration rounds within 14 days",
                "Enterprise complexity — advanced filtering, column visibility, sortable tables, bulk actions",
                "Stakeholder accessibility — non-technical stakeholders needed to test actual behavior, not imagine it",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-700 dark:text-white/70"
                >
                  <span className="text-blue-600 dark:text-blue-500 font-semibold flex-shrink-0">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Why Traditional Workflows Wouldn&apos;t Work
            </h3>
            <ul className="space-y-3">
              {[
                "Manual component creation for 40+ form fields and dropdowns",
                "Tedious prototyping of all interaction states (hover, focus, selected, disabled, loading, error)",
                "Separate handoff documentation for developers (redlines, specs, Zeplin exports)",
                "Multiple designer-developer sync meetings per iteration round (10+ meetings = 10+ hours)",
                "Slow iteration speed — 30–60 min per design change vs. 2–5 min with AI assistance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-700 dark:text-white/70"
                >
                  <span className="text-blue-600 dark:text-blue-500 font-semibold flex-shrink-0">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 02 Pipeline */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              02 — THE AI PIPELINE
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              A New Design Workflow
            </h2>
            <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-8 max-w-3xl">
              Instead of static mockups and handoff specs, I built a workflow
              treating Claude as both a design iteration partner and a
              functional prototyping tool.
            </p>

            <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl p-8 mb-8">
              {[
                {
                  n: 1,
                  title: "Prototype in Figma Make",
                  body: "Built initial dashboard with functional React components — IA, core interactions, data model integration (mock data matching backend schema), and component hierarchy.",
                },
                {
                  n: 2,
                  title: "Export Structured Documentation",
                  body: "Generated design.md (visual specs: colors, typography, spacing, icons), description.md (component behaviour: states, dropdown logic, filter logic), and instructions.md (business context, constraints, edge cases).",
                },
                {
                  n: 3,
                  title: "Feed to Claude with Business Context",
                  body: 'Provided all three markdown files + specific design asks (e.g. "convert dropdowns with ≤4 options to filter chips") + screenshots of current state + business constraints.',
                },
                {
                  n: 4,
                  title: "Iterate 10+ Rounds in Claude Artifacts",
                  body: "Refined UI patterns through conversational iteration. Each round took 2–5 min vs. 30–60 min in traditional Figma. Rollbacks = scrolling up in the thread.",
                },
                {
                  n: 5,
                  title: "Re-implement in Figma Make",
                  body: "Brought refined designs back as functional components. Stakeholders tested the same build. Developers pulled implementation-ready code. No lost in translation.",
                },
              ].map(({ n, title, body }, i, arr) => (
                <div key={n}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                      {n}
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        {title}
                      </h4>
                      <p className="text-gray-700 dark:text-white/60 text-sm leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="border-l-2 border-neutral-300 dark:border-white/20 ml-6 h-8 mt-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Iteration velocity table */}
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Iteration Velocity Comparison
            </h3>
            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 dark:text-white">
                      Task
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-red-500">
                      Traditional Figma
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                      AI-Assisted (Claude)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Convert 8 dropdowns to chips", "45–60 min", "3 min"],
                    ["Add icons to all form fields", "30–40 min", "2 min"],
                    ["Reorder page sections", "20–30 min", "1 min"],
                    ["Update column visibility label", "15–20 min", "2 min"],
                    ["Redesign filter section layout", "60–90 min", "5 min"],
                  ].map(([task, before, after]) => (
                    <tr
                      key={task}
                      className="border-b border-neutral-100 dark:border-white/5 last:border-0"
                    >
                      <td className="px-4 py-3 text-gray-700 dark:text-white/70">
                        {task}
                      </td>
                      <td className="px-4 py-3 text-red-500">{before}</td>
                      <td className="px-4 py-3 text-green-600 dark:text-green-400 font-medium">
                        {after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 03 Decisions */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              03 — KEY DESIGN DECISIONS
            </div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Iteration Highlights
            </h2>

            <div className="space-y-10">
              {/* D01 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 01 — Biggest Impact
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Reducing 40 Filters to 5–6 Smart Quick Filters
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  The original dashboard exposed all 40+ filter fields inline on
                  the main page. This created massive visual noise and made it
                  hard to find anything. I reduced the inline surface to the 5–6
                  most-used filters, and moved everything else into a dedicated
                  advanced search form accessible via a button.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-1">
                      Before — 40+ inline
                    </div>
                    <div className="bg-white dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-3 flex flex-wrap gap-1">
                      {[
                        "Firma",
                        "Filiale",
                        "Kassengruppe",
                        "IP",
                        "Addresse",
                        "Online",
                        "Geöffnet",
                        "im Bau",
                        "hatdStore",
                        "Test PC",
                        "PC OS",
                        "PC Modell",
                        "PIOS Version",
                        "Drucker",
                        "Scanner",
                        "+26 more…",
                      ].map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full border border-red-200 dark:border-red-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">
                      After — 5 quick + advanced
                    </div>
                    <div className="bg-white dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-3 flex flex-wrap gap-1">
                      {[
                        "Firma",
                        "Filiale",
                        "Status",
                        "Land",
                        "Kassengruppe",
                      ].map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/50 rounded-full border border-neutral-200 dark:border-white/10">
                        + Erweiterte Suche
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;Reduce the inline Filtern section to only show the 5
                    most-used filters: Firma, Filiale, Status, Land,
                    Kassengruppe. Move all other filters into an advanced search
                    panel that opens when the user clicks &apos;Erweiterte
                    Suche&apos;. The panel should be a full-page form, not a
                    dropdown.&quot;
                  </p>
                </div>
              </div>

              {/* D02 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 02
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Advanced Search: From Boring Form to Interactive Grouped UI
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  The advanced search form started as a flat wall of identical
                  dropdowns. I redesigned it into three grouped sections — Most
                  Used Filters, Hardware Filters, Software Filters — converted
                  boolean fields to radio buttons, converted multi-option fields
                  (≤6 options) to chip selectors, and added Material Symbols
                  icons to every field.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;Redesign the advanced search form. Group all filters
                    into 3 sections: &apos;Most used filters&apos;,
                    &apos;Hardware filters&apos;, &apos;Software filters&apos;.
                    For boolean fields use radio button groups instead of
                    dropdowns. For multi-option fields with ≤6 options use chip
                    selectors. Add a Material Symbols icon to every field.&quot;
                  </p>
                </div>
              </div>

              {/* D03 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 03
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Dropdown → Filter Chip Conversion
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Converted single-select dropdowns with ≤4 options to segmented
                  controls and multi-select dropdowns to chip selectors with
                  checkmarks. Reduced interaction cost from 2 clicks to 1, and
                  made selection state immediately visible at all times.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompts
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed mb-2">
                    Round 1: &quot;In the advanced search form in the Filialen
                    tab, change the Online, Geöffnet, im Bau, hatdStore, Test
                    PC, PC OS, PC Modell dropdowns — convert them to filter
                    chips.&quot;
                  </p>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    Round 2: &quot;In the Kassen tab, change the Drucker Driver
                    Version, Scanner Firmware Version, Touchscreen Driver
                    Version dropdowns — convert them to filter chips.&quot;
                  </p>
                </div>
              </div>

              {/* D04 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 04
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Filter Section Redesign
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Removed grey container background, section title, and all
                  labels. Added descriptive placeholders (e.g.
                  &quot;Kassengruppe 11, 12 oder 13&quot;), inline X clear
                  buttons for multiselect fields, and a subtle bottom divider.
                  Reduced visual weight by ~40% while improving scannability.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt (Round 7)
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;In the Filtern section in both Kassen and Filialen
                    page: 1. Remove the grey container and padding. 2. Remove
                    the &apos;Filtern&apos; section title. 3. Remove all labels
                    from dropdowns. 4. Make placeholders descriptive. 5. Add X
                    button inside multiselect fields to clear selection. 6. Add
                    bottom gray divider between Filters section and quick filter
                    chips.&quot;
                  </p>
                </div>
              </div>

              {/* D05 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 05
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Dynamic Column Visibility Label
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Changed the static &quot;Spalten&quot; label to show &quot;X
                  Columns hidden&quot; with a live count that updates in
                  real-time as users toggle column visibility. Made hidden
                  column state discoverable at a glance.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt (Round 3)
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;It&apos;s still called Spalten. Change it to show the
                    dynamic count like &apos;X Columns hidden&apos; where X is
                    the number of hidden columns.&quot;
                  </p>
                </div>
              </div>

              {/* D06 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 06
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Information Hierarchy Reordering
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Moved Filtern section above quick chips and stats cards.
                  Rationale: filters control the entire page&apos;s data scope,
                  so they should appear first in visual hierarchy. Quick chips
                  are shortcuts (less powerful), stats are derivative of
                  filters, table is the final output.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt (Round 6)
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;In both Kassen and Filialen page, change the order of
                    UI elements after the page header: 1. Filtern section
                    (controls data on whole page). 2. Quick filter chips. 3.
                    Stats section. 4. Results table.&quot;
                  </p>
                </div>
              </div>

              {/* D07 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 07
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Icon System for Form Fields
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Added Material Symbols Rounded icons to all dropdown and input
                  fields across both the quick filter bar and the advanced
                  search form. Improved scannability in dense forms and provided
                  visual anchors for repeated interactions.
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                  {[
                    ["business", "Firma"],
                    ["store", "Filiale"],
                    ["router", "IP address"],
                    ["location_on", "Addresse"],
                    ["database", "Datenversion"],
                    ["workspaces", "Kassengruppe"],
                  ].map(([icon, label]) => (
                    <div
                      key={icon}
                      className="flex items-center gap-2 bg-white dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2"
                    >
                      <code className="text-xs text-blue-600 dark:text-blue-400">
                        {icon}
                      </code>
                      <span className="text-xs text-neutral-600 dark:text-white/50">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt (Rounds 4 & 5)
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;In both Kassen and Filialen tab the following
                    dropdowns are missing icons: Firma, Filiale, Kassengruppe.
                    Add appropriate Material Symbols icons to each field.&quot;
                  </p>
                </div>
              </div>

              {/* D08 */}
              <div className="border border-neutral-200 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-white/5">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 mb-2">
                  DECISION 08
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Mock Data Scaling
                </h4>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                  Scaled from 100 → 500 rows (caused blank preview — performance
                  limit hit) → settled at 200 rows. Sweet spot: ensured most
                  filter combinations returned results for stakeholder demos
                  while matching real-world data density without render issues.
                </p>
                <div className="bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-white/10 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-2 font-medium">
                    Sample Prompt (Round 8)
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/60 font-mono leading-relaxed">
                    &quot;In the kassen and filialen table, can you add more
                    results. Right now it&apos;s 100 results only. Make it 500,
                    so it covers all cases and filters without hitting an empty
                    results page.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 04 Stack */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              04 — AI STACK & TOOLS
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Technology Pipeline
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Figma Make",
                "Claude 4.0 (claude.ai)",
                "React + TypeScript",
                "Tailwind CSS",
                "Structured Markdown Handoff",
                "Material Symbols Rounded",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              {[
                [
                  "Figma Make",
                  "Built functional React prototypes with real data and interactions. Stakeholders tested actual behaviour, not static frames. Exported production-ready code for dev handoff. Eliminated design-to-code translation errors.",
                ],
                [
                  "Claude 4.0 (claude.ai Artifacts)",
                  "Iteration partner for conversational design refinement. Generated working code in seconds from natural language prompts. Maintained context across 10+ rounds through conversation thread. Enabled rapid experimentation at 10–15× the speed of Figma.",
                ],
                [
                  "Structured Markdown Handoff",
                  "design.md (visual specs: colors, typography, spacing), description.md (component behaviour: states, logic), instructions.md (business context, constraints, rationale). Version-controlled in Git. Human-readable and AI-parseable. The lynchpin that made the pipeline work.",
                ],
                [
                  "React + TypeScript",
                  "Component-based architecture matching production stack. Type safety caught data model mismatches early. Hot reload enabled instant visual feedback. Reusable component library emerged naturally through iteration.",
                ],
                [
                  "Material Symbols Rounded",
                  "Consistent icon system across all form fields. Open source, customisable via CSS. Variable font support for weight/fill. Improved form scannability and visual hierarchy across 40+ fields.",
                ],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="border border-neutral-200 dark:border-white/10 rounded-xl p-5 bg-neutral-50 dark:bg-white/5"
                >
                  <h4 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                    {name}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-white/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Outcomes */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              05 — OUTCOMES & LEARNINGS
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              What Worked, What Didn&apos;t
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                ["40→5", "inline filters reduced to quick bar"],
                ["10+", "iteration rounds in 10 days"],
                ["2–5m", "per iteration vs. 30–60m traditional"],
                ["~85%", "time saving on iteration velocity"],
              ].map(([num, desc]) => (
                <div
                  key={num}
                  className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {num}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-white/50 leading-snug">
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              What Worked
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                'Conversational iteration — natural language faster than layer manipulation. "Convert 8 dropdowns to chips" → working code in 3 minutes.',
                "Immediate functional feedback — real interactions (hover states, filter logic) caught UX issues static mockups can't simulate.",
                "Version control through conversation — entire design evolution captured. Rollbacks = scrolling up and copying old code.",
                "Reduced decision paralysis — cheap experimentation enabled trying 5 filter chip layouts in 10 minutes and picking the best.",
                "Markdown as handoff format — portable, version-controlled, parseable by both humans and AI. Committed to Git.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-700 dark:text-white/70 text-sm leading-relaxed"
                >
                  <span className="text-green-600 dark:text-green-400 font-semibold flex-shrink-0">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              What Didn&apos;t Work
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Initial learning curve — structuring markdown exports and writing effective prompts took 2–3 days.",
                "TypeScript errors interrupted flow and required manual debugging in VS Code, breaking the conversational rhythm.",
                'Hard to show "design thinking" — stakeholders used to design comps were skeptical of code-first prototypes.',
                "Performance limits — had to scale back from 500 to 200 mock rows when rendering caused blank previews.",
                "Icon/asset management — adding custom SVG assets required manual file management Claude couldn't automate.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-700 dark:text-white/70 text-sm leading-relaxed"
                >
                  <span className="text-red-500 font-semibold flex-shrink-0">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Key Learnings
            </h3>
            <div className="space-y-4">
              {[
                [
                  "1. AI excels at iteration, not invention.",
                  "Exceptional at refining existing patterns but struggled with open-ended asks. I still needed to provide design direction, IA, visual system, and edge case thinking. AI is an iteration accelerator, not a replacement for design judgment.",
                ],
                [
                  "2. Structured handoff is the lynchpin.",
                  "Without design.md / description.md / instructions.md, Claude lost context across rounds and developers couldn't understand intent. Too little → Claude loses context. Too much → developers ignore it.",
                ],
                [
                  "3. Functional prototypes change conversations.",
                  'Stakeholders shifted from "will this work?" to "how should this behave?" — eliminating speculative feedback and focusing on real UX issues. Traditional Mockups: "Will multi-select work?" → Functional Prototypes: "This multi-select is slow, make it chips."',
                ],
                [
                  "4. Speed enables better design.",
                  'When iteration takes 2 minutes instead of 30, you try 5 variants and pick the best. Traditional workflows force "design by committee" and commit to one direction upfront. AI-assisted iteration enabled exploratory design at production fidelity.',
                ],
              ].map(([title, body]) => (
                <div
                  key={title as string}
                  className="border-l-4 border-blue-200 dark:border-blue-800 pl-4"
                >
                  <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                    {title}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-white/60 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 06 Conclusion */}
          <section className="mb-20">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-3 tracking-wide">
              06 — CONCLUSION
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              The Future of AI-Assisted Design
            </h2>
            <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4 max-w-3xl">
              The traditional design-to-development handoff is becoming
              obsolete. When designers iterate in functional code and developers
              understand intent through structured documentation, the boundary
              between disciplines blurs productively.
            </p>
            <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4 max-w-3xl">
              The Figma Make → Claude → Figma Make loop isn&apos;t just faster —
              it unlocks a different kind of design process. One where
              experimentation is cheap, functional fidelity is high from day
              one, and the artifact you&apos;re iterating <em>is</em> the
              deliverable.
            </p>
            <p className="text-gray-700 dark:text-white/70 leading-relaxed max-w-3xl">
              I see this workflow scaling to more complex projects, especially
              in enterprise contexts where data density and interaction
              complexity make static mockups inadequate. The limiting factor
              isn&apos;t the tools — it&apos;s designers&apos; willingness to
              learn just enough code to be dangerous.
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-12 border-t border-neutral-200 dark:border-white/10 text-center">
            <p className="text-neutral-500 dark:text-white/40 text-sm">
              Designed and documented by Abdelhamid Younis · 2024
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
