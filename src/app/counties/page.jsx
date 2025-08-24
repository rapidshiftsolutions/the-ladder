import { counties } from '/src/data/locations'
import LocationsIndex from '/src/components/locations-index'

export const metadata = {
  title: 'Counties We Serve | OEM Radio Repair Auto Services',
  description: 'OEM Radio Repair serves counties throughout East Tennessee including Knox County, Sevier County, Jefferson County, Hamblen County and more. Professional auto services.',
  keywords: [
    'counties served',
    'auto service counties',
    'East Tennessee counties',
    'Knox County auto service',
    'Sevier County auto service',
    'Jefferson County auto service',
    'Cocke County auto service'
  ],
  openGraph: {
    title: 'Counties We Serve | OEM Radio Repair Auto Services',
    description: 'Professional auto services serving counties throughout East Tennessee. Oil changes, transmission service, and more.',
    type: 'website',
    images: ['/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta.png'],
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/counties'
  }
}

export default function CountiesPage() {
  return <LocationsIndex locations={counties} type="counties" />
}