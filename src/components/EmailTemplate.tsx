import * as React from 'react'

interface EmailTemplateProps {
  recruiterName: string
  recruiterEmail: string
  message?: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  recruiterName,
  recruiterEmail,
  message,
}) => (
  <div>
    <h1>Olá Gabriel!</h1>
    <h2>Meu nome é {recruiterName}</h2>
    {message && <p>{message}</p>}
    <h2>Meu e-mail para contato: {recruiterEmail}</h2>
  </div>
)
