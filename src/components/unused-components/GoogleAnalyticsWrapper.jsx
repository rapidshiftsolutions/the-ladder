"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-0RFMGX71YW"; // Replace with your Tracking ID

export default function GoogleAnalyticsWrapper() {
  const [isConsentGranted, setIsConsentGranted] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for stored consent
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "granted") {
      setIsConsentGranted(true);
    } else {
      setIsPopupVisible(true);
    }
  }, []);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return {
          city: data.city,
          region: data.region,
          country: data.country_name,
        };
      } catch (error) {
        console.error("Failed to fetch location data:", error);
        return null;
      }
    };

    const sendLocationData = async () => {
      const location = await fetchLocationData();
      if (location) {
        ReactGA.event({
          category: "User Info",
          action: "Location Captured",
          label: `${location.city}, ${location.region}, ${location.country}`,
        });
      }
    };

    if (isConsentGranted) {
      // Initialize GA only if consent is granted
      ReactGA.initialize(TRACKING_ID);

      // Send page view
      ReactGA.send({ hitType: "pageview", page: pathname });

      // Fetch and send location data
      sendLocationData();
    }
  }, [isConsentGranted, pathname]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    setIsConsentGranted(true);
    setIsPopupVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs text-sm text-light-800 z-50">
          <p className="mb-2">
            We use cookies to enhance your browsing experience. By accepting,
            you agree to our use of cookies for analytics and marketing.
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleDecline}
              className="px-4 py-2 bg-light-200 rounded hover:bg-light-300"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
