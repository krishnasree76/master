import { motion } from "motion/react";
import { Paintbrush, Home, Sparkles, Droplets, Palette, Crown } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior & Exterior Painting",
    description: "Professional painting services for both indoor and outdoor spaces with premium quality paints.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Paintbrush,
    title: "Duco Painting",
    description: "High-gloss, durable finish painting for doors, windows, and furniture.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Polish Work",
    description: "Expert wood polishing to restore and enhance the natural beauty of your furniture.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Waterproofing Work",
    description: "Advanced waterproofing solutions to protect your property from water damage.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Texture Work",
    description: "Creative textured finishes to add depth and character to your walls.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: Crown,
    title: "Royal Play Work",
    description: "Premium decorative finishes for a luxurious and elegant look.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a3a52]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive painting and finishing solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-[#D4AF37]/30">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl mb-3 text-[#1a3a52]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
