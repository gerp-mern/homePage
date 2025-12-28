import { motion } from "motion/react";
import { fadeUpAnimation } from "@/lib/motion.utils";

import React from 'react';

interface TitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function Title({ title, subtitle, className = "text-center max-w-3xl mx-auto" }: TitleProps) {
  return (
    <motion.div 
      className={className}
      {...fadeUpAnimation(20, 0.5, 0)}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-foreground/80">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}