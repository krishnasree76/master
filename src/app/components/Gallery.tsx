import { motion } from "motion/react";
import texturedImg from "../../assets/textured.jpg";
import renovationImg from "../../assets/renovation.jpg";
import waterproofingImg from "../../assets/waterproofing.jpg";
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1717860477853-9538cf52833c?...",
    title: "Modern Interior",
  },
  {
    url: texturedImg,   // ✅ replaced
    title: "Textured Walls",
  },
  {
    url: renovationImg, // ✅ replaced
    title: "Renovation Work",
  },
  {
    url: "https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?...",
    title: "Office Spaces",
  },
  {
    url: waterproofingImg, // ✅ replaced
    title: "Waterproofing",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a3a52]">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/90 via-[#1a3a52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
