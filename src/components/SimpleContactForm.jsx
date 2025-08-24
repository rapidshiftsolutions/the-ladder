'use client';
import { useState } from 'react';

export default function SimpleContactForm() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setStatus('pending');
    setError(null);

    const form = event.target;
    const formData = new FormData(form);

    try {
      // Submit directly to Netlify Forms endpoint
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        setStatus('ok');
        form.reset();
      } else {
        throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(e.message);
    }
  };

  return (
    <>
    
    {/* Actual visible form */}
    <form
      name="simple-contact"
      method="POST"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleFormSubmit}
      className="bg-gray-800/90 backdrop-blur-sm border border-primary-500/20 p-8 rounded-lg shadow-sm"
    >
      <input type="hidden" name="form-name" value="simple-contact" />
      <div className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-4">Quick Contact Form (Test)</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-2" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input 
            type="tel" 
            name="phone" 
            required
            className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-2" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-2" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea 
            name="message" 
            rows={4} 
            required 
            className="w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-2"
          ></textarea>
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-primary-500 text-black font-semibold rounded-md hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Submitting...' : 'Submit Test Form'}
          </button>
        </div>

        {status === 'ok' && (
          <div className="bg-green-800 border border-green-600 p-4 rounded-md">
            <p className="text-green-200">Form submitted successfully!</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-800 border border-red-600 p-4 rounded-md">
            <p className="text-red-200">Error: {error}</p>
          </div>
        )}
      </div>
    </form>
    </>
  );
}