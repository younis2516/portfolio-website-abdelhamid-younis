import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 px-8 w-fit bg-ink text-paper font-ss-mono text-xs uppercase tracking-widest outline-none transition-opacity hover:opacity-80 disabled:opacity-40"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin border-b-2 border-paper"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
};
