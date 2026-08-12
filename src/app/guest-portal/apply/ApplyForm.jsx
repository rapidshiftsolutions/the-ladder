'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

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

// The API rejects a barrier description under 20 characters, so the form says so
// up front rather than failing on submit.
const BARRIER_MIN = 20

const fieldClass =
  'w-full rounded-lg border border-[var(--color-border-dark)] bg-white px-4 py-3 text-base text-[var(--color-text-primary)] transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 disabled:bg-gray-50'

function Legend({ step, children }) {
  return (
    <legend className="mb-4 flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
        {step}
      </span>
      <span className="text-lg text-[var(--color-text-primary)]">{children}</span>
    </legend>
  )
}

function Label({ htmlFor, children, optional = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]"
    >
      {children}
      {optional && (
        <span className="ml-1.5 font-normal text-[var(--color-text-muted)]">(optional)</span>
      )}
    </label>
  )
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

  const barrierCount = form.barrierDescription.trim().length
  const barrierShort = barrierCount > 0 && barrierCount < BARRIER_MIN

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
      <div className="py-6 text-center">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
          <CheckCircle2 className="h-7 w-7 text-[var(--color-secondary-dark)]" aria-hidden="true" />
        </span>
        <h2 className="text-2xl">Application received</h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-text-secondary)]">
          Thank you for trusting us with this. A team member reviews every application
          and will follow up within 24 hours, usually by phone.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/guest-portal/dashboard" className="btn btn-primary">
            Back to dashboard
          </Link>
          <button type="button" className="btn btn-secondary" onClick={() => setSuccess(false)}>
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
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

      <fieldset>
        <Legend step={1}>About you</Legend>

        <div className="space-y-5">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={updateField('fullName')}
              className={fieldClass}
              disabled={loading}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={updateField('email')}
                className={fieldClass}
                disabled={loading}
              />
            </div>
            <div>
              <Label htmlFor="phone" optional>Phone</Label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(205) 555-0123"
                value={form.phone}
                onChange={updateField('phone')}
                className={fieldClass}
                disabled={loading}
              />
              <p className="mt-1.5 text-xs text-[var(--color-text-secondary)]">
                A phone number is the fastest way for us to reach you.
              </p>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <Legend step={2}>Your referral</Legend>

        <Label htmlFor="referringPartner">Referring partner organization</Label>
        <input
          id="referringPartner"
          name="referringPartner"
          type="text"
          required
          value={form.referringPartner}
          onChange={updateField('referringPartner')}
          placeholder="Which nonprofit referred you?"
          className={fieldClass}
          disabled={loading}
        />
        <p className="mt-1.5 text-xs text-[var(--color-text-secondary)]">
          The organization that gave you the portal password.
        </p>
      </fieldset>

      <fieldset>
        <Legend step={3}>The barrier</Legend>

        <div className="space-y-5">
          <div>
            <Label htmlFor="barrierDescription">
              What barrier is keeping you from moving forward?
            </Label>
            <textarea
              id="barrierDescription"
              name="barrierDescription"
              required
              rows={6}
              value={form.barrierDescription}
              onChange={updateField('barrierDescription')}
              placeholder="Share what happened and what it is stopping you from doing. Specific details help us act faster."
              className={fieldClass}
              disabled={loading}
              aria-describedby="barrier-help"
            />
            <p
              id="barrier-help"
              className={`mt-1.5 text-xs ${
                barrierShort ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-text-secondary)]'
              }`}
            >
              {barrierShort
                ? `A little more detail, please — ${BARRIER_MIN - barrierCount} more characters.`
                : `Please write at least ${BARRIER_MIN} characters.`}
            </p>
          </div>

          <div>
            <Label htmlFor="helpRequested" optional>Type or amount of help requested</Label>
            <textarea
              id="helpRequested"
              name="helpRequested"
              rows={3}
              value={form.helpRequested}
              onChange={updateField('helpRequested')}
              placeholder="Example: temporary transportation, housing deposit, work equipment…"
              className={fieldClass}
              disabled={loading}
            />
          </div>
        </div>
      </fieldset>

      <div className="space-y-5 border-t border-[var(--color-border)] pt-6">
        <div className="flex items-start gap-3">
          <input
            id="consentGiven"
            type="checkbox"
            name="consentGiven"
            checked={form.consentGiven}
            onChange={updateField('consentGiven')}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-[var(--color-border-dark)] accent-[var(--color-primary)]"
            required
            disabled={loading}
          />
          <label htmlFor="consentGiven" className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            I consent to The Ladder storing and processing this information to review my
            sponsorship request. See our <Link href="/privacy" className="content-link">Privacy Policy</Link>.
          </label>
        </div>

        {error && (
          <div
            className="flex items-start gap-2.5 rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] px-4 py-3 text-sm text-[var(--color-accent-dark)]"
            role="alert"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-lg w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? 'Submitting…' : 'Submit application'}
        </button>

        <p className="text-xs text-[var(--color-text-secondary)]">
          Your application goes straight to The Ladder team. It is never shared publicly.
        </p>
      </div>
    </form>
  )
}
