import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();
    
    // Convert FormData to URLSearchParams for Netlify
    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      params.append(key, value);
    }
    
    // Ensure form-name is set
    params.set('form-name', 'contact');
    
    console.log('Submitting to Netlify:', params.toString());
    
    // Submit to Netlify Forms endpoint
    const response = await fetch(`${process.env.URL || 'https://oemradiorepair.com'}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Netlify submission failed:', response.status, response.statusText);
      return NextResponse.json(
        { success: false, error: 'Form submission failed' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}