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
  CurrencyDollarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CreditCardIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import Container from "@components/common/Container";

const features = [
  {
    name: "Jangkauan Global",
    description:
      "Akses nomor telepon dari 100+ negara dan berbagai operator di seluruh dunia.",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-cyan-400",
    delay: 0,
  },
  {
    name: "Layanan Instan",
    description:
      "Dapatkan nomor virtual Anda secara instan dan terima kode OTP secara real-time.",
    icon: BoltIcon,
    color: "from-yellow-500 to-orange-400",
    delay: 0.1,
  },
  {
    name: "Multi Platform",
    description:
      "Dukungan untuk semua platform utama termasuk media sosial, aplikasi chat, dan lainnya.",
    icon: DevicePhoneMobileIcon,
    color: "from-purple-500 to-pink-400",
    delay: 0.2,
  },
  {
    name: "Sukses Terjamin",
    description:
      "Tingkat keberhasilan tinggi dengan penggantian nomor otomatis jika verifikasi gagal.",
    icon: CheckBadgeIcon,
    color: "from-green-500 to-emerald-400",
    delay: 0.3,
  },
];

const supportedPlatforms = [
  { name: "WhatsApp", category: "messaging" },
  { name: "Telegram", category: "messaging" },
  { name: "Signal", category: "messaging" },
  { name: "Facebook", category: "social" },
  { name: "Instagram", category: "social" },
  { name: "Twitter", category: "social" },
  { name: "TikTok", category: "social" },
  { name: "LinkedIn", category: "professional" },
  { name: "Gmail", category: "email" },
  { name: "Yahoo", category: "email" },
  { name: "Microsoft", category: "productivity" },
  { name: "Amazon", category: "ecommerce" },
  { name: "Uber", category: "transport" },
  { name: "Airbnb", category: "travel" },
  { name: "Netflix", category: "entertainment" },
  { name: "Spotify", category: "entertainment" },
];

// OTP Services data
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
  {
    country: "Philippines",
    operator: "Globe",
    price: "$0.17",
    availability: "Limited",
    flag: "🇵🇭",
    successRate: "98.9%",
  },
  {
    country: "Vietnam",
    operator: "Viettel",
    price: "$0.16",
    availability: "Available",
    flag: "🇻🇳",
    successRate: "99.3%",
  },
  {
    country: "India",
    operator: "Airtel",
    price: "$0.12",
    availability: "Available",
    flag: "🇮🇳",
    successRate: "99.1%",
  },
  {
    country: "United States",
    operator: "Verizon",
    price: "$0.35",
    availability: "Available",
    flag: "🇺🇸",
    successRate: "99.9%",
  },
];

// How it works steps
const workSteps = [
  {
    step: 1,
    title: "Pilih Layanan",
    description: "Pilih negara dan platform yang ingin Anda verifikasi",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-cyan-400",
  },
  {
    step: 2,
    title: "Dapatkan Nomor",
    description: "Sistem akan memberikan nomor virtual secara instan",
    icon: DevicePhoneMobileIcon,
    color: "from-purple-500 to-pink-400",
  },
  {
    step: 3,
    title: "Terima OTP",
    description: "Gunakan nomor tersebut dan tunggu kode verifikasi masuk",
    icon: BoltIcon,
    color: "from-yellow-500 to-orange-400",
  },
  {
    step: 4,
    title: "Selesai!",
    description: "Akun Anda berhasil diverifikasi dan siap digunakan",
    icon: CheckBadgeIcon,
    color: "from-green-500 to-emerald-400",
  },
];

// Testimonials data
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
  {
    name: "Michael Johnson",
    role: "QA Engineer",
    company: "Software House",
    content:
      "Interface yang user-friendly dan response time yang sangat cepat. Tim support juga sangat responsif ketika ada kendala.",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Mobile App",
    content:
      "Tingkat keberhasilan 99.9% benar-benar terbukti. Sudah 6 bulan pakai dan hampir tidak pernah ada masalah.",
    rating: 5,
    avatar: "PS",
  },
];

const stats = [
  {
    label: "Pengguna Aktif",
    value: "10,000+",
    description: "Bertumbuh setiap hari",
    icon: StarIcon,
    color: "from-blue-400 to-blue-600",
  },
  {
    label: "Tingkat Keberhasilan",
    value: "99.9%",
    description: "Pengiriman terjamin",
    icon: ShieldCheckIcon,
    color: "from-green-400 to-green-600",
  },
  {
    label: "Waktu Respons",
    value: "30s",
    description: "Rata-rata waktu pengiriman",
    icon: ClockIcon,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    label: "Jangkauan Global",
    value: "100+",
    description: "Negara didukung",
    icon: GlobeAltIcon,
    color: "from-purple-400 to-purple-600",
  },
];

