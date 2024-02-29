import React from 'react'

interface ErrorMessageProps {
  text: string
}

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return <span className="text-error">{text}</span>
}
