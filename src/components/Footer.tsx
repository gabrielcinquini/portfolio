import { ArrowUpIcon } from 'lucide-react'
import React from 'react'

import { Typography } from './Typography'

export default function Footer() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <footer className="flex h-28 items-center justify-between px-28 max-lg:px-14 max-md:flex-col max-md:gap-4 max-md:px-4 max-md:py-6 md:mt-10">
      <Typography.Paragraph size="sm" textColor="secondary">
        Layout baseado no template da{' '}
        <a
          href="https://www.figma.com/file/R8xS1ExnPs3PkfezZ9rH1n/Portfólio-Estratégico-(Community)?type=design&node-id=802-1494&mode=design&t=CXWxckLp81sK3Txo-0"
          className="text-secondary underline"
        >
          Rocketseat
        </a>
      </Typography.Paragraph>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/gabrielcinquini/"
          className="hover:text-primary"
        >
          <Typography.Paragraph textColor="secondary">
            GitHub
          </Typography.Paragraph>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-cinquini/">
          <Typography.Paragraph textColor="secondary">
            LinkedIn
          </Typography.Paragraph>
        </a>
        <button onClick={handleScrollToTop}>
          <ArrowUpIcon className="text-secondary hover:text-primary" />
        </button>
      </div>
    </footer>
  )
}
