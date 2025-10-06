"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    "Revenue Cycle Management",
    "Healthcare Consulting",
    "Technology Solutions",
    "Outsourcing Services",
    "Training & Education",
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Blog",
    "Contact Us",
  ],
  resources: [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ],
};

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo.png"
                alt="SimpliBill Logo"
                width={150}
                height={40}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SimpliBill is a healthcare revenue cycle management and 
                technology consulting company dedicated to helping healthcare 
                organizations optimize their financial performance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a 
                    href="mailto:info@simplibill.io" 
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    info@simplibill.io
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <span className="text-muted-foreground">
                    Healthcare District<br />
                    Medical Center, Suite 100
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-blue-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-blue-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm"
            >
              © {new Date().getFullYear()} SimpliBill. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm"
            >
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}