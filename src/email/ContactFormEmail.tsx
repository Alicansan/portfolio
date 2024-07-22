import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Heading,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

import React from 'react'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
}
export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <html>
      <Head />
      <Preview>New Message from </Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Section className='bg-white border border-black/10 my-4 px-10 py-4 rounded-md'>
            <Heading className='leading-tight text-2xl'>
              You recieved the following message from the
              contact form
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>Sender email: {senderEmail}</Text>
          </Section>
        </Body>
      </Tailwind>
    </html>
  )
}
