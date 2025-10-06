"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Settings, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management (RCM)",
    description: "We handle billing, coding, claims, denials, collections, and reporting to maximize revenue and improve cash flow. Our solutions reduce administrative burdens and compliance risks.",
    gradient: "from-blue-500 to-blue-600",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Users,
    title: "Healthcare Consulting",
    description: "We provide healthcare consulting services to improve processes, revenue, compliance, and technology. Our experienced consultants implement customized plans based on industry standards.",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Settings,
    title: "Technology Solutions",
    description: "We provide technology solutions to improve revenue cycle performance and streamline operations. Our solutions enhance accuracy, efficiency, compliance, and the patient experience while reducing costs.",
    gradient: "from-purple-500 to-purple-600",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Briefcase,
    title: "Outsourcing Services",
    description: "We provide scalable and cost-effective outsourcing services for coding, billing, and patient collections. Our services allow you to focus on core competencies while we handle day-to-day operations.",
    gradient: "from-orange-500 to-orange-600",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    icon: GraduationCap,
    title: "Training and Education",
    description: "We offer healthcare training and education programs for coding, billing, compliance, and technology. Our programs promote continuous learning and development to improve skills, knowledge, and confidence.",
    gradient: "from-pink-500 to-pink-600",
    glow: "group-hover:shadow-pink-500/20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-foreground md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="h-full group"
              >
                <div className={`h-full p-8 rounded-2xl bg-card border border-border hover:border-border/50 transition-all duration-300 shadow-lg ${service.glow}`}>
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${service.gradient} rounded-full`} />
                </div>
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
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your revenue cycle management?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}