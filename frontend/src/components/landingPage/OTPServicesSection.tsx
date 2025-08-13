import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const otpServices = [
  {
    country: "Indonesia",
    operator: "Telkomsel",
    price: "$0.15",
    availability: "Available",
    flag: "🇮🇩",
    successRate: "99.8%",
  },
  {
    country: "Malaysia",
    operator: "Maxis",
    price: "$0.18",
    availability: "Available",
    flag: "🇲🇾",
    successRate: "99.5%",
  },
  {
    country: "Singapore",
    operator: "Singtel",
    price: "$0.22",
    availability: "Available",
    flag: "🇸🇬",
    successRate: "99.9%",
  },
  {
    country: "Thailand",
    operator: "AIS",
    price: "$0.20",
    availability: "Available",
    flag: "🇹🇭",
    successRate: "99.7%",
  },
];

const OTPServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-12 w-24 h-24 bg-[#9FE870]/15 rounded-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-16 w-18 h-18 bg-[#FFC091]/20 rounded-full"
          animate={{
            x: [-20, 20, -20],
            y: [-25, 25, -25],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-16 bg-[#260A2F]/25 rounded-3xl"
          animate={{
            rotate: [0, -180, -360],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-20 h-20 bg-[#163300]/15 rounded-xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-12 h-12 bg-[#9FE870]/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
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
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#FFC091]/20 rounded-full text-sm font-medium text-[#260A2F] mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <GlobeAltIcon className="w-4 h-4 mr-2" />
            Layanan Global
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Layanan OTP
            <span className="block text-[#163300]">Seluruh Dunia</span>
          </h2>
          <p className="text-xl text-gray-600">
            Pilih dari berbagai negara dan operator dengan harga kompetitif dan
            tingkat keberhasilan tinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otpServices.map((service, index) => (
            <motion.div
              key={service.country}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 hover:border-[#9FE870]/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.flag}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#163300] transition-colors">
                      {service.country}
                    </h3>
                    <p className="text-gray-500">{service.operator}</p>
                  </div>
                </div>
                <motion.div
                  className="px-3 py-2 rounded-full text-sm font-semibold bg-[#9FE870]/20 text-[#163300]"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.availability}
                </motion.div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600 font-medium">Harga</span>
                  <span className="text-2xl font-bold text-[#163300]">
                    {service.price}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600 font-medium">
                    Success Rate
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-[#9FE870]">
                      {service.successRate}
                    </span>
                    <motion.div
                      className="w-2 h-2 bg-[#9FE870] rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-[#163300] hover:bg-[#9FE870] text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pilih Layanan
              </motion.button>

              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-[#FFC091] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OTPServicesSection;
