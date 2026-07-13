"use client"
import { useState } from 'react'
import Section from './Section'
import { useScrollIntoView } from '@/lib/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { SubmitButton } from './SubmitButton'
import toast from 'react-hot-toast'
import { usePortfolio } from '@/context/PortfolioContext'

export default function Contact() {
    const { ref } = useScrollIntoView("Contact", 0.5)
    const [email,setEmail]= useState("")
    const [message,setMessage]= useState("")
    const [showError, setShowError] = useState(false);
    const { contactNudgeMessage } = usePortfolio();
    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        try {
        const response = await fetch("/api/contact", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
        toast.success("Your response is submitted successfully! ")
        setEmail("")
        setMessage("")
        } catch (err) {
        console.error('Submission error:', err);
        }
  };
    return (
        <Section ref={ref} id="contact" index="05" title="Get in touch">
            <div className="max-w-2xl">
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
                    Open to senior product design and UX engineering roles — reach out
                    directly or use the form below.
                </p>

                <AnimatePresence>
                  {contactNudgeMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mb-8 px-5 py-3 border border-hairline font-ss-mono text-xs uppercase tracking-widest text-muted"
                    >
                      {contactNudgeMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                    href="mailto:abdelhamiduonis@hotmail.com"
                    className="group inline-flex items-center gap-3 font-display text-2xl sm:text-4xl text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent mb-16"
                >
                    abdelhamiduonis@hotmail.com
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>

                <form className="flex flex-col border-t border-hairline pt-10"
                    onSubmit={handleSubmit}
                    >
                    <input
                        className="h-12 bg-transparent border-b border-hairline focus:border-accent outline-none transition-colors text-ink placeholder:text-muted"
                        placeholder='example@gmail.com'
                        type='email'
                        required
                        name="email"
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        setShowError(false);
                        }}
                        maxLength={500}
                    />
                    {showError && <p className="text-accent text-sm mt-1">email is required</p>}
                    <textarea
                        className="h-40 mt-8 bg-transparent border-b border-hairline focus:border-accent outline-none transition-colors resize-none text-ink placeholder:text-muted"
                        lang='en'
                        name="message"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => {
                        setMessage(e.target.value);
                        setShowError(false);
                        }}
                        required
                        maxLength={5000}
                    />
                    {showError && <p className="text-accent text-sm mt-1">message is required</p>}
                    <div className="mt-8">
                      <SubmitButton />
                    </div>
                </form>
            </div>
        </Section>
    )
}
