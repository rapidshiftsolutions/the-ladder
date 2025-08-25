"use client";

import React, { useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

const LeadForm = () => {
  useEffect(() => {
    window.checkMandatory6588372000000513188 = () => {
      const mandatoryFields = ["Company", "First Name", "Last Name", "Phone"];
      const fieldLabels = ["Company", "First Name", "Last Name", "Phone"];
      for (let i = 0; i < mandatoryFields.length; i++) {
        const field =
          document.forms["WebToLeads6588372000000513188"][mandatoryFields[i]];
        if (field && field.value.trim() === "") {
          alert(`${fieldLabels[i]} cannot be empty.`);
          field.focus();
          return false;
        }
      }
      return true;
    };

    const jQueryScript = document.createElement("script");
    jQueryScript.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    document.body.appendChild(jQueryScript);

    return () => {
      delete window.checkMandatory6588372000000513188;
      if (jQueryScript.parentNode) {
        document.body.removeChild(jQueryScript);
      }
    };
  }, []);

  // The single submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Stop normal form submission
    const submitButton = e.target.querySelector('button[type="submit"]');

    if (window.checkMandatory6588372000000513188()) {
      if (submitButton) submitButton.disabled = true;

      const formData = new FormData(e.target);
      fetch("https://crm.zoho.com/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          alert("Form submitted successfully.");
          if (submitButton) submitButton.disabled = false;
          e.target.reset();
        })
        .catch(() => {
          alert("An error occurred while submitting the form.");
          if (submitButton) submitButton.disabled = false;
        });
    }
  };

  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      style={{ color: "black", maxWidth: "100%" }}
    >
      {/* Minimal Apple-like styles */}
      <form
        className="space-y-4" // a bit of spacing between rows
        id="webform6588372000000513188"
        name="WebToLeads6588372000000513188"
        acceptCharset="UTF-8"
        onSubmit={handleFormSubmit}
      >
        <input
          type="hidden"
          name="xnQsjsdp"
          value="fe06d0214ce24f40afb41c2a5bd962edba8962dfc7374c4fc8f4a8a114adc36e"
        />
        <input
          type="hidden"
          name="xmIwtLD"
          value="09b11f566895d96e01365bd21e3c6dbf6a8884e3e6e2c682ce73a7611b8c307865c927ec81bbd5115a1e79a7b3e4fb2b"
        />
        <input type="hidden" name="actionType" value="TGVhZHM=" />

        {/* Company */}
        <div>
          <label
            htmlFor="Company"
            className="block text-sm font-medium text-light-700"
          >
            Company<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Company"
            name="Company"
            required
            className="mt-1 block w-full rounded-md border border-light-300 
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
          />
        </div>

        {/* First Name */}
        <div>
          <label
            htmlFor="First_Name"
            className="block text-sm font-medium text-light-700"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="First_Name"
            name="First Name"
            required
            className="mt-1 block w-full rounded-md border border-light-300 
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="Last_Name"
            className="block text-sm font-medium text-light-700"
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            required
            className="mt-1 block w-full rounded-md border border-light-300 
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="Phone"
            className="block text-sm font-medium text-light-700"
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Phone"
            name="Phone"
            required
            className="mt-1 block w-full rounded-md border border-light-300 
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-light-700"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="mt-1 block w-full rounded-md border border-light-300 
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-light-700"
          >
            Anything we need to know?
          </label>
          <textarea
            id="Description"
            name="Description"
            className="mt-1 block w-full rounded-md border border-light-300
                       px-3 py-2 focus:border-accent-900 focus:outline-none 
                       focus:ring-accent-500 sm:text-sm"
            rows="3"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 pt-2">
          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-primary-600 
                       px-4 py-2 text-sm font-semibold text-white shadow 
                       hover:bg-accent-500 focus-visible:outline 
                       focus-visible:outline-2 focus-visible:outline-offset-2 
                       focus-visible:outline-accent-600 transition-colors"
          >
            <CheckCircleIcon aria-hidden="true" className="h-5 w-5 mr-1" />
            Submit
          </button>

          {/* Reset Button */}
          <button
            type="reset"
            className="inline-flex items-center rounded-full bg-primary-100 
                       px-4 py-2 text-sm font-medium text-primary-800 shadow 
                       hover:bg-primary-200 focus-visible:outline 
                       focus-visible:outline-2 focus-visible:outline-offset-2 
                       focus-visible:outline-primary-300 transition-colors"
          >
            <XCircleIcon aria-hidden="true" className="h-5 w-5 mr-1" />
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
