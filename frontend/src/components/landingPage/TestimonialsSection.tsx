import { motion } from "framer-motion";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  SparklesIcon,
  ChatBubbleLeftEllipsisIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Full Stack Developer",
    company: "Tech Startup Jakarta",
    content:
      "LinkOTP sangat membantu untuk testing aplikasi saya. Layanan cepat dan reliable, harga juga sangat terjangkau. Support untuk berbagai platform memudahkan development workflow.",
    rating: 5,
    avatar: "AR",
    location: "Jakarta, Indonesia",
    verified: true,
    highlight: "Sangat membantu development",
    bgGradient: "from-[#9FE870]/10 to-[#163300]/5",
    iconColor: "text-[#163300]",
  },
  {
    name: "Sarah Chen",
    role: "Digital Marketing Manager",
    company: "E-commerce Global",
    content:
      "Sebagai marketer yang sering butuh akun testing untuk campaign, LinkOTP jadi solusi terbaik. Support 100+ negara dan selalu available 24/7. ROI sangat tinggi!",
    rating: 5,
    avatar: "SC",
    location: "Singapore",
    verified: true,
    highlight: "ROI sangat tinggi",
    bgGradient: "from-[#FFC091]/10 to-[#260A2F]/5",
    iconColor: "text-[#FFC091]",
  },
  {
    name: "Michael Johnson",
    role: "Senior Product Manager",
    company: "SaaS Company USA",
    content:
      "Platform yang sangat mudah digunakan dengan UI/UX yang intuitif. Tim support juga sangat responsif ketika ada pertanyaan. Highly recommended untuk semua developer!",
    rating: 5,
    avatar: "MJ",
    location: "California, USA",
    verified: true,
    highlight: "UI/UX yang intuitif",
    bgGradient: "from-[#260A2F]/10 to-[#9FE870]/5",
    iconColor: "text-[#260A2F]",
  },
  {
    name: "Lisa Wong",
    role: "Senior QA Engineer",
    company: "Fintech Innovation",
    content:
      "Quality service dengan harga yang sangat kompetitif. Interface user-friendly dan proses verifikasi sangat cepat. Perfect untuk automation testing dan CI/CD pipeline.",
    rating: 5,
    avatar: "LW",
    location: "Hong Kong",
    verified: true,
    highlight: "Perfect untuk automation",
    bgGradient: "from-[#163300]/10 to-[#FFC091]/5",
    iconColor: "text-[#9FE870]",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15" />

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#260A2F]/15 to-[#9FE870]/10 rounded-full blur-sm"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            y: [-25, 25, -25],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-12 right-20 w-32 h-32 bg-gradient-to-br from-[#9FE870]/20 to-[#163300]/10 rounded-3xl blur-sm"
          animate={{
            x: [-35, 35, -35],
            y: [0, -20, 0],
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-28 left-12 w-28 h-28 bg-gradient-to-br from-[#FFC091]/20 to-[#260A2F]/10 rounded-2xl blur-sm"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 right-24 w-24 h-24 bg-gradient-to-br from-[#163300]/25 to-[#FFC091]/15 rounded-xl blur-sm"
          animate={{
            rotate: [0, 270, 360],
            x: [-25, 25, -25],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-to-br from-[#260A2F]/20 to-[#9FE870]/15 rounded-full blur-sm"
          animate={{
            scale: [1, 1.8, 1],
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative w-full px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#260A2F]/10 via-[#9FE870]/15 to-[#FFC091]/10 border border-[#9FE870]/30 rounded-full text-[#163300] font-semibold text-sm mb-8 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-3" />
            💬 Testimoni Pengguna
            <SparklesIcon className="w-4 h-4 ml-3" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Apa Kata{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#163300] via-[#9FE870] to-[#260A2F]">
                Pengguna Kami
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#163300] via-[#9FE870] to-[#260A2F] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
            ?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Testimoni dari ribuan developer, marketer, dan QA engineer yang
            telah merasakan kemudahan dan keandalan LayananLinkOTP
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-[#FFC091]" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-3">
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-semibold">
                50,000+ Happy Users
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheckIcon className="w-5 h-5 text-[#9FE870]" />
              <span className="text-gray-700 font-semibold">
                100% Verified Reviews
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateY: 2,
              }}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${testimonial.bgGradient}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#9FE870]/20 to-[#163300]/10 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">💬</span>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#9FE870]/5 via-transparent to-[#163300]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{
                  background:
                    "linear-gradient(135deg, rgba(159,232,112,0.1), transparent, rgba(22,51,0,0.05))",
                }}
              />

              {/* Rating Stars */}
              <div className="relative flex items-center justify-between mb-6">
                <motion.div
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 12 }}
                    >
                      <StarSolid className="w-6 h-6 text-[#FFC091]" />
                    </motion.div>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-600">
                    5.0
                  </span>
                </motion.div>

                {/* Verified Badge */}
                {testimonial.verified && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 px-3 py-1 bg-[#9FE870]/20 border border-[#9FE870]/30 rounded-full"
                  >
                    <ShieldCheckIcon className="w-4 h-4 text-[#9FE870]" />
                    <span className="text-xs font-semibold text-[#163300]">
                      Verified
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Highlight Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${testimonial.iconColor} bg-gradient-to-r ${testimonial.bgGradient} border border-white/50`}
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                {testimonial.highlight}
              </motion.div>

              {/* Testimonial Content */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-gray-700 mb-8 leading-relaxed text-lg relative"
              >
                <span className="text-4xl text-[#9FE870]/30 absolute -top-2 -left-2">
                  "
                </span>
                <span className="relative z-10">{testimonial.content}</span>
                <span className="text-4xl text-[#9FE870]/30 absolute -bottom-4 -right-2">
                  "
                </span>
              </motion.blockquote>

              {/* User Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-16 h-16 bg-gradient-to-br from-[#163300] to-[#9FE870] rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg"
                  >
                    {testimonial.avatar}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#9FE870]/30 to-[#163300]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <motion.div whileHover={{ scale: 1.05 }} className="text-right">
                  <div className="text-xs text-gray-400 mb-1">📍</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {testimonial.location}
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-2 bg-[#FFC091] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              <motion.div
                className="absolute top-20 left-6 w-1 h-1 bg-[#9FE870] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3 + 1,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="relative inline-flex flex-col items-center gap-6 p-8 lg:p-12 bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl border border-gray-200/50 shadow-xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#9FE870]/5 via-transparent to-[#163300]/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{
                background:
                  "linear-gradient(135deg, rgba(159,232,112,0.1), transparent, rgba(22,51,0,0.05))",
              }}
            />
            <div className="relative text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Siap bergabung dengan mereka?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Lebih dari 50,000 developer dan marketer telah mempercayai
                LinkOTP.
                <br />
                Saatnya Anda merasakan pengalaman yang sama!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-[#163300] hover:bg-[#9FE870] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 space-x-3"
                >
                  <span>Mulai Sekarang</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-gray-50 text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-[#9FE870] transition-all duration-300 space-x-3"
                >
                  <span>Lihat Semua Review</span>
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
