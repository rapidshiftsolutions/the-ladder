'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'


export default function StudioPage() {
  return (
    <div>
    <div className="relative h-screen">
      <NextStudio config={config}/>
    </div>
          <div className="bottom-0 left-0 right-0 bg-[#0F255E] text-white text-center py-3 text-sm z-50 shadow-lg transition-all duration-300 ease-in-out">
          For support visit{' '}
          <a
            href="https://RapidShiftSolutions.com"
            target="_blank"
            rel="noopener" 
            className="font-semibold text-[#FF4400] hover:underline transition-colors duration-200"
          >
            RapidShiftSolutions.com
          </a>{' '}
          or email{' '}
          <a
            href="mailto:support@rapidshiftsolutions.com"
            className="font-semibold text-[#FF4400] hover:underline transition-colors duration-200"
          >
            support@rapidshiftsolutions.com
          </a>
          .
        </div></div>
  )
}
