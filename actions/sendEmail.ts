"use server"
import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/ContactFormEmail'
import React from 'react'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
        console.log("Running on the served")
        const senderEmail = formData.get("email") as string
        const message = formData.get("message") as string
        // simple server side validation
        if (!validateString(senderEmail,500)) {
                return {error:"invalid email"}
        }
        if (!validateString(message,5000)) {
                return {error:"invalid message"}
        }
        let data
        try {
                data = await resend.emails.send(
                        {
                                from: "Hi 👋 from Abdelhamid  <onboarding@resend.dev>",
                                to: "abdelhamiduonis@gmail.com",
                                subject: "Hello from Abdelhamid",
                                reply_to: senderEmail, 
                                text:message
                                // react: React.createElement(ContactFormEmail, {
                                //         message: message as string,
                                //         senderEmail: senderEmail as string
                                // }) 
                        }
                )
        } catch (error: unknown) {
                return {
                        error:getErrorMessage(error )
                }
        }
        return {
                data
        }
}