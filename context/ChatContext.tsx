"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
};

export type PageVisit = {
  title: string;
  pageId: string | null;
  timestamp: number;
};

type ChatContextType = {
  messages: ChatMessage[];
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  addMessage: (msg: Omit<ChatMessage, "id" | "timestamp"> & { id?: string; timestamp?: number }) => void;
  clearHistory: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  pageHistory: PageVisit[];
  addPageVisit: (title: string, pageId: string | null) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

const SESSION_KEY = "chat_history";
const MAX_MESSAGES = 100;

export function genId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

function loadFromSession(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ChatMessage[];
  } catch {
    return [];
  }
}

function saveToSession(messages: ChatMessage[]): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages.slice(-MAX_MESSAGES)));
  } catch {
    // sessionStorage unavailable
  }
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadFromSession());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageHistory, setPageHistory] = useState<PageVisit[]>([]);

  useEffect(() => {
    saveToSession(messages);
  }, [messages]);

  function addMessage(
    msg: Omit<ChatMessage, "id" | "timestamp"> & { id?: string; timestamp?: number }
  ) {
    const full: ChatMessage = {
      id: msg.id ?? genId(),
      timestamp: msg.timestamp ?? Date.now(),
      role: msg.role,
      content: msg.content,
    };
    setMessages((prev) => [...prev, full].slice(-MAX_MESSAGES));
  }

  function clearHistory() {
    setMessages([]);
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
  }

  function addPageVisit(title: string, pageId: string | null) {
    setPageHistory((prev) => [...prev, { title, pageId, timestamp: Date.now() }]);
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        addMessage,
        clearHistory,
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        pageHistory,
        addPageVisit,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
