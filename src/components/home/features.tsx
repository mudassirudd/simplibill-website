"use client";

import { motion } from "framer-motion";
import { Cloud, BarChart3, FileText, CreditCard, TrendingUp, Workflow, Users2 } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Secure, Cloud-Based Access",
    description: "Access your data securely from anywhere with our HIPAA-compliant cloud infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Monitor your revenue cycle performance with intuitive, real-time analytics and insights.",
  },
  {
    icon: FileText,
    title: "Claims Management",
    description: "Streamline claims submission, tracking, and follow-up to reduce denials and accelerate payments.",
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    description: "Efficiently manage patient payments, insurance reimbursements, and financial transactions.",
  },
  {
    icon: TrendingUp,
    title: "Analytics and Reporting",
    description: "Gain actionable insights with comprehensive reports and customizable analytics tools.",
  },
  {
    icon: Workflow,
    title: "Customizable Workflows",
    description: "Adapt our platform to match your organization's unique processes and requirements.",
  },
  {
    icon: Users2,
    title: "Patient Engagement",
    description: "Enhance patient experience with transparent billing and easy payment options.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SimpliBill App & Portal <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SimpliBill has developed technology to help healthcare organizations 
            streamline their revenue cycle operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>