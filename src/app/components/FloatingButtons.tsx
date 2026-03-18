import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/919741193344", "_blank");
  };

  const callNow = () => {
    window.open("tel:9741193344");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Call Now Button for Mobile */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={callNow}
        className="fixed bottom-6 left-6 z-50 md:hidden w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#D4AF37]/50 transition-all duration-300 group"
        aria-label="Call Now"
      >
        <Phone className="w-8 h-8 text-[#0f1f3d] group-hover:scale-110 transition-transform" />
      </motion.button>
    </>
  );
}
