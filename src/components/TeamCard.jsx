import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const roleLabels = {
  board: 'Board Member',
  executive: 'Executive Director',
  staff: 'Staff',
  volunteer: 'Volunteer Leader',
  advisory: 'Advisory Board',
}

export default function TeamCard({
  name,
  role,
  title,
  organization,
  bio,
  image,
  linkedIn,
  email,
  className = '',
}) {
  const roleLabel = roleLabels[role] || role

  return (
    <article className={`card p-0 overflow-hidden text-center ${className}`}>
      {/* Image */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/30">
              {name?.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-ladder-blue)]/10 text-[var(--color-ladder-blue)] mb-3">
          {roleLabel}
        </span>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
          {name}
        </h3>

        <p className="text-sm font-medium text-[var(--color-ladder-red)] mb-1">
          {title}
        </p>

        {organization && (
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            {organization}
          </p>
        )}

        {bio && (
          <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">
            {bio}
          </p>
        )}

        {/* Social Links */}
        {(linkedIn || email) && (
          <div className="flex justify-center gap-3 pt-3 border-t border-[var(--color-border)]">
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] hover:bg-[var(--color-ladder-blue)]/10 transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] hover:bg-[var(--color-ladder-blue)]/10 transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
