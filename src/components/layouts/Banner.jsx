"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fadeUpAnimation } from "@/lib/motion.utils";
import companyDetails from "@/data/company";
import Image from "next/image";

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % companyDetails.bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-b-3xl">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {companyDetails.bannerImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0 
            }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-r from-background/90 to-background/10 dark:from-background/80 dark:to-background/60" />
          </motion.div>
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-16 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-color1/10 backdrop-blur-sm border border-color1/20"
            {...fadeUpAnimation(20, 0.5, 0)}
          >
            <span className="w-2 h-2 rounded-full bg-color1 animate-pulse"></span>
            <span className="text-color1 font-medium text-sm">Trusted by 500+ Enterprises</span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mt-24 mb-6 leading-tight"
            {...fadeUpAnimation(20, 0.5, 0.1)}
          >
            <span className="block">Transform Your</span>
            <span className="block text-color1">Business Today</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl"
            {...fadeUpAnimation(20, 0.5, 0.2)}
          >
            {companyDetails.description} Streamline operations, boost productivity, and drive growth with our cutting-edge ERP solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            {...fadeUpAnimation(20, 0.5, 0.3)}
          >
            <button className="px-8 py-4 bg-color1 hover:bg-color1/90 text-white font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-color1/30 flex items-center gap-2">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-color1 text-color1 hover:bg-color1/10 font-medium rounded-xl transition-all duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex gap-8"
        {...fadeUpAnimation(20, 0.5, 0.4)}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-color1">{companyDetails.stats.uptime}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-color1">{companyDetails.stats.customers}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-color1">{companyDetails.stats.transactions}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Transactions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-color1">{companyDetails.stats.support}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
        </div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        {companyDetails.bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-color1 w-6" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`View banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}