'use client'

import { useState } from 'react'
import { Send, Check, AlertCircle, Loader2, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react'

/**
 * Contact Form Component
 * 
 * Designed to work with Netlify Forms for serverless form handling.
 * Includes a hidden HTML form for Netlify's build-time detection,
 * plus a JavaScript-rendered form for enhanced UX.
 * 
 * @see https://docs.netlify.com/manage/forms/setup/
 */
export default function ContactForm({
  subject = 'general',
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
      // Create form data for Netlify Forms submission
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
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
        throw new Error('Form submission failed. Please try again.')
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

  // Success State
  if (status === 'success') {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
          <Check className="w-10 h-10 text-[var(--color-secondary)]" />
        </div>
        <h3 
          className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Message Sent Successfully!
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
          Thank you for reaching out to The Ladder. We&apos;ll review your message and 
          get back to you within 24 hours during business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <>
      {/* 
        Hidden HTML form for Netlify's build-time detection.
        This form is never displayed but allows Netlify to detect
        the form fields during the build process.
      */}
      <form 
        name="contact" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="subject">
          {subjectOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <textarea name="message" />
      </form>

      {/* JavaScript-rendered form with enhanced UX */}
      <form onSubmit={handleSubmit} className={className}>
        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: 
            <input name="bot-field" />
          </label>
        </p>
        
        {/* Hidden form-name field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Error Message */}
        {status === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-800">Unable to send message</p>
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            >
              <User className="w-4 h-4 text-[var(--color-primary)]" />
              Full Name <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
              placeholder="John Smith"
              required
              autoComplete="name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            >
              <Mail className="w-4 h-4 text-[var(--color-primary)]" />
              Email Address <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
              placeholder="john@example.com"
              required
              autoComplete="email"
            />
          </div>
        </div>

        {/* Phone & Subject Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Phone Field */}
          <div>
            <label 
              htmlFor="phone" 
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            >
              <Phone className="w-4 h-4 text-[var(--color-primary)]" />
              Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
              placeholder="(205) 555-1234"
              autoComplete="tel"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label 
              htmlFor="subject" 
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            >
              <FileText className="w-4 h-4 text-[var(--color-primary)]" />
              Subject <span className="text-[var(--color-accent)]">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all appearance-none cursor-pointer"
              required
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem',
              }}
            >
              {subjectOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label 
            htmlFor="message" 
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2"
          >
            <MessageSquare className="w-4 h-4 text-[var(--color-primary)]" />
            Your Message <span className="text-[var(--color-accent)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all resize-y"
            placeholder="Please tell us how we can help you. Include any relevant details about your situation."
            rows={5}
            required
          />
          <p className="mt-1.5 text-xs text-gray-500">
            {formData.message.length}/1000 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] focus:ring-4 focus:ring-[var(--color-primary)]/30 focus:outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        {/* Privacy Note */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Your privacy matters.</strong>{' '}
            The information you provide is kept strictly confidential and will only be used to 
            respond to your inquiry. We never share your personal information with third parties.{' '}
            <a href="/privacy" className="text-[var(--color-primary)] hover:underline font-medium">
              View our Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </>
  )
}
