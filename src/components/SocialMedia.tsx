'use client'

import { motion } from 'framer-motion'

export default function SocialMedia() {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' }
  ]

  return (
    <section className="bg-[#2d3e50] py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00bfae] text-3xl transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 