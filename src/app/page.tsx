'use client'

import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import SocialMedia from '@/components/SocialMedia'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <Preloader />
      </AnimatePresence>
      <main className="min-h-screen">
        <Hero />
        <About />
        <ContactForm />
        <SocialMedia />
      </main>
    </>
  )
}
