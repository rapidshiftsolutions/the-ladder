'use client';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load the reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);
    };

    loadRecaptcha();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const scripts = document.querySelectorAll(`script[src*="recaptcha/api.js"]`);
      scripts.forEach(script => script.remove());
    };
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setStatus('pending');
    setError(null);

    const form = event.target;
    const formData = new FormData(form);

    try {
      // Execute reCAPTCHA and get token
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA has not loaded yet');
      }

      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, 
        { action: 'submit_contact_form' }
      );

      // Add reCAPTCHA token to form data
      formData.append('g-recaptcha-token', token);

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.message || `Error: ${res.status} ${res.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (e) {
      setStatus('error');
      setError(e.message);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      onSubmit={handleFormSubmit}
      className="bg-gray-800/90 backdrop-blur-sm border border-primary-500/20 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </div>

      <div className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-500">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                First Name <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                name="firstName" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="John"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                name="lastName" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Phone <span className="text-red-600">*</span>
              </label>
              <input 
                type="tel" 
                name="phone" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-500">Vehicle Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Year <span className="text-red-600">*</span>
              </label>
              <select 
                name="year" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
              >
                <option value="">Select Year</option>
                {Array.from({length: 15}, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Make <span className="text-red-600">*</span>
              </label>
              <select 
                name="make" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
              >
                <option value="">Select Make</option>
                <option value="Dodge">Dodge</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Jeep">Jeep</option>
                <option value="Ram">Ram</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="GMC">GMC</option>
                <option value="Ford">Ford</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Model <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                name="model" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="e.g., Charger"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Trim/Package
              </label>
              <input 
                type="text" 
                name="trim" 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="e.g., SRT8"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              VIN (Optional - helps ensure exact compatibility)
            </label>
            <input 
              type="text" 
              name="vin" 
              maxLength="17"
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
              placeholder="17-digit VIN (optional)"
            />
          </div>
        </div>

        {/* Problem & Service Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-500">Service Request</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Primary Issue <span className="text-red-600">*</span>
            </label>
            <select 
              name="issue" 
              required 
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
            >
              <option value="">Select Issue Type</option>
              <option value="touchscreen-not-responding">Touchscreen Not Responding</option>
              <option value="cracked-screen">Cracked/Broken Screen</option>
              <option value="display-issues">Display Issues (Black Screen, Lines, etc.)</option>
              <option value="ghost-touching">Ghost Touching/Random Inputs</option>
              <option value="partial-touch-failure">Partial Touch Failure</option>
              <option value="backlight-issues">Backlight Problems</option>
              <option value="pixel-damage">Dead/Stuck Pixels</option>
              <option value="software-issues">Software/Freezing Issues</option>
              <option value="other">Other Issue</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Detailed Description <span className="text-red-600">*</span>
            </label>
            <textarea 
              name="description" 
              required 
              rows="4"
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
              placeholder="Please describe the problem in detail. Include when it started, any patterns you've noticed, and what you've already tried."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                When did this issue start?
              </label>
              <select 
                name="issueStart" 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
              >
                <option value="">Select Timeframe</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="1-3-months">1-3 Months Ago</option>
                <option value="3-6-months">3-6 Months Ago</option>
                <option value="over-6-months">Over 6 Months Ago</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Service Urgency
              </label>
              <select 
                name="urgency" 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
              >
                <option value="standard">Standard (2-3 days)</option>
                <option value="expedited">Expedited (1-2 days)</option>
                <option value="emergency">Emergency (Same day)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-500">Shipping Address</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Street Address <span className="text-red-600">*</span>
            </label>
            <input 
              type="text" 
              name="address1" 
              required 
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
              placeholder="123 Main Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Apartment, Suite, Unit, etc. (Optional)
            </label>
            <input 
              type="text" 
              name="address2" 
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
              placeholder="Apt 4B"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                City <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                name="city" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="Birmingham"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                State <span className="text-red-600">*</span>
              </label>
              <select 
                name="state" 
                required 
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2"
              >
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                ZIP Code <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                name="zipCode" 
                required 
                pattern="[0-9]{5}"
                maxLength="5"
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-20 transition-colors p-2" 
                placeholder="35233"
              />
            </div>
          </div>
        </div>

        {/* Hidden reCAPTCHA badge info */}
        <div className="text-xs text-gray-400 mt-4">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline"> Privacy Policy</a> and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline"> Terms of Service</a> apply.
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-primary-500 text-black font-semibold text-lg rounded-md hover:bg-primary-600 disabled:bg-gray-600 transition-colors duration-200 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            disabled={!recaptchaLoaded}
          >
            Get Free Repair Quote
          </button>
        </div>

        {status === 'pending' && (
          <div className="bg-blue-800 border border-blue-600 p-4 rounded-md">
            <p className="text-blue-200">Submitting your request...</p>
          </div>
        )}
        
        {status === 'ok' && (
          <div className="bg-green-800 border border-green-600 p-4 rounded-md">
            <p className="text-green-200">Thank you for your message! We'll be in touch with you shortly.</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-800 border border-red-600 p-4 rounded-md">
            <p className="text-red-200">Error: {error}</p>
            <p className="text-red-200 text-sm mt-1">Please try again or contact us directly.</p>
          </div>
        )}
      </div>
    </form>
  );
}