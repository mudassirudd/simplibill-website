"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+", icon: Award },
  { label: "Healthcare Clients", value: "500+", icon: Users },
  { label: "Claims Processed", value: "5M+", icon: TrendingUp },
  { label: "Client Satisfaction", value: "98%", icon: CheckCircle2 },
];

const highlights = [
  "Industry-leading RCM expertise",
  "HIPAA compliant and secure",
  "Dedicated support team",
  "Proven track record of success",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-600">SimpliBill</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SimpliBill is a healthcare revenue cycle management (RCM) and 
              technology consulting company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Transforming Healthcare Revenue Management
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the challenges that healthcare organizations face, 
                and we offer customized solutions, tailored to meet the unique 
                needs of each client. With the healthcare industry facing 
                increasing financial pressures and regulatory complexities, it's 
                more important than ever for organizations to have a robust RCM 
                strategy in place.
              </p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-emerald-600 p-8 h-[400px] flex items-center justify-center">
                <div className="text-center text-white">
                  <Shield className="h-24 w-24 mx-auto mb-4 opacity-90" />
                  <h4 className="text-2xl font-bold mb-2">Trusted Partner</h4>
                  <p className="text-blue-100">
                    Delivering excellence in healthcare RCM since inception
                  </p>
                </div>
                
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-white/20" />
                <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-4 border-white/20" />
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower healthcare organizations with innovative technology 
                and expert guidance, enabling them to optimize their revenue 
                cycle, reduce costs, and focus on what matters most – providing 
                exceptional patient care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}