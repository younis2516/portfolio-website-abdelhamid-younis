import React from 'react' 
import { Html, Body, Heading, Head, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind} from '@react-email/tailwind'
type ContactFormEmailProps = {
    message: string,
    senderEmail:string 
}
const ContactFormEmail = ({message,senderEmail}:ContactFormEmailProps) => {
  return (
      <Html>
          <Head></Head>
          <Preview> New message from your portfolio website</Preview>
          <Tailwind>
              <Body className='bg-gray-100 text-black'>
                  <Container>
                      <Section className='bg-white borderBlack my-10  px-10 py-4 rounded-md'>
                          <Heading className='leading-tight'>You recieved the following message from the contact form of your portfolio website </Heading>
                          <Hr></Hr>
                          <Text>{message}</Text>
                          <Hr></Hr>
                          <Text>The sender email is:{senderEmail}</Text>
                      </Section>
                  </Container>
              </Body>
          </Tailwind>
    </Html>
  )
}

export default ContactFormEmail