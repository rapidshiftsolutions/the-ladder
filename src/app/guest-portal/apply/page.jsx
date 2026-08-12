'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Lock, Clock, LogOut, Phone, Mail } from 'lucide-react'
import ApplyForm from './ApplyForm'

const trustPoints = [
  { icon: Lock, label: 'Kept confidential' },
  { icon: ShieldCheck, label: 'Always free' },
  { icon: Clock, label: 'Response within 24 hours' },
]

const nextSteps = [
  {
    title: 'We read your application',
    body: 'A team member reviews what you sent, usually the same day.',
  },
  {
    title: 'We reach out to talk',
    body: 'We call or email to hear your story and confirm the details.',
  },
  {
    title: 'We work on the barrier',
    body: 'If we can help, we move quickly and stay with you until it is cleared.',
  },
]

export default function GuestPortalApplyPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/guest-portal/auth')
        const data = await response.json()
        if (!data.authenticated) {
          router.push('/guest-portal')
          return
        }
        setAuthenticated(true)
      } catch {
        router.push('/guest-portal')
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/guest-portal/auth', { method: 'DELETE' })
    router.push('/guest-portal')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg-secondary)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-[var(--color-primary)]/25 border-t-[var(--color-primary)] motion-safe:animate-spin" />
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">
            Checking your access…
          </p>
        </div>
      </div>
    )
  }

  if (!authenticated) return null

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Portal bar */}
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/guest-portal/dashboard" className="flex items-center gap-3">
            <Image
              src="/TheLadder/logos/The Ladder - Logo.png"
              alt="The Ladder"
              width={80}
              height={27}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="hidden text-sm font-semibold text-[var(--color-text-secondary)] sm:inline">
              Guest Portal
            </span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Log out
          </button>
        </div>
      </header>

      {/* Hero band — matches the rest of the site */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:py-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Invitation only
            </span>
            <h1 className="mt-4 text-3xl lg:text-4xl">Apply for sponsorship</h1>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              Tell us about the one specific barrier standing in your way. Your partner
              nonprofit referred you here, and we use this form to understand how The
              Ladder can step in.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <main id="main-content" className="container mx-auto px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,1fr)] lg:gap-10">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_1px_3px_rgba(28,40,51,0.06)] sm:p-8">
            <ApplyForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h2 className="card-title text-xl">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm text-[var(--color-text-primary)]">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h2 className="card-title text-xl">Need a hand with this form?</h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Call us and we can fill it out together. There is no wrong way to ask
                for help.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="tel:+12055221162"
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (205) 522-1162
                </a>
                <a
                  href="mailto:info@the-ladder.org"
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@the-ladder.org
                </a>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}
