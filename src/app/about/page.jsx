import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import AboutContent from '/src/components/about-content'

export const metadata = {
  title: 'About OEM Radio Repair | Birmingham AL UConnect & Radio Repair Service',
  description: 'Learn about OEM Radio Repair - family-owned business in Birmingham, AL. Professional OEM radio repair service for Dodge, Ford, GM, Toyota. UConnect radio repair experts since 2010.',
  keywords: [
    'oem radio repair birmingham al',
    'oem radio repair burnsville mn',
    'roberts oem radio repair',
    'about oem radio repair',
    'alex harmon oem radio repair',
    'family business radio repair',
    'uconnect radio repair birmingham',
    'dodge radio repair birmingham al',
    'professional oem radio repair',
    'birmingham alabama radio repair',
    'oem car radio repair birmingham'
  ],
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  )
}