import React from "react";

const Footer = () => {
  return (
    <footer className="ss-page">
      <div className="mx-auto max-w-6xl px-6 py-10 border-t border-hairline text-center">
        <p className="font-ss-mono text-xs text-muted mb-2">
          &copy; 2026{" "}
          <a href="mailto:abdelhamiduonis@hotmail.com" className="underline underline-offset-4">
            abdelhamiduonis@hotmail.com
          </a>{" "}
          All rights reserved.
        </p>
        <p className="font-ss-mono text-xs text-muted">
          Built with React &amp; Next.js (App Router, server actions), TypeScript,
          Tailwind CSS, Resend, React Email, Framer Motion — hosted on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
