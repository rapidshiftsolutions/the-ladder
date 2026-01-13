'use client'

import { useState } from 'react'
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm({
  subject = 'general', // 'general', 'help', 'volunteer', 'partnership'
  className = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subject,
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: subject,
          message: '',
        })
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Failed to send message. Please try again.')
    }
  }

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'help', label: 'I Need Help / Request Assistance' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership / Corporate Giving' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'other', label: 'Other' },
  ]

  if (status === 'success') {
    return (
      <div className={`card text-center py-12 ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-ladder-green)]/10 flex items-center justify-center">
          <Check className="w-8 h-8 text-[var(--color-ladder-green)]" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
          Message Sent!
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">Failed to send message</p>
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          >
            {subjectOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input min-h-[150px]"
          placeholder="How can we help you?"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      {/* Privacy Note */}
      <p className="mt-4 text-xs text-[var(--color-text-secondary)]">
        Your information is kept confidential and will only be used to respond to your inquiry.
        View our <a href="/privacy" className="underline hover:text-[var(--color-ladder-blue)]">Privacy Policy</a>.
      </p>
    </form>
  )
}
