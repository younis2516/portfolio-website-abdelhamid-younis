"use client";

import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="text-base font-semibold mt-3 mb-1 text-zinc-900 dark:text-zinc-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-sm font-semibold mt-2 mb-1 text-zinc-900 dark:text-zinc-100">
      {children}
    </h3>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block font-mono text-xs bg-neutral-100 dark:bg-neutral-800 rounded p-2 my-2 overflow-x-auto">
          {children}
        </code>
      );
    }
    return (
      <code className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
        {children}
      </code>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc marker:text-zinc-400 pl-4 my-2 space-y-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal marker:text-blue-500 dark:marker:text-blue-400 marker:font-medium pl-4 my-2 space-y-1">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-sm text-neutral-700 dark:text-neutral-300">{children}</li>
  ),
  p: ({ children }) => (
    <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 mb-2 last:mb-0">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 underline"
    >
      {children}
    </a>
  ),
  hr: () => null,
};

export default function ChatMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown components={components}>{content}</ReactMarkdown>
  );
}
