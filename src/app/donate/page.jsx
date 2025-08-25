import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'Donate to Birmingham Crisis Assistance | The Ladder Nonprofit',
  description: 'Support Birmingham residents in crisis. Your donation helps The Ladder remove barriers preventing success. 100% goes to direct assistance. Donate securely now.',
  keywords: [
    'donate Birmingham Alabama',
    'Birmingham nonprofit donation',
    'crisis assistance donations',
    'barrier removal donations',
    'emergency assistance donations Birmingham',
    'Birmingham charity donations',
    'monthly giving Birmingham',
    'Ladder Climbers donation program',
    'tax deductible donation Birmingham',
    '501c3 donation Alabama'
  ],
  openGraph: {
    title: 'Donate to Birmingham Crisis Assistance | The Ladder',
    description: 'Support Birmingham residents facing barriers. Your tax-deductible donation provides direct crisis intervention and barrier removal assistance.',
    url: 'https://www.the-ladder.org/donate',
    type: 'website'
  }
}

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Help Birmingham Residents <span className="text-primary-600">Climb Over Barriers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your donation directly supports individuals in crisis, helping them overcome the specific barriers 
              preventing their success. Every dollar goes toward barrier removal assistance.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 inline-block">
              <p className="text-sm text-gray-600">
                <strong>501(c)(3) Tax-Exempt Organization</strong> • EIN: 47-2123160<br/>
                All donations are tax-deductible to the extent allowed by law
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how your donation helps individuals overcome barriers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">$50</div>
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Transportation</h3>
              <p className="text-gray-600 text-sm">
                Provides transportation assistance to help someone reach a job interview or work
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">$150</div>
              <h3 className="font-semibold text-gray-900 mb-2">Housing Barrier Removal</h3>
              <p className="text-gray-600 text-sm">
                Helps with deposits, documentation, or other housing-related barriers
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">$300</div>
              <h3 className="font-semibold text-gray-900 mb-2">Education/Training Access</h3>
              <p className="text-gray-600 text-sm">
                Removes barriers to education, certification, or job training programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Make a Donation</h2>
            
            {/* One-Time vs Monthly Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button className="px-4 py-2 rounded-md bg-white shadow-sm text-primary-600 font-medium">
                  One-Time
                </button>
                <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
                  Monthly ("Ladder Climbers")
                </button>
              </div>
            </div>

            {/* Suggested Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 focus:border-primary-500 transition-colors">
                <div className="text-xl font-bold text-gray-900">$25</div>
              </button>
              <button className="p-4 border-2 border-primary-500 bg-primary-50 rounded-lg">
                <div className="text-xl font-bold text-primary-600">$50</div>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 focus:border-primary-500 transition-colors">
                <div className="text-xl font-bold text-gray-900">$100</div>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 focus:border-primary-500 transition-colors">
                <div className="text-xl font-bold text-gray-900">$250</div>
              </button>
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="custom-amount"
                  className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-lg"
                  placeholder="0.00"
                  min="1"
                  step="1"
                />
              </div>
            </div>

            {/* GDPR Compliant Consent */}
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  id="gdpr-consent"
                  name="gdpr-consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="gdpr-consent" className="ml-3 text-sm text-gray-600">
                  I consent to The Ladder storing and processing my personal data for donation processing 
                  and updates about our impact. <a href="/privacy" className="text-primary-600 hover:text-primary-500">View Privacy Policy</a>
                </label>
              </div>
              <div className="flex items-start mt-3">
                <input
                  id="email-updates"
                  name="email-updates"
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="email-updates" className="ml-3 text-sm text-gray-600">
                  I would like to receive email updates about The Ladder's impact (you can unsubscribe at any time)
                </label>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Choose Payment Method</h3>
              
              {/* PayPal */}
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.344-.1c-1.048-.25-2.473-.156-4.014-.156h-2.86c-.524 0-.968.382-1.05.9L11.1 14.56c-.082.518.281.94.805.94h2.924c4.298 0 6.816-1.747 7.799-6.797.03-.149.054-.294.077-.437.291-1.867-.002-3.137-1.012-4.287C20.582.543 18.574 0 16.004 0H8.544C8.02 0 7.572.382 7.49.901L4.383 21.237a.641.641 0 0 0 .633.74h4.606L11.1 14.56z"/>
                </svg>
                Donate with PayPal
              </button>
              
              {/* Venmo */}
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.554 4.667c.72 1.086 1.074 2.368 1.074 3.845 0 3.018-.948 6.508-2.845 10.469C16.251 22.484 14.782 24 12.936 24c-1.396 0-2.583-.89-3.563-2.67L5.978 4.121H.026L0 4.526l5.425 15.947c1.396 3.563 3.563 3.527 5.959 3.527 2.396 0 4.265-1.324 5.661-3.965C19.554 16.017 21 11.685 21 8.845c0-1.477-.354-2.759-1.074-3.845-.72-1.086-1.74-1.633-3.06-1.633-1.32 0-2.583.547-3.785 1.633L11.6 6.789l1.506-2.122c.72-.89 1.644-1.354 2.772-1.354 1.044 0 1.896.451 2.548 1.354h1.128z"/>
                </svg>
                Donate with Venmo
              </button>
              
              {/* Cash App */}
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.59 3.475c-.09-.734-.5-1.342-1.164-1.629-.5-.215-1.12-.179-1.769.107-.648.286-1.316.76-1.976 1.442-1.24 1.276-2.42 3.006-3.354 5.084-.665-1.293-1.34-2.334-2.003-3.083-.663-.75-1.31-1.193-1.925-1.316-.615-.124-1.171.071-1.648.583-.477.512-.81 1.288-1 2.328-.38 2.08-.238 4.815.427 8.204.665 3.39 1.727 7.336 3.186 11.84.09.734.5 1.342 1.164 1.629.5.215 1.12.179 1.769-.107.648-.286 1.316-.76 1.976-1.442 1.24-1.276 2.42-3.006 3.354-5.084.665 1.293 1.34 2.334 2.003 3.083.663.75 1.31 1.193 1.925 1.316.615.124 1.171-.071 1.648-.583.477-.512.81-1.288 1-2.328.38-2.08.238-4.815-.427-8.204-.665-3.39-1.727-7.336-3.186-11.84z"/>
                </svg>
                Donate with Cash App
              </button>
              
              {/* Credit Card */}
              <button className="w-full flex items-center justify-center px-6 py-3 border border-primary-600 rounded-md shadow-sm bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Donate with Credit/Debit Card
              </button>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">Secure & Protected</p>
                  <p className="text-sm text-gray-600">
                    All donations are processed through secure, encrypted payment processors. 
                    We never store your payment information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving Program */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the "Ladder Climbers"</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Monthly donors provide sustainable support that helps us respond to crises immediately. 
            Recurring donors have 8x the lifetime impact of one-time donors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supporter</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$25/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quarterly impact reports</li>
                <li>• Supporter recognition</li>
                <li>• Emergency updates</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-primary-500 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Advocate</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$50/month</div>
              <ul className="text-sm text-primary-700 space-y-2">
                <li>• Everything in Supporter</li>
                <li>• Monthly impact stories</li>
                <li>• Volunteer opportunities</li>
                <li>• Annual report access</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Champion</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$100/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Everything in Advocate</li>
                <li>• Board meeting minutes</li>
                <li>• Annual donor event invite</li>
                <li>• Direct impact tracking</li>
              </ul>
            </div>
          </div>
          
          <a 
            href="/monthly-giving" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Learn More About Monthly Giving
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Donation Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I know my donation is tax-deductible?
              </h3>
              <p className="text-gray-600">
                The Ladder is a 501(c)(3) tax-exempt organization (EIN: 47-2123160). All donations are 
                tax-deductible to the extent allowed by law. You'll receive a receipt for tax purposes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Where does my donation go?
              </h3>
              <p className="text-gray-600">
                100% of donations go directly to barrier removal assistance for individuals in crisis. 
                We maintain transparent financials and publish annual reports showing exactly how funds are used.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I donate in honor of someone?
              </h3>
              <p className="text-gray-600">
                Yes! During the donation process, you can specify if the donation is in honor or memory of someone. 
                We can send notification cards to recipients if you provide their contact information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I see the impact of my donation?
              </h3>
              <p className="text-gray-600">
                Monthly donors receive detailed impact reports. All donors can view our success stories, 
                annual reports, and financial transparency documents to see how donations create change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}