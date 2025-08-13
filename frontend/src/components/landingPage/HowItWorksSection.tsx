import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const workSteps = [
  {
    step: 1,
    title: "Pilih Layanan",
    description: "Pilih negara dan platform yang ingin Anda verifikasi",
    icon: GlobeAltIcon,
    color: "bg-[#9FE870]",
  },
  {
    step: 2,
    title: "Dapatkan Nomor",
    description: "Sistem akan memberikan nomor virtual secara instan",
    icon: DevicePhoneMobileIcon,
    color: "bg-[#FFC091]",
  },
  {
    step: 3,
    title: "Terima OTP",
    description: "Gunakan nomor tersebut dan tunggu kode verifikasi masuk",
    icon: BoltIcon,
    color: "bg-[#260A2F]",
  },
  {
    step: 4,
    title: "Selesai!",
    description: "Akun Anda berhasil diverifikasi dan siap digunakan",
    icon: CheckBadgeIcon,
    color: "bg-[#163300]",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-gradient-to-br from-[#9FE870]/5 to-[#FFC091]/5 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 w-20 h-20 bg-[#163300]/15 rounded-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-[#260A2F]/20 rounded-full"
          animate={{
            x: [-25, 25, -25],
            y: [-15, 15, -15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-24 w-24 h-24 bg-[#FFC091]/15 rounded-3xl"
          animate={{
            rotate: [0, -270, -360],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-18 h-18 bg-[#9FE870]/25 rounded-xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-14 h-14 bg-[#260A2F]/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
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
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cara Kerja
            <span className="block text-[#163300]">Yang Mudah</span>
          </h2>
          <p className="text-xl text-gray-600">
            Dapatkan nomor virtual dan verifikasi OTP hanya dalam 4 langkah
            sederhana
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white border-4 border-[#9FE870]/30 rounded-full text-[#163300] font-bold text-lg mb-6">
                {step.step}
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 mx-auto rounded-2xl ${step.color} p-5 mb-6 shadow-lg`}
              >
                <step.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
