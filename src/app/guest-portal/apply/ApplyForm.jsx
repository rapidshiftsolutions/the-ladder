'use client'

import { useState } from 'react'
import Link from 'next/link'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  referringPartner: '',
  barrierDescription: '',
  helpRequested: '',
  consentGiven: false,
  botField: '',
}

export default function ApplyForm() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const updateField = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/guest-portal/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        setError(data.error || 'Submission failed. Please try again.')
        return
      }

      setSuccess(true)
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 p-8 text-center">
        <h2
          className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Application received
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Thank you. The Ladder team will review your request and follow up soon.
          You can return to the dashboard anytime while your portal session is active.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/guest-portal/dashboard" className="btn btn-primary">
            Back to Dashboard
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setSuccess(false)}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="bot-field"
        value={form.botField}
        onChange={updateField('botField')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
          Full name *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={updateField('fullName')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          disabled={loading}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={updateField('email')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={updateField('phone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="referringPartner"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
        >
          Referring partner organization *
        </label>
        <input
          id="referringPartner"
          name="referringPartner"
          type="text"
          required
          value={form.referringPartner}
          onChange={updateField('referringPartner')}
          placeholder="Which nonprofit referred you?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          disabled={loading}
        />
      </div>

      <div>
        <label
          htmlFor="barrierDescription"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
        >
          What barrier is keeping you from moving forward? *
        </label>
        <textarea
          id="barrierDescription"
          name="barrierDescription"
          required
          rows={5}
          value={form.barrierDescription}
          onChange={updateField('barrierDescription')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          disabled={loading}
        />
      </div>

      <div>
        <label
          htmlFor="helpRequested"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
        >
          Type or amount of help requested (optional)
        </label>
        <textarea
          id="helpRequested"
          name="helpRequested"
          rows={3}
          value={form.helpRequested}
          onChange={updateField('helpRequested')}
          placeholder="Example: temporary transportation, housing deposit, work equipment..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          disabled={loading}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
        <input
          type="checkbox"
          name="consentGiven"
          checked={form.consentGiven}
          onChange={updateField('consentGiven')}
          className="mt-1 h-5 w-5 rounded border-gray-300"
          required
          disabled={loading}
        />
        <span>
          I consent to The Ladder storing and processing this information to review my
          sponsorship request. See our{' '}
          <Link href="/privacy" className="content-link">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && (
        <div className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-lg w-full sm:w-auto disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
