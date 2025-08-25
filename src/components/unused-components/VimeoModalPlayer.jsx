"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

export default function VimeoModalPlayer({
  videoId,
  hash,
  transcript,
  thumbnailUrl,
  thumbnailAlt = "Video thumbnail",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use client-side rendering to create a portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Use Vimeo's preset parameters
  const vimeoParams = "title=0&byline=0&portrait=0&controls=1&dnt=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479";
  const hashParam = hash ? `&h=${hash}` : "";
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?${vimeoParams}${hashParam}`;

  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  // Render thumbnail inside component
  const thumbnailContent = (
    <div 
      onClick={openModal}
      className="relative inline-block cursor-pointer w-full overflow-hidden group"
    >
      <div className="aspect-video w-full relative rounded-lg shadow-md overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
          <div className="bg-black bg-opacity-60 rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-700">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal content for portal - now with full screen and side panel design
  const modalContent = isOpen && (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-full flex flex-col md:flex-row bg-black overflow-hidden"
      >
        {/* Close button - now positioned in the top right corner */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Video container - now takes 70% of the width on desktop, full height */}
        <div className="w-full md:w-[70%] h-[60vh] md:h-full relative">
          <iframe
            src={vimeoUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
            sandbox="allow-scripts allow-same-origin allow-autoplay allow-fullscreen"
          />
        </div>
        
        {/* Transcript section - now as a side panel that takes 30% of the width */}
        {transcript && (
          <div className="w-full md:w-[30%] h-[40vh] md:h-full bg-white overflow-y-auto flex flex-col">
            <div className="p-6 bg-gray-50 sticky top-0 border-b border-gray-200 z-10">
              <h3 className="text-lg font-bold text-gray-900">
                Video Transcript
              </h3>
            </div>
            <div className="p-6 flex-grow overflow-y-auto">
              <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {transcript}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {thumbnailContent}
      {mounted && isOpen && typeof window !== 'undefined' 
        ? ReactDOM.createPortal(
            modalContent, 
            document.body
          )
        : null}
    </>
  );
}