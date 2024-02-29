'use client'

import { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import AboutSection from '@/components/Sections/AboutSection'
import ContactSection from '@/components/Sections/ContactSection'
import HomeSection from '@/components/Sections/HomeSection'
import ProjectsSection from '@/components/Sections/ProjectsSection'

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0)

  const [isResponsiveNavbarVisible, setResponsiveNavbarVisible] =
    useState(false)

  function onChangeResponsiveNavbarVisibility() {
    setResponsiveNavbarVisible(!isResponsiveNavbarVisible)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollTop])
  return (
    <div id="inicio" className="relative h-full bg-surface-background">
      <Header
        scrollTop={scrollTop}
        isResponsiveNavbarVisible={isResponsiveNavbarVisible}
        onChangeResponsiveNavbarVisibility={onChangeResponsiveNavbarVisibility}
      />
      <div
        className={`transition-blur duration-300 ${isResponsiveNavbarVisible && 'blur-sm'}`}
      >
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        <Footer />
      </div>
    </div>
  )
}