function Landing() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              y: yRange,
            }}
          />

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl opacity-25"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <Container className="relative z-10 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700"
                >
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Platform Verifikasi OTP #1 di Indonesia
                </motion.div>

                {/* Main Title */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
                  >
                    Verifikasi OTP
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Tercepat & Terpercaya
                    </span>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-lg"
                >
                  Dapatkan akses instan ke nomor virtual dari 100+ negara.
                  Platform yang dipercaya ribuan developer dan bisnis.
                </motion.p>

                {/* CTA Buttons */}
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
                      className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Mulai Gratis
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Lihat Demo
                    </button>
                  </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center space-x-8 pt-8 border-t border-gray-200"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">Pengguna</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Negara</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Card */}
                <motion.div
                  className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
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
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Status Cards */}
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
                        {
                          label: "Response Time",
                          value: "28ms",
                          change: "-5ms",
                        },
                        { label: "Countries", value: "105", change: "+3" },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-4"
                        >
                          <div className="text-2xl font-bold text-gray-900">
                            {item.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.label}
                          </div>
                          <div className="text-xs text-green-600">
                            {item.change}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Activity List */}
                    <div className="space-y-3">
                      {[
                        {
                          platform: "WhatsApp",
                          country: "Indonesia",
                          status: "Success",
                        },
                        {
                          platform: "Telegram",
                          country: "Malaysia",
                          status: "Success",
                        },
                        {
                          platform: "Instagram",
                          country: "Singapore",
                          status: "Processing",
                        },
                      ].map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-600">
                                {activity.platform[0]}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {activity.platform}
                              </div>
                              <div className="text-xs text-gray-500">
                                {activity.country}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full ${
                              activity.status === "Success"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {activity.status}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-80"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern Features Section */}
      <section className="py-24 bg-white">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mengapa Memilih
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  LinkOTP?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Platform terdepan dengan teknologi canggih yang memberikan
                solusi verifikasi OTP terbaik untuk semua kebutuhan bisnis dan
                personal Anda.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Value */}
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-24 bg-white">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Platform yang Didukung
              </h2>
              <p className="text-xl text-gray-600">
                Bekerja dengan semua platform utama yang Anda gunakan
                sehari-hari
              </p>
            </motion.div>

            {/* Platform Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["messaging", "social", "professional", "ecommerce"].map(
                (category, categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 capitalize mb-6">
                      {category === "messaging" && "💬 Messaging"}
                      {category === "social" && "📱 Social Media"}
                      {category === "professional" && "💼 Professional"}
                      {category === "ecommerce" && "🛒 E-commerce"}
                    </h3>

                    <div className="space-y-3">
                      {supportedPlatforms
                        .filter((platform) => platform.category === category)
                        .slice(0, 4)
                        .map((platform, index) => (
                          <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: categoryIndex * 0.1 + index * 0.05,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ x: 8 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-600">
                                {platform.name[0]}
                              </span>
                            </div>
                            <span className="font-medium text-gray-700">
                              {platform.name}
                            </span>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* Show All Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            ></motion.div>
          </div>
        </Container>
      </section>

      {/* OTP Services Section */}
      <section className="py-24 bg-white">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Layanan OTP
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Seluruh Dunia
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih dari berbagai negara dan operator dengan harga kompetitif
                dan tingkat keberhasilan tinggi
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {/* Country Header */}
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
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {service.availability}
                    </div>
                  </div>

                  {/* Price and Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Harga</span>
                      <span className="text-lg font-bold text-blue-600">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Success Rate
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        {service.successRate}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl transition-colors duration-200"
                  >
                    Pilih Layanan
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Lihat Semua Layanan
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cara Kerja
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Yang Mudah
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dapatkan nomor virtual dan verifikasi OTP hanya dalam 4 langkah
                sederhana
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {index < workSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 z-0" />
                  )}

                  <div className="relative text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-100 rounded-full text-blue-600 font-bold text-lg mb-6">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} p-5 mb-6 shadow-lg`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Coba Sekarang
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Apa Kata
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Pengguna Kami?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Testimoni dari ribuan pengguna yang puas dengan layanan LinkOTP
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarSolid key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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

            {/* View More Testimonials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl transition-colors duration-200">
                Lihat Testimoni Lainnya
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Container className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer */}
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    LinkOTP
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    Platform verifikasi OTP terpercaya untuk semua kebutuhan
                    bisnis dan personal Anda.
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="font-semibold mb-4">Ikuti Kami</h4>
                  <div className="flex space-x-4">
                    {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                      (social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <span className="text-xs font-bold">{social[0]}</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-6">Layanan</h4>
                <ul className="space-y-3">
                  {[
                    "Verifikasi SMS",
                    "Nomor Virtual",
                    "API Integration",
                    "Bulk Services",
                    "Enterprise Solution",
                  ].map((service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-6">Dukungan</h4>
                <ul className="space-y-3">
                  {[
                    "Help Center",
                    "API Documentation",
                    "Status Page",
                    "Contact Support",
                    "FAQ",
                  ].map((support) => (
                    <li key={support}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {support}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-6">Kontak</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">support@linkotp.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">+62 21 1234 5678</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span className="text-gray-400">
                      Jakarta, Indonesia
                      <br />
                      Jl. Sudirman No. 123
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 LinkOTP. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Landing;
