// components/page-treasury-management-contact.jsx
import React from 'react';
import DynamicContactSection from '/src/components/dynamic-contact-section';

const ContactSection = () => {
  return (
    <DynamicContactSection
      id="contact"
      title="Contact Treasury Management"
      description="Ready to learn more about our Treasury Management solutions? Contact our dedicated team to discuss your specific business needs."
      phoneNumber="866.922.5794"
      phoneLabel="Client Support"
      email="info@servisfirstbank.com"
      emailLabel="Email Treasury Management"
      ctaText="Schedule a Consultation"
      ctaSubtext="Meet with one of our Treasury Management specialists to discover how our solutions can improve your business efficiency."
      ctaLinkText="Request a Consultation"
      ctaLinkHref="/contact-us"
    />
  );
};

export default ContactSection;