"use client";

import { motion } from "motion/react";
import { fadeUpAnimation } from "@/lib/motion.utils";
import Banner from "@/components/layouts/Banner";
import Title from "@/components/ui/title";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grow">
        <div className="max-w-6xl w-full space-y-16 mx-auto">
              {/* Features Section */}
          <Title 
            title={<>Why Choose <span className="text-color1">GLOBE ERP</span>?</>}
            subtitle="Comprehensive solutions designed to streamline your business operations"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...fadeUpAnimation(20, 0.5, 0.1)}
          >
            {[
              {
                title: "Seamless Integration",
                description: "Connect all your business systems with our unified platform for maximum efficiency."
              },
              {
                title: "Real-time Analytics",
                description: "Gain valuable insights with our powerful dashboard and reporting tools."
              },
              {
                title: "Scalable Solutions",
                description: "Grow your business with solutions that adapt to your changing needs."
              },
              {
                title: "Enhanced Security",
                description: "Protect your data with enterprise-grade security and compliance features."
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is always ready to assist you with any questions."
              },
              {
                title: "Customizable Modules",
                description: "Tailor the system to fit your unique business processes and requirements."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-color1/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-color1 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="bg-linear-to-r from-color1 to-blue-700 rounded-3xl p-8 md:p-12 text-center"
            {...fadeUpAnimation(20, 0.5, 0.2)}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have revolutionized their operations with GLOBE ERP
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-color1 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}