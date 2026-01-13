export const metadata = {
  title: 'The Ladder CMS',
  description: 'Content management for The Ladder nonprofit',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
