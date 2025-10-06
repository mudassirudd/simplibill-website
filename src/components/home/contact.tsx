"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your revenue cycle management? Contact us today 
            to learn how SimpliBill can help your organization.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Let's Talk</h3>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to answer any questions you may have about our 
                services. Reach out to us and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:info@simplibill.io" 
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    info@simplibill.io
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Healthcare District<br />
                    Medical Center, Suite 100
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
              <h4 className="font-bold text-xl mb-2">24/7 Support Available</h4>
              <p className="text-blue-50">
                Our dedicated team is always ready to assist you with any 
                questions or concerns.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8 rounded-2xl shadow-xl">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Healthcare Organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] resize-none bg-background border-border"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}