import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Jangkauan Global",
    description:
      "Akses nomor telepon dari 100+ negara dan berbagai operator di seluruh dunia.",
    icon: GlobeAltIcon,
    color: "bg-[#9FE870]",
    delay: 0,
  },
  {
    name: "Layanan Instan",
    description:
      "Dapatkan nomor virtual Anda secara instan dan terima kode OTP secara real-time.",
    icon: BoltIcon,
    color: "bg-[#FFC091]",
    delay: 0.1,
  },
  {
    name: "Multi Platform",
    description:
      "Dukungan untuk semua platform utama termasuk media sosial, aplikasi chat, dan lainnya.",
    icon: DevicePhoneMobileIcon,
    color: "bg-[#260A2F]",
    delay: 0.2,
  },
  {
    name: "Sukses Terjamin",
    description:
      "Tingkat keberhasilan tinggi dengan penggantian nomor otomatis jika verifikasi gagal.",
    icon: CheckBadgeIcon,
    color: "bg-[#163300]",
    delay: 0.3,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 w-24 h-24 bg-[#9FE870]/15 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-[#FFC091]/20 rounded-full"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-24 w-20 h-20 bg-[#260A2F]/25 rounded-xl"
          animate={{
            rotate: [0, -90, -180],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-18 h-18 bg-[#163300]/20 rounded-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 45, 90],
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mengapa Memilih
            <span className="block text-[#163300]">LinkOTP?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi terdepan dengan teknologi canggih dan jangkauan global untuk
            semua kebutuhan verifikasi Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#163300] transition-colors duration-300">
                  {feature.name}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#9FE870] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
