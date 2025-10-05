"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Settings, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management (RCM)",
    description: "We handle billing, coding, claims, denials, collections, and reporting to maximize revenue and improve cash flow. Our solutions reduce administrative burdens and compliance risks.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Healthcare Consulting",
    description: "We provide healthcare consulting services to improve processes, revenue, compliance, and technology. Our experienced consultants implement customized plans based on industry standards.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Settings,
    title: "Technology Solutions",
    description: "We provide technology solutions to improve revenue cycle performance and streamline operations. Our solutions enhance accuracy, efficiency, compliance, and the patient experience while reducing costs.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Briefcase,
    title: "Outsourcing Services",
    description: "We provide scalable and cost-effective outsourcing services for coding, billing, and patient collections. Our services allow you to focus on core competencies while we handle day-to-day operations.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: GraduationCap,
    title: "Training and Education",
    description: "We offer healthcare training and education programs for coding, billing, compliance, and technology. Our programs promote continuous learning and development to improve skills, knowledge, and confidence.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an innovative revenue cycle management and technology company, 
            SimpliBill offers a range of services to healthcare organizations 
            of all sizes and specialties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                      <div className={`bg-gradient-to-br ${service.color} p-3 rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your revenue cycle management?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}