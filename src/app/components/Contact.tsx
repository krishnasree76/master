import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const businessHours = [
  { days: "Monday - Friday", hours: "9 AM - 9 PM" },
  { days: "Saturday", hours: "10 AM - 6 PM" },
  { days: "Sunday", hours: "10 AM - 6 PM" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `Hello, I am ${formData.name}.
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`;

  const whatsappUrl = `https://wa.me/919741193344?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setFormData({ name: "", email: "", phone: "", message: "" });
};

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a3a52]">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free quote
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:9741193344"
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0f1f3d]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Phone</p>
                    <p className="text-xl">9741193344</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0f1f3d]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Email</p>
                    <p className="text-xl">info@masterstroke.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0f1f3d]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Address</p>
                    <p className="text-xl">
                      159/8, JP Nagar 9th Phase,<br />
                      Bengaluru
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border-2 border-[#D4AF37]/30 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl text-[#1a3a52]">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule) => (
                  <div key={schedule.days} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{schedule.days}</span>
                    <span className="text-[#1a3a52]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2977866094624!2d77.5712867!3d12.8837848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154f8e2e8c07%3A0x6c3c8e6e8e8e8e8e!2sJP%20Nagar%209th%20Phase%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#D4AF37]/30">
              <h3 className="text-2xl md:text-3xl mb-6 text-[#1a3a52]">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full h-12 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full h-12 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full h-12 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#C09E2F] hover:to-[#E5C100] text-[#0f1f3d] text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
