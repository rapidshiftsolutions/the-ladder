// components/page-commercial-banking-contact.jsx
import React from 'react';
import DynamicContactSection from '/src/components/dynamic-contact-section';

const ContactSection = () => {
  return (
    <DynamicContactSection
      id="contact"
      title="Connect with a Commercial Banking Specialist"
      description="Ready to explore how English Mountain Raceway can support your business growth? Contact our commercial banking team to discuss your specific needs and discover the right solutions for your company."
      phoneNumber="866.317.0810"
      phoneLabel="Commercial Banking"
      email="info@servisfirstbank.com"
      emailLabel="Email Our Team"
      ctaText="Request Information"
      ctaSubtext="Schedule a consultation with one of our experts to explore solutions tailored to your business."
      ctaLinkText="Contact Us"
      ctaLinkHref="/contact-us"
    />
  );
};

export default ContactSection;