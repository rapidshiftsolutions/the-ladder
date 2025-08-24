import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicesOverviewContent from '/src/components/services-overview-content'

export const metadata = {
  title: 'Infotainment Repair Services | Touchscreen & LCD Replacement | OEM Radio Repair',
  description: 'Professional infotainment repair services in Birmingham, AL. Digitizer replacement $400, LCD replacement $550. Free shipping, 2-3 day turnaround, 1-year warranty. Call (205) 522-1162 today!',
  keywords: [
    'infotainment repair Birmingham AL',
    'touchscreen repair Birmingham',
    'LCD replacement Birmingham AL',
    'digitizer replacement Birmingham',
    'Uconnect screen repair',
    'car radio repair Birmingham',
    'automotive screen repair',
    'infotainment system repair',
    'vehicle touchscreen fix',
    'car display repair Birmingham',
    'navigation screen repair',
    'radio touchscreen repair',
    'automotive electronics repair',
    'car screen replacement Birmingham',
    'infotainment service Birmingham AL'
  ],
  openGraph: {
    title: 'Infotainment Repair Services | Touchscreen & LCD Replacement',
    description: 'Professional infotainment repair services in Birmingham, AL. Digitizer replacement $400, LCD replacement $550. Free shipping, 2-3 day turnaround.',
    url: 'https://oemradiorepair.com/services',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'Auto Services in Birmingham, AL - OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Services in Birmingham, AL | Complete Auto Repair & Maintenance',
    description: 'Complete auto services in Birmingham, AL including oil changes, motor building, suspension work, wheels & tires, and performance parts installation.',
    images: ['/meta.png']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/services'
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

export default function ServicesOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicesOverviewContent />
      <Footer />
    </main>
  )
}