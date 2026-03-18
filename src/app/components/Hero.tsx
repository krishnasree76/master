import { motion } from "motion/react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const paintImage = "https://images.unsplash.com/photo-1598860024867-a1cb3a858427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50JTIwYnJ1c2hlcyUyMGFydGlzdGljfGVufDF8fHx8MTc3MzgyNTUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1f3d] via-[#1a3a52] to-[#2a4a62]">
      {/* Animated paint strokes background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <img
            src={paintImage}
            alt="Master Stroke Paintworks"
            className="w-full max-w-2xl mx-auto mb-8 rounded-3xl shadow-2xl object-cover h-64 md:h-80"
          /> */}
          <img
  src={paintImage}
  alt="Master Stroke Paintworks"
  className="w-full max-w-2xl mx-auto mb-8 mt-16 rounded-3xl shadow-2xl object-cover h-64 md:h-80"
/>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming Spaces with Perfection
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Premium painting services for homes and offices in Bengaluru
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#C09E2F] hover:to-[#E5C100] text-[#0f1f3d] text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            <MessageSquare className="mr-2" />
            Get a Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-300"
            onClick={() => window.open("tel:9741193344")}
          >
            <Phone className="mr-2" />
            Call Now
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}