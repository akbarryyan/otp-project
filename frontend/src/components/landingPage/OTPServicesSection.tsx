import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  SparklesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const otpServices = [
  {
    country: "Indonesia",
    operator: "Telkomsel",
    price: "Rp 2.300",
    originalPrice: "Rp 2.800",
    availability: "Tersedia",
    status: "hot",
    flag: "🇮🇩",
    successRate: "99.8%",
    responseTime: "< 30 detik",
    description: "Operator terpopuler dengan jangkauan terluas",
  },
  {
    country: "Malaysia",
    operator: "Maxis",
    price: "Rp 2.700",
    originalPrice: "Rp 3.200",
    availability: "Tersedia",
    status: "popular",
    flag: "🇲🇾",
    successRate: "99.5%",
    responseTime: "< 45 detik",
    description: "Provider premium dengan kualitas stabil",
  },
  {
    country: "Singapore",
    operator: "Singtel",
    price: "Rp 3.400",
    originalPrice: "Rp 3.900",
    availability: "Tersedia",
    status: "premium",
    flag: "🇸🇬",
    successRate: "99.9%",
    responseTime: "< 15 detik",
    description: "Kualitas terbaik dengan respon tercepat",
  },
  {
    country: "Thailand",
    operator: "AIS",
    price: "Rp 3.100",
    originalPrice: "Rp 3.600",
    availability: "Tersedia",
    status: "recommended",
    flag: "🇹🇭",
    successRate: "99.7%",
    responseTime: "< 25 detik",
    description: "Pilihan terbaik untuk stabilitas tinggi",
  },
];

const OTPServicesSection: React.FC = () => {
  const getStatusBadge = (status: string) => {
    const badges = {
      hot: { color: "bg-red-500", text: "🔥 HOT", textColor: "text-white" },
      popular: {
        color: "bg-blue-500",
        text: "⭐ POPULAR",
        textColor: "text-white",
      },
      premium: {
        color: "bg-purple-500",
        text: "💎 PREMIUM",
        textColor: "text-white",
      },
      recommended: {
        color: "bg-green-500",
        text: "✨ DIREKOMENDASIKAN",
        textColor: "text-white",
      },
    };
    return badges[status as keyof typeof badges] || badges.recommended;
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-16 left-12 w-32 h-32 bg-gradient-to-br from-[#9FE870]/20 to-[#163300]/10 rounded-3xl blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-[#FFC091]/25 to-[#260A2F]/15 rounded-full blur-sm"
          animate={{
            x: [-25, 25, -25],
            y: [-30, 30, -30],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-[#260A2F]/20 to-[#9FE870]/15 rounded-2xl blur-sm"
          animate={{
            rotate: [0, -180, -360],
            x: [-15, 15, -15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-26 h-26 bg-gradient-to-br from-[#163300]/20 to-[#FFC091]/10 rounded-xl blur-sm"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 270, 360],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-to-br from-[#9FE870]/25 to-[#163300]/15 rounded-full blur-sm"
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFC091]/20 via-[#9FE870]/15 to-[#163300]/10 border border-[#9FE870]/30 rounded-full text-[#163300] font-semibold text-sm mb-8 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <GlobeAltIcon className="w-5 h-5 mr-3" />
            🌍 Layanan Global Terpercaya
            <SparklesIcon className="w-4 h-4 ml-3" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Layanan OTP{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#163300] via-[#9FE870] to-[#FFC091]">
                Seluruh Dunia
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#163300] via-[#9FE870] to-[#FFC091] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Pilih dari berbagai negara dan operator dengan harga kompetitif
            dalam Rupiah, tingkat keberhasilan tinggi, dan respon time yang
            cepat
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#9FE870] rounded-full animate-pulse" />
              <span className="text-gray-700 font-semibold">100+ Negara</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#FFC091] rounded-full animate-pulse" />
              <span className="text-gray-700 font-semibold">500+ Operator</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#163300] rounded-full animate-pulse" />
              <span className="text-gray-700 font-semibold">
                99.5% Success Rate
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {otpServices.map((service, index) => {
            const badge = getStatusBadge(service.status);
            return (
              <motion.div
                key={service.country}
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.3,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  rotateY: 3,
                }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-6 lg:p-8 hover:shadow-2xl hover:border-[#9FE870]/40 transition-all duration-500 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`absolute top-4 right-4 ${badge.color} ${badge.textColor} px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10`}
                >
                  {badge.text}
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#9FE870]/5 via-transparent to-[#163300]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{
                    background:
                      "linear-gradient(135deg, rgba(159,232,112,0.1), rgba(22,51,0,0.05))",
                  }}
                />

                {/* Header */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-4xl filter drop-shadow-lg">
                        {service.flag}
                      </span>
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-[#9FE870]/20 to-[#163300]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#163300] transition-colors mb-1">
                        {service.country}
                      </h3>
                      <p className="text-gray-500 font-medium">
                        {service.operator}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  {/* Price Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl group-hover:from-[#9FE870]/10 group-hover:to-[#163300]/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <CurrencyDollarIcon className="w-5 h-5 text-[#163300]" />
                      <span className="text-gray-600 font-medium">Harga</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">
                          {service.originalPrice}
                        </span>
                        <span className="text-xl lg:text-2xl font-bold text-[#163300]">
                          {service.price}
                        </span>
                      </div>
                      <span className="text-xs text-[#9FE870] font-semibold">
                        Hemat 18%
                      </span>
                    </div>
                  </motion.div>

                  {/* Success Rate */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl group-hover:from-[#9FE870]/10 group-hover:to-[#163300]/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <ChartBarIcon className="w-5 h-5 text-[#9FE870]" />
                      <span className="text-gray-600 font-medium">
                        Success Rate
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-[#9FE870]">
                        {service.successRate}
                      </span>
                      <motion.div
                        className="w-2 h-2 bg-[#9FE870] rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Response Time */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl group-hover:from-[#9FE870]/10 group-hover:to-[#163300]/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        ⚡
                      </motion.div>
                      <span className="text-gray-600 font-medium">
                        Response Time
                      </span>
                    </div>
                    <span className="text-lg font-bold text-[#FFC091]">
                      {service.responseTime}
                    </span>
                  </motion.div>

                  {/* Availability */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#9FE870]/10 to-[#163300]/5 rounded-2xl border border-[#9FE870]/20"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckBadgeIcon className="w-5 h-5 text-[#9FE870]" />
                      <span className="text-gray-600 font-medium">Status</span>
                    </div>
                    <motion.div
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-lg font-bold text-[#9FE870]">
                        {service.availability}
                      </span>
                      <motion.div
                        className="w-3 h-3 bg-[#9FE870] rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(159,232,112,0.4)",
                            "0 0 0 10px rgba(159,232,112,0)",
                            "0 0 0 0 rgba(159,232,112,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(22,51,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-[#163300] hover:bg-[#9FE870] text-white font-bold rounded-2xl transition-all duration-500 shadow-lg group-hover:shadow-2xl relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>Pilih Layanan</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-6 left-6 w-2 h-2 bg-[#FFC091] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 w-3 h-3 bg-[#9FE870] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 + 1,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
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
                Tidak menemukan negara yang Anda cari?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Kami memiliki 100+ negara lainnya dengan berbagai operator.
                <br />
                Hubungi tim support kami untuk mendapatkan rekomendasi terbaik!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#163300] to-[#9FE870] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 space-x-3"
              >
                <span>Lihat Semua Layanan</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🌍
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OTPServicesSection;
