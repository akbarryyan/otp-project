import { motion } from "framer-motion";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Developer",
    company: "Tech Startup",
    content:
      "LinkOTP sangat membantu untuk testing aplikasi saya. Layanan cepat dan reliable, harga juga sangat terjangkau.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Sarah Chen",
    role: "Digital Marketer",
    company: "E-commerce Co",
    content:
      "Sebagai marketer yang sering butuh akun testing, LinkOTP jadi solusi terbaik. Support 100+ negara dan selalu available.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Johnson",
    role: "Product Manager",
    company: "SaaS Company",
    content:
      "Platform yang sangat mudah digunakan. Tim support juga responsif ketika ada pertanyaan. Highly recommended!",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Lisa Wong",
    role: "QA Engineer",
    company: "Fintech Startup",
    content:
      "Quality service dengan harga yang kompetitif. Interface user-friendly dan proses verifikasi sangat cepat.",
    rating: 5,
    avatar: "LW",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 bg-[#260A2F]/10 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-16 right-16 w-16 h-16 bg-[#9FE870]/20 rounded-full"
          animate={{
            x: [-30, 30, -30],
            y: [0, -15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-12 w-22 h-22 bg-[#FFC091]/15 rounded-xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 right-32 w-18 h-18 bg-[#163300]/20 rounded-2xl"
          animate={{
            rotate: [0, 270, 360],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-6 w-12 h-12 bg-[#260A2F]/25 rounded-full"
          animate={{
            scale: [1, 1.7, 1],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata
            <span className="block text-[#163300]">Pengguna Kami?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Testimoni dari ribuan pengguna yang puas dengan layanan LinkOTP
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-[#FFC091]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#163300] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
