"use client"
import { useState } from 'react'
import SectionHeading from './Section_heading'
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
        <motion.section id="contact" ref={ref} className='text-center items-center justify-center flex flex-col gap-10 mb-20 scroll-mt-28 w-[min(100%,48rem)] mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration:1}}
        >
            <SectionHeading>Get in Touch</SectionHeading>

            <AnimatePresence>
              {contactNudgeMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="-mt-4 w-full px-5 py-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 text-center"
                >
                  {contactNudgeMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <p className='font-normal text-base text-gray-700 -mt-12 dark:text-white/80'>Please contact me directly at <a href='mailto:abdelhamiduonis@hotmail.com' className='underline'>abdelhamiduonis@hotmail.com</a> <br></br> or through this form.</p>
            <form className='flex flex-col w-full pr-10 pl-10 sm:pr-20 sm:pl-20 dark:text-black -mt-4 dark:text-black'
                onSubmit={handleSubmit}
                >
                <input 
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
                {showError && <p className="text-red-500 text-sm mt-1">email is required</p>}
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
                {showError && <p className="text-red-500 text-sm mt-1">message is required</p>}
                <SubmitButton  />
            </form>
        </motion.section>
    )
}