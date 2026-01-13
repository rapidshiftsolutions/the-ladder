import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PageHero from '@/components/PageHero'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and conditions for using The Ladder\'s website and services.',
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2026'

  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        <PageHero
          title="Terms of Service"
          description="Terms and conditions for using our website and services"
          size="small"
        />

        <SectionWrapper background="light" padding="large">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-[var(--color-text-muted)]">
              Last Updated: {lastUpdated}
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using The Ladder&apos;s website and services, you agree to be 
              bound by these Terms of Service. If you do not agree, please do not use 
              our services.
            </p>

            <h2>About The Ladder</h2>
            <p>
              The Ladder is a 501(c)(3) nonprofit organization (EIN: 47-2123160) based in 
              Birmingham, Alabama. We provide barrier removal assistance to individuals 
              in need.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
            </ul>

            <h2>Donations</h2>
            <p>
              All donations to The Ladder are voluntary and non-refundable unless required 
              by law. Donations are tax-deductible to the extent allowed by law. You will 
              receive a receipt for your donation records.
            </p>
            <p>
              Donations made through third-party payment processors (PayPal, Venmo, Cash App) 
              are subject to their respective terms and conditions.
            </p>

            <h2>Services</h2>
            <p>
              The Ladder provides barrier removal assistance based on available resources 
              and individual circumstances. We do not guarantee assistance to all applicants. 
              All assistance decisions are made at the sole discretion of The Ladder.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is 
              the property of The Ladder or its licensors. You may not reproduce, distribute, 
              or create derivative works without our prior written consent.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              This website and its contents are provided &quot;as is&quot; without warranties of any 
              kind, either express or implied. We do not warrant that the website will be 
              uninterrupted or error-free.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Ladder shall not be liable for 
              any indirect, incidental, special, or consequential damages arising from your 
              use of our website or services.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible 
              for the content or practices of these sites.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws 
              of the State of Alabama, without regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be 
              effective immediately upon posting. Your continued use of the website 
              constitutes acceptance of the modified Terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>The Ladder</strong><br />
              Email: <a href="mailto:info@the-ladder.org">info@the-ladder.org</a><br />
              Birmingham, Alabama
            </p>
          </div>
        </SectionWrapper>
      </main>

      <SiteFooter />
    </>
  )
}
