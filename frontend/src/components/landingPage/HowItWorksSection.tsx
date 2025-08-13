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

        <div className="relative">
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
                {/* Connecting Line */}
                {index < workSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#9FE870] via-[#FFC091] to-[#9FE870] transform origin-left z-0"
                    style={{
                      left: "60%",
                      width: "calc(100% - 20%)",
                    }}
                  >
                    {/* Animated dots moving along the line */}
                    <motion.div
                      className="absolute top-[-3px] w-2 h-2 bg-[#163300] rounded-full"
                      animate={{
                        x: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                )}

                {/* Step Circle with enhanced styling */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-white border-4 border-[#9FE870] rounded-full text-[#163300] font-bold text-xl mb-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
                    boxShadow: "0 8px 25px rgba(159, 232, 112, 0.3)",
                  }}
                >
                  <span className="relative z-10">{step.step}</span>

                  {/* Pulse animation ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#9FE870] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>

                {/* Icon Container with enhanced styling */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  }}
                  className={`relative w-24 h-24 mx-auto rounded-3xl ${step.color} p-6 mb-8 shadow-xl`}
                  style={{
                    background: `linear-gradient(135deg, ${step.color
                      .replace("bg-[", "")
                      .replace("]", "")} 0%, ${step.color
                      .replace("bg-[", "")
                      .replace("]", "")}dd 100%)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <step.icon className="w-12 h-12 text-white relative z-10" />

                  {/* Floating particles around icon */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      y: [5, -5, 5],
                      x: [-2, 2, -2],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Text Content with enhanced styling */}
                <motion.div whileHover={{ y: -2 }} className="space-y-3">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#163300] to-[#2d5f00] bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg px-2">
                    {step.description}
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFC091]/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile connecting arrows */}
          <div className="lg:hidden">
            {workSteps.map(
              (_, index) =>
                index < workSteps.length - 1 && (
                  <motion.div
                    key={`mobile-arrow-${index}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center my-8"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1 h-12 bg-gradient-to-b from-[#9FE870] to-[#FFC091] rounded-full relative"
                    >
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#FFC091]" />
                    </motion.div>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
