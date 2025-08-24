import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import FinancingContent from '/src/components/financing-content'

export const metadata = {
  title: 'Financing Options | OEM Radio Repair',
  description: 'Flexible financing options through Snap Finance for automotive services at OEM Radio Repair. No perfect credit required. Quick decisions and flexible payment terms available.',
  keywords: [
    'automotive financing',
    'Snap Finance',
    'car service financing',
    'Newport TN financing',
    'auto repair financing',
    'flexible payments',
    'shop now pay later',
    'automotive payment plans',
    'no perfect credit required'
  ],
  openGraph: {
    title: 'Financing Options | OEM Radio Repair',
    description: 'Get the automotive services you need with flexible financing options through Snap Finance',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'OEM Radio Repair Financing Options',
      },
    ],
  },
}

export default function FinancingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <FinancingContent />
      <Footer />
    </main>
  )
}