"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { staggeredFadeUp } from '../../lib/motion.utils';
import "../../style/animation.css";

const Construction = () => {
  return (
    <section className="flex items-center justify-center min-h-[84vh]">
      <div className="grid md:grid-cols-2 rounded-md shadow-xl max-w-7xl">
        {/* Left: Image Container */}
        <motion.div 
          className="hidden md:pl-4 md:py-4 md:block"
          variants={staggeredFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <Image
            src="/website_is_under_construction.png"
            alt="Construction Image"
            width={1000}
            height={700}
          />
        </motion.div>

        {/* Right: Content */}
        <div className="p-2 sm:p-4 md:p-8 flex flex-col justify-center gap-4 sm:gap-6">
          <motion.div 
            className="flex items-center gap-2"
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <motion.svg
                className="w-10 h-10 text-amber-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                {/* Outer ring */}
                <circle 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.2"
                />
                
                {/* Inner rotating segment */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="40 20"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Exclamation mark icon with pulsing animation */}
                <motion.path
                  d="M12 8v5M12 16h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              
              </motion.svg>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-3">
              We’re Building Something Great
            </h2>
          </motion.div>

          <motion.p 
            className="text-slate-700/60 dark:text-slate-300 leading-relaxed text-xs sm:text-[16px] font-3 mb-0 md:mb-2"
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Our website is currently under construction. We’re working hard to bring you new features and a better experience.
            Stay tuned and check back soon — great things are coming!
          </motion.p>

          {/* Progress-like status */}
          <motion.div
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full bg-amber-500 w-2/5 animate-progressbar" />
            </div>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Estimated launch: Q1 2026</div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div 
            className="flex gap-2 mt-2"
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <Link
              href="/"
              className="flex items-center px-3 sm:px-5 py-2 h-10 sm:h-full text-sm sm:text-md rounded-full bg-amber-600/95 text-white hover:bg-amber-600 hover:shadow-md transition-all duration-500"
            >
              Notify Me
            </Link>

            <Link
              href="/"
              className="flex items-center px-3 sm:px-5 py-2 h-10 sm:h-full text-sm sm:text-md rounded-full border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-sm transition-colors duration-700 ease-in-out"
            >
              Back to Home
            </Link>
          </motion.div>

        </div>

        {/* Mobile: Image shown under content */}
        <motion.div 
          className="md:hidden p-2 sm:p-4"
          variants={staggeredFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <Image
            src="/website_is_under_construction.png"
            alt="Construction Image"
            width={1000}
            height={700}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Construction