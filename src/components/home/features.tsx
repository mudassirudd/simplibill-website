"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cloud, FileText, CreditCard, Workflow, Users2, BarChart3, TrendingUp } from "lucide-react";

// Large alternating features
const largeFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Monitor your revenue cycle performance with intuitive, real-time analytics and insights. Track key metrics, identify bottlenecks, and make data-driven decisions instantly.",
    image: "/images/dashboard.png",
    reverse: false,
  },
  {
    icon: TrendingUp,
    title: "Analytics and Reporting",
    description: "Gain actionable insights with comprehensive reports and customizable analytics tools. Track performance trends, forecast revenue, and optimize your RCM strategy.",
    image: "/images/feature-four.svg",
    reverse: true,
  },
];

// Simple feature cards
const simpleFeatures = [
  {
    icon: Cloud,
    title: "Secure, Cloud-Based Access",
    description: "Access your data securely from anywhere with our HIPAA-compliant cloud infrastructure.",
    image: "/images/feature-five.svg",
  },
  {
    icon: FileText,
    title: "Claims Management",
    description: "Streamline claims submission, tracking, and follow-up to reduce denials and accelerate payments.",
    image: "/images/feature-two.svg",
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    description: "Efficiently manage patient payments, insurance reimbursements, and financial transactions.",
    image: "/images/feature-three.svg",
  },
  {
    icon: Workflow,
    title: "Customizable Workflows",
    description: "Adapt our platform to match your organization's unique processes and requirements.",
    image: "/images/feature-one.svg",
  },
  {
    icon: Users2,
    title: "Patient Engagement",
    description: "Enhance patient experience with transparent billing and easy payment options.",
    image: "/images/feature-seven.png",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20"
          >
            SimpliBill App & Portal Features
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Intelligent Revenue Cycle
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gain detailed insights into your marketing performance and campaign metrics with our advanced analytics tools.
          </p>
        </motion.div>

        {/* Hero Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 max-w-6xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-border shadow-2xl">
            <Image
              src="/images/dashboard.png"
              alt="SimpliBill Dashboard"
              fill
              className="object-cover"
            />
            
            {/* Decorative glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
        </motion.div>

        {/* Large Alternating Features */}
        <div className="space-y-32 mb-32">
          {largeFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  feature.reverse ? "" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${feature.reverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                      <span className="text-muted-foreground">Real-time data synchronization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                      <span className="text-muted-foreground">HIPAA compliant security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                      <span className="text-muted-foreground">24/7 customer support</span>
                    </li>
                  </ul>
                </div>

                {/* Image */}
                <div className={`relative ${feature.reverse ? "lg:order-1" : "lg:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-border shadow-2xl"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className={feature.image.endsWith('.svg') ? "object-contain p-8" : "object-cover"}
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute bottom-4 left-4 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />
                  </motion.div>

                  {/* Floating card effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Performance</p>
                        <p className="text-lg font-bold text-foreground">+40%</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {simpleFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
                  {/* Image at top */}
                  <div className="relative w-full aspect-[16/10] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/5 to-emerald-500/5">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Experience the Power of SimpliBill
              </h3>
              <p className="text-xl mb-8 text-blue-50">
                Join hundreds of healthcare organizations already using our platform 
                to optimize their revenue cycle management.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}