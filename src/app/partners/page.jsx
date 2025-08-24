import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import PartnersContent from '/src/components/partners-content'

export const metadata = {
  title: 'Our Partners | OEM Radio Repair',
  description: 'OEM Radio Repair partners with leading automotive businesses including English Mountain Raceway and Ottinger\'s Automotive Customs to serve the East Tennessee car community.',
  keywords: [
    'OEM Radio Repair partners',
    'automotive partnerships',
    'English Mountain Raceway',
    'Ottinger\'s Automotive',
    'Newport TN businesses',
    'automotive community',
    'car culture Newport',
    'East Tennessee automotive'
  ],
  openGraph: {
    title: 'Our Partners | OEM Radio Repair',
    description: 'Discover our network of trusted automotive partners serving East Tennessee',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'OEM Radio Repair Partners',
      },
    ],
  },
}

export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PartnersContent />
      <Footer />
    </main>
  )
}