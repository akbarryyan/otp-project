import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  yRange: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ yRange }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-32 left-16 w-32 h-32 bg-[#9FE870]/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-[#FFC091]/15 rounded-2xl"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 bg-[#163300]/10 rounded-3xl"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-16 w-28 h-28 bg-[#260A2F]/15 rounded-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative w-full px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-[#9FE870]/20 rounded-full text-[#163300] font-medium text-sm"
              >
                <span className="w-2 h-2 bg-[#9FE870] rounded-full mr-2 animate-pulse"></span>
                Layanan OTP Terpercaya #1 di Asia Tenggara
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
              >
                Verifikasi{" "}
                <span className="text-transparent bg-clip-text bg-[#9FE870]">
                  Tanpa Batas
                </span>
                <br />
                Dengan{" "}
                <span className="text-transparent bg-clip-text bg-[#163300]">
                  LinkOTP
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Platform terdepan untuk layanan nomor virtual dan verifikasi OTP
                dari 100+ negara. Solusi praktis untuk semua kebutuhan
                verifikasi digital Anda.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/register"
                  className="px-8 py-4 bg-[#163300] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  Mulai Sekarang
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    initial={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.button
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#163300] hover:text-[#163300] transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Lihat Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Global Coverage</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                style={{ y: yRange }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Dashboard Header */}
                <div className="bg-[#163300] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">LinkOTP Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#9FE870]/10 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#163300]">
                        150+
                      </div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="bg-[#FFC091]/10 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#163300]">
                        99.8%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Recent Activity
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">WhatsApp Verification</span>
                        <span className="text-xs text-green-600 font-medium">
                          Success
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Telegram Setup</span>
                        <span className="text-xs text-green-600 font-medium">
                          Success
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Instagram Verification</span>
                        <span className="text-xs text-blue-600 font-medium">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#9FE870] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">24/7</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Always Available
                    </div>
                    <div className="text-xs text-gray-600">
                      Round the clock support
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
