import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import PackagesContent from '/src/components/packages-content'

export const metadata = {
  title: 'Service Packages | OEM Radio Repair',
  description: 'Save money with our comprehensive auto service packages in Birmingham, AL. Complete maintenance packages for all your vehicle needs.',
  keywords: [
    'auto service packages',
    'maintenance packages',
    'oil change packages',
    'Newport TN',
    'car care packages',
    'vehicle maintenance deals'
  ],
}

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PackagesContent />
      <Footer />
    </main>
  )
}