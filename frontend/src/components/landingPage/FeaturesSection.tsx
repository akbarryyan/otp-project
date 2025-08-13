import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Jangkauan Global",
    description:
      "Akses nomor telepon dari 100+ negara dan berbagai operator di seluruh dunia untuk verifikasi yang fleksibel.",
    icon: GlobeAltIcon,
    color: "from-[#9FE870] to-[#163300]",
    bgColor: "bg-[#9FE870]/10",
    hoverBg: "group-hover:bg-[#9FE870]/20",
    delay: 0,
    stats: "100+ Negara",
  },
  {
    name: "Layanan Instan",
    description:
      "Dapatkan nomor virtual Anda secara instan dan terima kode OTP dalam hitungan detik dengan sistem otomatis.",
    icon: BoltIcon,
    color: "from-[#FFC091] to-[#260A2F]",
    bgColor: "bg-[#FFC091]/10",
    hoverBg: "group-hover:bg-[#FFC091]/20",
    delay: 0.1,
    stats: "<5 Detik",
  },
  {
    name: "Multi Platform",
    description:
      "Dukungan lengkap untuk semua platform utama termasuk WhatsApp, Telegram, Instagram, dan 50+ layanan lainnya.",
    icon: DevicePhoneMobileIcon,
    color: "from-[#260A2F] to-[#9FE870]",
    bgColor: "bg-[#260A2F]/10",
    hoverBg: "group-hover:bg-[#260A2F]/20",
    delay: 0.2,
    stats: "50+ Platform",
  },
  {
    name: "Sukses Terjamin",
    description:
      "Tingkat keberhasilan 99.8% dengan penggantian nomor otomatis dan sistem backup untuk memastikan verifikasi berhasil.",
    icon: CheckBadgeIcon,
    color: "from-[#163300] to-[#FFC091]",
    bgColor: "bg-[#163300]/10",
    hoverBg: "group-hover:bg-[#163300]/20",
    delay: 0.3,
    stats: "99.8% Sukses",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-16 left-12 w-32 h-32 bg-gradient-to-br from-[#9FE870]/20 to-[#163300]/10 rounded-[2rem] blur-sm"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            x: [-15, 15, -15],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-[#FFC091]/25 to-[#260A2F]/15 rounded-full blur-sm"
          animate={{
            y: [-25, 25, -25],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-[#260A2F]/20 to-[#9FE870]/10 rounded-2xl blur-sm"
          animate={{
            rotate: [0, -120, -240],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 right-12 w-20 h-20 bg-gradient-to-br from-[#163300]/25 to-[#FFC091]/15 rounded-3xl blur-sm"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 60, 120],
            x: [-12, 12, -12],
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
            className="inline-flex items-center justify-center px-4 py-2 bg-[#9FE870]/10 border border-[#9FE870]/20 rounded-full text-[#163300] font-semibold text-sm mb-6"
          >
            ✨ Fitur Unggulan LinkOTP
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mengapa Memilih{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#163300] to-[#9FE870]">
                LinkOTP
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#9FE870] to-[#163300] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Solusi terdepan dengan teknologi canggih dan jangkauan global untuk
            semua kebutuhan verifikasi Anda dengan standar keamanan enterprise
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: feature.delay,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateY: 3,
              }}
              className={`group relative bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 cursor-pointer overflow-hidden ${feature.bgColor} ${feature.hoverBg}`}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${feature.color
                    .replace("from-", "")
                    .replace(" to-", ", ")})`,
                }}
                initial={{ scale: 0, borderRadius: "50%" }}
                whileHover={{
                  scale: 2,
                  borderRadius: "1.5rem",
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with enhanced animation */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                >
                  <motion.div
                    className={`w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
                  </motion.div>

                  {/* Floating effect around icon */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 -z-10`}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="inline-flex items-center px-3 py-1 bg-white/80 border border-gray-200/50 rounded-full text-xs font-semibold text-[#163300] mb-4"
                >
                  {feature.stats}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {feature.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 text-sm lg:text-base">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center mt-6 text-[#163300] group-hover:text-white font-semibold text-sm"
                >
                  Pelajari lebih lanjut
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Enhanced hover border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                whileHover={{
                  borderColor: "rgba(159, 232, 112, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Glowing effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9FE870]/20 to-[#163300]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{
                  transform: "scale(1.1)",
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#163300]/5 via-[#9FE870]/5 to-[#FFC091]/5 rounded-2xl border border-[#9FE870]/20">
            <div className="text-left sm:text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Siap untuk memulai?
              </h3>
              <p className="text-gray-600">
                Bergabunglah dengan 50,000+ pengguna yang telah percaya pada
                LinkOTP
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#163300] to-[#9FE870] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Mulai Sekarang
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
