import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import SpecialsContentCMS from '/src/components/specials-content-cms'

export const metadata = {
  title: 'Current Auto Service Specials & Deals | OEM Radio Repair - Birmingham, AL',
  description: 'Save money on professional auto services at OEM Radio Repair in Birmingham, AL. Limited-time specials on oil changes, maintenance packages, performance services, and more. Call (205) 522-1162 to claim your discount today!',
  keywords: [
    'auto service specials Newport TN',
    'oil change deals Newport Tennessee',
    'car maintenance discounts Newport',
    'auto repair coupons Newport TN',
    'service specials OEM Radio Repair',
    'oil change special Newport',
    'automotive service deals Tennessee',
    'car service discounts Newport TN',
    'maintenance package deals Newport',
    'performance service specials Newport'
  ],
  openGraph: {
    title: 'Current Auto Service Specials & Deals | OEM Radio Repair',
    description: 'Save money on professional auto services at OEM Radio Repair in Birmingham, AL. Limited-time specials on oil changes, maintenance, and performance services.',
    url: 'https://oemradiorepair.com/specials',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'OEM Radio Repair Auto Service Specials & Deals - Birmingham, AL'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Current Auto Service Specials & Deals | OEM Radio Repair',
    description: 'Save money on professional auto services at OEM Radio Repair in Birmingham, AL. Limited-time specials available.',
    images: ['/meta.png']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/specials'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function SpecialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <SpecialsContentCMS />
      <Footer />
    </main>
  )
}