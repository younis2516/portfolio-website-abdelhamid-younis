"use client"
import react, { useState } from 'react'
import SectionHeading from './Section_heading'
import { useScrollIntoView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from 'react-dom'
import { SubmitButton } from './SubmitButton'
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useScrollIntoView("Contact", 0.5)
    const [formData, setFormData] = useState<FormData | undefined | null>()
    return (
        <motion.section id="contact" ref={ref} className='text-center items-center justify-center flex flex-col gap-10 mb-20 scroll-mt-28 w-[min(100%,48rem)] mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration:1}}
        >
            <SectionHeading>Get in Touch</SectionHeading>
            <p className='font-normal text-base text-gray-700 -mt-12 dark:text-white/80'>Please contact me directly at <a href='mailto:abdelhamiduonis@hotmail.com' className='underline'>abdelhamiduonis@hotmail.com</a> <br></br> or through this form.</p> 
            <form className='flex flex-col w-full pr-10 pl-10 sm:pr-20 sm:pl-20 dark:text-black -mt-4 dark:text-black'
                action={async (formData:FormData) => {
                    // const { error } = await sendEmail(formData)
                    // if (error) {
                    //     toast.error(error)
                    //     return
                    // }
                    toast.success('email sent successfully')
                }}>
                <input 
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder='example@gmail.com'
                    type='email'
                    required
                    name="email"
                    maxLength={500}
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    lang='en'
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitButton  />
            </form>
        </motion.section>
    )
}