import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const FooterSection: React.FC = () => {
  const socialLinks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
  const quickLinks = [
    "Tentang Kami",
    "Layanan",
    "Harga",
    "Kontak",
    "Blog",
    "Bantuan",
  ];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer
      id="contact"
      className="bg-[#260A2F] text-white relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 left-24 w-24 h-24 bg-[#9FE870]/20 rounded-2xl"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-16 right-20 w-20 h-20 bg-[#FFC091]/15 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 25, 0],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-16 h-16 bg-white/10 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            y: [-25, 25, -25],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-12 w-30 h-30 bg-[#9FE870]/10 rounded-xl"
          animate={{
            scale: [1, 1.2, 1],
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
          className="absolute top-1/2 right-6 w-14 h-14 bg-[#FFC091]/20 rounded-full"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative w-full px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#9FE870] rounded-xl flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">LinkOTP</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform terdepan untuk layanan verifikasi OTP dan nomor virtual
              dengan jangkauan global dan keamanan tingkat enterprise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#9FE870] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-[#9FE870] transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-[#9FE870]" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-[#9FE870]" />
                <span className="text-gray-300">info@linkotp.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-[#9FE870]" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan update terbaru tentang fitur dan promosi kami
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#9FE870] transition-colors duration-200"
              />
              <motion.button
                className="w-full px-4 py-3 bg-[#9FE870] text-[#163300] font-semibold rounded-lg hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left"
            >
              © 2024 LinkOTP. All rights reserved.
            </motion.p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-[#9FE870] transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
