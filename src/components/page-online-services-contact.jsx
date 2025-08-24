// components/page-online-services-contact.jsx
import React from 'react';
import DynamicContactSection from '/src/components/dynamic-contact-section';

const ContactSection = () => {
  return (
    <DynamicContactSection
      id="contact"
      title="How Can We Help?"
      description="Have questions about our online banking services? Our team is ready to assist you with any inquiries about digital banking tools and solutions."
      phoneNumber="866.922.5794"
      phoneLabel="Customer Support"
      email="info@servisfirstbank.com"
      emailLabel="Digital Banking Support"
      ctaText="Get Assistance"
      ctaSubtext="Our digital banking specialists can help you set up and optimize your online banking experience."
      ctaLinkText="Contact Support"
      ctaLinkHref="/contact-us"
    />
  );
};

export default ContactSection;