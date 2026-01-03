"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageConverter from "@/components/ImageConverter";
import { motion } from "framer-motion";
import { Zap, Shield, Wand2, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Fast, Free & Secure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6"
            >
              Convert Images <br />
              <span className="text-gradient">With Zero effort.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Experience the ultimate online image converter. High quality, instant downloads,
              and 100% privacy guaranteed. No registration required.
            </motion.p>
          </div>

          <ImageConverter />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose v7 Converter?</h2>
            <p className="text-gray-600">Built for speed, security, and simplicity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="100% Private"
              description="Your images are processed in-memory and never stored on our servers. They are automatically deleted after conversion."
            />
            <FeatureCard
              icon={<Wand2 className="w-8 h-8 text-primary" />}
              title="Crystal Clear"
              description="Maintain the highest quality possible. Our advanced algorithms ensure sharp and vibrant output for every format."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-primary" />}
              title="Universal Access"
              description="Works on any device, anywhere. No need to install any software. Just drag, drop, and convert."
            />
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <blockquote className="text-2xl italic font-medium text-gray-900 border-l-4 border-primary pl-8 text-left">
            "I built v7 Image Converter to provide a seamless, ad-free, and privacy-first solution for developers and creators who value their time and data security."
          </blockquote>
          <p className="mt-6 font-bold text-secondary text-lg">— Vaibhaw Kumar Parashar</p>
          <p className="text-primary text-sm font-medium">Founder & Developer</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
