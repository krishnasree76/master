import { motion } from "motion/react";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import myImage from "../../assets/your-image.png";
export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1a3a52]">
            About Master Stroke Paintworks
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden h-96 shadow-xl">
  <img
    src={myImage}
    alt="Painting Work"
    className="w-full h-full object-cover"
  />
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-[#1a3a52]">
              15 Years of Excellence in Painting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Master Stroke Paintworks has been transforming homes and
              commercial spaces in Bengaluru for over 15 years. Under the
              leadership of our Managing Director, 
              {" "}
              <span className="text-[#D4AF37] font-semibold">
                R. Kalyan Srinivas Reddy
              </span>
              , we have built a reputation for quality, reliability, and
              exceptional craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of skilled professionals is dedicated to delivering
              premium painting solutions that exceed expectations. From
              residential projects to commercial spaces, we bring color and life
              to every surface we touch.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a3a52]">
                    Premium Quality
                  </p>
                  <p className="text-sm text-gray-600">Top-grade materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a3a52]">Expert Team</p>
                  <p className="text-sm text-gray-600">Skilled professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a3a52]">
                    Timely Delivery
                  </p>
                  <p className="text-sm text-gray-600">On-schedule completion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a3a52]">Satisfaction</p>
                  <p className="text-sm text-gray-600">100% guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}