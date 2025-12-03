"use client"

import Link from 'next/link'
import Image from 'next/image'
import "../../style/animation.css";

const Construction = () => {
  return (
    <section className="flex items-center justify-center min-h-[84vh]">
      <div className="grid md:grid-cols-2 rounded-md shadow-xl max-w-7xl">
        {/* Left: Image Container */}
        <div className="hidden md:pl-4 md:py-4 md:block">
          <Image
            src="/website_is_under_construction.png"
            alt="Construction Image"
            width={1000}
            height={700}
          />
        </div>

        {/* Right: Content */}
        <div className="p-2 sm:p-4 md:p-8 flex flex-col justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-10 h-10 text-amber-600"
              viewBox="-2 -2 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M2 21l21-12-9-9L2 12v9z" fill="currentColor" opacity="0.08" />
              <path d="M14 3l7 7-8 5-7-7 8-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-3">
              We’re Building Something Great
            </h2>
          </div>

          <p className="text-slate-700/60 dark:text-slate-300 leading-relaxed text-xs sm:text-[16px] font-3 mb-0 md:mb-2">
            Our website is currently under construction. We’re working hard to bring you new features and a better experience.
            Stay tuned and check back soon — great things are coming!
          </p>

          {/* Progress-like status */}
          <div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full bg-amber-500 w-2/5 animate-[progress_2s_ease-in-out_forwards]" />
            </div>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Estimated launch: Q1 2026</div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2 mt-2">
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
          </div>
     
        </div>

        {/* Mobile: Image shown under content */}
        <div className="md:hidden p-2 sm:p-4">
          <Image
            src="/website_is_under_construction.png"
            alt="Construction Image"
            width={1000}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}

export default Construction