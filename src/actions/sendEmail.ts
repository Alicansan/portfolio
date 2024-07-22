'use server'
import { Resend } from 'resend'
import { validateString } from '@/lib/utils'
const resend = new Resend(process.env.RESEND_API_KEY)
import ContactFormEmail from '@/email/ContactFormEmail'
import React from 'react'
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 300)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 3600)) {
    return {
      error: 'Invalid message',
    }
  }

  resend.emails.send({
    from: 'Contact Form of Portfolio site <onboarding@resend.dev>',
    to: 'alicansan2606@gmail.com',
    subject: 'Contact Form Submission',
    reply_to: senderEmail as string,
    // text: message as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
    }),
  })
}
