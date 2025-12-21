"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fadeUpAnimation } from "@/lib/motion.utils";
import companyDetails from "@/data/company";
import Image from "next/image";

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate banner images
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % companyDetails.bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden rounded-b-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/10 dark:from-background/50 dark:to-background/30" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-16 md:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-color1/10 backdrop-blur-sm border border-color1/20"
            {...fadeUpAnimation(20, 0.5, 0)}
          >
            <span className="w-2 h-2 rounded-full bg-color1 animate-pulse"></span>
            <span className="text-color1 font-medium text-sm">Enterprise Solution</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            {...fadeUpAnimation(20, 0.5, 0.1)}
          >
            Transform Your Business with{" "}
            <span className="text-color1">{companyDetails.firstName}</span>
            <span className="text-color2"> {companyDetails.lastName}</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl"
            {...fadeUpAnimation(20, 0.5, 0.2)}
          >
            {companyDetails.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            {...fadeUpAnimation(20, 0.5, 0.3)}
          >
            <button className="px-8 py-3 bg-color1 hover:bg-color1/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-color1/30">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-color1 text-color1 hover:bg-color1/10 font-medium rounded-lg transition-all duration-300">
              View Demo
            </button>
          </motion.div>
        </div>
      </div>

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

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-color2/10 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-color1/10 blur-2xl animate-float-delay"></div>
    </section>
  );
}