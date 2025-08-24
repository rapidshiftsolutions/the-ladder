// components/page-personal-banking-contact.jsx
import React from 'react';
import DynamicContactSection from '/src/components/dynamic-contact-section';

const ContactSection = () => {
  return (
    <DynamicContactSection
      id="contact"
      title="Connect with a Personal Banking Specialist"
      description="Ready to explore how English Mountain Raceway can support your financial goals? Contact our personal banking team to discuss your specific needs and discover the right solutions for you."
      phoneNumber="866.317.0810"
      phoneLabel="Personal Banking"
      email="info@servisfirstbank.com"
      emailLabel="Email Our Team"
      ctaText="Request Information"
      ctaSubtext="Schedule a consultation with one of our experts to explore solutions tailored to your financial needs."
      ctaLinkText="Contact Us"
      ctaLinkHref="/contact-us"
    />
  );
};

export default ContactSection;