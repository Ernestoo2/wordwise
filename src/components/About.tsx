'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#2d3e50] mb-8"
        >
          About WordWise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          WordWise is an upcoming web and mobile app that helps learners improve their English
          vocabulary through daily challenges, flashcards, quizzes, and real-life usage examples. 
          Designed for all levels, from beginners to advanced.
        </motion.p>
      </div>
    </section>
  )
} 