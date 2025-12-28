"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fadeUpAnimation, staggeredFadeUp } from "@/lib/motion.utils";
import companyDetails from "@/data/company";
import Image from "next/image";
import SeeMore from "../feature/seeMore";
import Link from "next/link";
import { MoveRight, Video } from "lucide-react";

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLg, setIsLg] = useState(false);

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % companyDetails.bannerInfo.bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const statsToShow = isLg
    ? companyDetails.bannerInfo.stats
    : companyDetails.bannerInfo.stats.slice(0, 3);

  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-b-3xl">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {companyDetails.bannerInfo.bannerImages.map((image, index) => (
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
            <div className="absolute inset-0 bg-linear-to-r from-background/70 sm:from-background/95 via-background/40 to-background/1 dark:from-background/90 dark:via-background/50 dark:to-background/20" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-20 md:py-0">
        <div className="max-w-3xl">
          <motion.h1
            className="font-bold mt-4 md:mt-24 mb-4 sm:mb-6 leading-tight"
            {...fadeUpAnimation(20, 0.5, 0.1)}
          >
            <span className="block text-4xl sm:text-5xl lg:text-7xl">{companyDetails.bannerInfo.title.firstPart}</span>
            <span className="block text-color1 text-3xl sm:text-5xl lg:text-7xl">{companyDetails.bannerInfo.title.lastPart}</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            className="mb-4 sm:mb-6 max-w-2xl"
            {...fadeUpAnimation(20, 0.5, 0.2)}
          >
            <SeeMore />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            {...fadeUpAnimation(20, 0.5, 0.3)}
          >
            <Link href={companyDetails.bannerInfo.primaryBtnLink} className="p-3 sm:px-8 sm:py-4 bg-indigo-800 hover:bg-indigo-800/90 text-white font-medium rounded-md sm:rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-color1/30 flex items-center gap-2">
              {companyDetails.bannerInfo.primaryBtnText}
              <MoveRight size={22} />
            </Link>
            <Link href={companyDetails.bannerInfo.secondaryBtnLink} className="px-8 py-3 sm:py-4 bg-transparent border-2 border-color1 text-color1 hover:bg-indigo-500/10 hover:border-indigo-800 font-medium rounded-xl transition-colors duration-300 flex items-center gap-2">
              <Video />
              {companyDetails.bannerInfo.secondaryBtnText}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg py-3 px-4 sm:p-4 flex gap-4 sm:gap-8"
        {...fadeUpAnimation(20, 0.5, 0.4)}
      >
        {statsToShow.map((item, index) => (
          <motion.div 
            key={index}
            custom={index}
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="text-xl sm:text-2xl font-bold text-color1">
              {item.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {companyDetails.bannerInfo.bannerImages.map((_, index) => (
          <motion.button
            key={index}
            custom={index}
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
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