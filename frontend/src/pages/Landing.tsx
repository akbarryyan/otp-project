import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GlobeAltIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  SparklesIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  PlayIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

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
];

const stats = [
  {
    label: "Pengguna Aktif",
    value: "10,000+",
    description: "Bertumbuh setiap hari",
    icon: StarIcon,
    color: "bg-[#9FE870]",
  },
  {
    label: "Tingkat Keberhasilan",
    value: "99.9%",
    description: "Pengiriman terjamin",
    icon: ShieldCheckIcon,
    color: "bg-[#163300]",
  },
  {
    label: "Waktu Respons",
    value: "30s",
    description: "Rata-rata waktu pengiriman",
    icon: ClockIcon,
    color: "bg-[#FFC091]",
  },
  {
    label: "Jangkauan Global",
    value: "100+",
    description: "Negara didukung",
    icon: GlobeAltIcon,
    color: "bg-[#260A2F]",
  },
];

function Landing() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[#9FE870]/5">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(159, 232, 112, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(159, 232, 112, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              y: yRange,
            }}
          />
        </div>

        <div className="relative z-10 w-full px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-[#9FE870]/20 border border-[#163300]/30 rounded-full text-sm font-medium text-[#163300]"
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                Platform Verifikasi OTP #1 di Indonesia
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
                >
                  Verifikasi OTP
                  <span className="block text-[#163300]">
                    Tercepat & Terpercaya
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Dapatkan akses instan ke nomor virtual dari 100+ negara.
                Platform yang dipercaya ribuan developer dan bisnis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#163300] hover:bg-[#260A2F] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Mulai Gratis
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#163300] bg-white border-2 border-[#9FE870] hover:bg-[#9FE870]/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Lihat Demo
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl border border-[#9FE870]/20 p-8 backdrop-blur-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#163300] rounded-xl flex items-center justify-center">
                        <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          LinkOTP Dashboard
                        </h3>
                        <p className="text-sm text-gray-500">
                          Real-time monitoring
                        </p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-[#9FE870] rounded-full animate-pulse"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Active Numbers",
                        value: "1,247",
                        change: "+12%",
                      },
                      {
                        label: "Success Rate",
                        value: "99.9%",
                        change: "+0.1%",
                      },
                      { label: "Response Time", value: "28ms", change: "-5ms" },
                      { label: "Countries", value: "105", change: "+3" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-4"
                      >
                        <div className="text-2xl font-bold text-[#163300]">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.label}
                        </div>
                        <div className="text-xs text-[#9FE870] font-semibold">
                          {item.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mengapa Memilih
              <span className="block text-[#163300]">LinkOTP?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform terdepan dengan teknologi canggih yang memberikan solusi
              verifikasi OTP terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#163300] transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#9FE870]/5">
        <div className="w-full px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dipercaya oleh Ribuan Pengguna
            </h2>
            <p className="text-xl text-gray-600">
              Angka yang membuktikan kualitas dan keandalan layanan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-[#163300] mb-2 group-hover:text-[#260A2F] transition-colors">
                    {stat.value}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OTP Services Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Layanan OTP
              <span className="block text-[#163300]">Seluruh Dunia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari berbagai negara dan operator dengan harga kompetitif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {otpServices.map((service, index) => (
              <motion.div
                key={service.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{service.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {service.country}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {service.operator}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-[#9FE870]/20 text-[#163300]">
                    {service.availability}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Harga</span>
                    <span className="text-lg font-bold text-[#163300]">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-sm font-semibold text-[#9FE870]">
                      {service.successRate}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-2 bg-[#9FE870]/10 hover:bg-[#9FE870]/20 text-[#163300] font-medium rounded-xl transition-colors duration-200"
                >
                  Pilih Layanan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#FFC091]/5">
        <div className="w-full px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cara Kerja
              <span className="block text-[#163300]">Yang Mudah</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan nomor virtual dan verifikasi OTP hanya dalam 4 langkah
              sederhana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari ribuan pengguna yang puas dengan layanan LinkOTP
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-[#260A2F] text-white">
        <div className="w-full px-8">
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#9FE870]">LinkOTP</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Platform verifikasi OTP terpercaya untuk semua kebutuhan
                  bisnis dan personal Anda.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Layanan</h4>
              <ul className="space-y-3">
                {[
                  "Verifikasi SMS",
                  "Nomor Virtual",
                  "API Integration",
                  "Enterprise Solution",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#9FE870] transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Dukungan</h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "API Documentation",
                  "Status Page",
                  "Contact Support",
                ].map((support) => (
                  <li key={support}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#9FE870] transition-colors duration-200"
                    >
                      {support}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-[#9FE870]" />
                  <span className="text-gray-300">support@linkotp.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-[#9FE870]" />
                  <span className="text-gray-300">+62 21 1234 5678</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-[#9FE870] mt-0.5" />
                  <span className="text-gray-300">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 border-t border-[#163300] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
            <p className="text-gray-400 text-sm">
              © 2025 LinkOTP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-[#9FE870] text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
