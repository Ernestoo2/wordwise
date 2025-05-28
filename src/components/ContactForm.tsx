'use client'

import { useState } from 'react'

interface ContactFormProps {
  onClose?: () => void
  isModal?: boolean
}

export default function ContactForm({ onClose, isModal = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for subscribing, ${formData.name}! We will notify you at ${formData.email}.`)
    if (onClose) {
      onClose()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const formContent = (
    <div className={`${isModal ? 'bg-gray-100 text-black rounded-lg p-8 max-w-md w-full' : 'w-full'}`}>
      {isModal && (
        <button 
          onClick={onClose}
          className="float-right text-2xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      )}
      <h3 className="text-2xl font-bold text-[#2d3e50] mb-6">Stay Tuned</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfae]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfae]"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message (Optional)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfae] h-32"
        />
        <button
          type="submit"
          className="w-full bg-[#00bfae] hover:bg-[#019a8d] text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )

  if (isModal) {
    return (
      <div className="fixed inset-0  bg-transparent  flex items-center justify-center p-4">
        {formContent}
      </div>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {formContent}
      </div>
    </section>
  )
} 