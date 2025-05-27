'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactForm from './ContactForm'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="min-h-screen bg-[#2d3e50] text-white flex items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Learn English Smarter
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          WordWise is launching soon – sign up to be the first to know.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-[#00bfae] hover:bg-[#019a8d] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        >
          Notify Me
        </motion.button>
      </div>
      {showModal && <ContactForm onClose={() => setShowModal(false)} isModal={true} />}
    </section>
  )
} 