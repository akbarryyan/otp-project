import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
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

// Import landing page components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  FooterSection,
  MobileBottomNavigation,
} from "../components/landingPage";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "home",
        "services",
        "how-it-works",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Cara Kerja", href: "#how-it-works" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pb-20 md:pb-0">
      <Navigation 
        isScrolled={isScrolled}
        navItems={navItems}
        handleSmoothScroll={handleSmoothScroll}
      />
      <HeroSection yRange={yRange} />
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

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-20 h-20 bg-[#9FE870]/20 rounded-2xl"
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
            className="absolute top-40 right-32 w-16 h-16 bg-[#FFC091]/30 rounded-full"
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
            className="absolute bottom-32 left-1/3 w-24 h-24 bg-[#260A2F]/20 rounded-xl"
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

        <div className="relative z-10 w-full px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-16 left-16 w-16 h-16 bg-[#9FE870]/20 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-12 h-12 bg-[#FFC091]/25 rounded-2xl"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-24 left-1/4 w-20 h-20 bg-[#260A2F]/15 rounded-3xl"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-16 right-32 w-14 h-14 bg-[#163300]/20 rounded-xl"
            animate={{
              x: [-15, 15, -15],
              y: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
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
              className="inline-flex items-center px-4 py-2 bg-[#9FE870]/20 rounded-full text-sm font-medium text-[#163300] mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              Fitur Unggulan
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mengapa Memilih
              <span className="block text-[#163300]">LinkOTP?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Platform terdepan dengan teknologi canggih yang memberikan solusi
              verifikasi OTP terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:border-[#9FE870]/30">
                  <motion.div
                    className={`w-20 h-20 rounded-3xl ${feature.color} p-5 mb-8 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#163300] transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute top-4 right-4 w-6 h-6 bg-[#9FE870]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-[#9FE870]/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#FFC091]/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-[#260A2F]/10 rounded-2xl"
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 15, repeat: Infinity }}
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
              className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-[#163300] mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <StarIcon className="w-4 h-4 mr-2" />
              Statistik Kinerja
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
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
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="text-center group"
              >
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-8 rounded-3xl ${stat.color} p-5 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-[#163300] mb-4 group-hover:text-[#260A2F] transition-colors"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    {stat.label}
                  </h3>

                  <p className="text-gray-500 text-lg">{stat.description}</p>

                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-[#9FE870] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OTP Services Section */}
      <section
        id="services"
        className="py-32 bg-white relative overflow-hidden"
      >
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
              Pilih dari berbagai negara dan operator dengan harga kompetitif
              dan tingkat keberhasilan tinggi
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex items-center px-10 py-5 bg-[#163300] hover:bg-[#9FE870] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Lihat Semua Layanan
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRightIcon className="w-6 h-6 ml-3" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#FFC091]/5 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-16 left-16 w-32 h-32 bg-[#9FE870]/15 rounded-full"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-12 w-20 h-20 bg-[#163300]/15 rounded-3xl"
            animate={{
              rotate: [0, 360],
              y: [-30, 30, -30],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-32 w-14 h-14 bg-[#260A2F]/20 rounded-xl"
            animate={{
              scale: [1, 1.6, 1],
              rotate: [0, -270, -360],
            }}
            transition={{
              duration: 21,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-24 right-20 w-26 h-26 bg-[#FFC091]/20 rounded-2xl"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-8 w-10 h-10 bg-[#9FE870]/25 rounded-full"
            animate={{
              x: [-25, 25, -25],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 15,
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-28 h-28 bg-[#260A2F]/10 rounded-3xl"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 23,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-16 right-16 w-16 h-16 bg-[#9FE870]/20 rounded-full"
            animate={{
              x: [-30, 30, -30],
              y: [0, -15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-12 w-22 h-22 bg-[#FFC091]/15 rounded-xl"
            animate={{
              y: [0, -25, 0],
              rotate: [0, -180, -360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-16 right-32 w-18 h-18 bg-[#163300]/20 rounded-2xl"
            animate={{
              rotate: [0, 270, 360],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-6 w-12 h-12 bg-[#260A2F]/25 rounded-full"
            animate={{
              scale: [1, 1.7, 1],
              y: [-15, 15, -15],
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata
              <span className="block text-[#163300]">Pengguna Kami?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Testimoni dari ribuan pengguna yang puas dengan layanan LinkOTP
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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

          <div className="py-8 border-t border-[#163300] flex flex-col md:flex-row justify-between items-center">
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

      {/* Mobile Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden z-50 shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-around py-3 px-2">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-[#163300] bg-[#9FE870]/20"
                    : "text-gray-500 hover:text-[#163300] hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#163300] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                <div
                  className={`w-6 h-6 mb-1 transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.name === "Beranda" && (
                    <GlobeAltIcon
                      className={`w-6 h-6 ${
                        isActive ? "stroke-2" : "stroke-1.5"
                      }`}
                    />
                  )}
                  {item.name === "Layanan" && (
                    <BoltIcon
                      className={`w-6 h-6 ${
                        isActive ? "stroke-2" : "stroke-1.5"
                      }`}
                    />
                  )}
                  {item.name === "Cara Kerja" && (
                    <CheckBadgeIcon
                      className={`w-6 h-6 ${
                        isActive ? "stroke-2" : "stroke-1.5"
                      }`}
                    />
                  )}
                  {item.name === "Testimoni" && (
                    <StarIcon
                      className={`w-6 h-6 ${
                        isActive ? "stroke-2" : "stroke-1.5"
                      }`}
                    />
                  )}
                  {item.name === "Kontak" && (
                    <PhoneIcon
                      className={`w-6 h-6 ${
                        isActive ? "stroke-2" : "stroke-1.5"
                      }`}
                    />
                  )}
                </div>

                <span
                  className={`text-xs font-medium transition-all duration-300 ${
                    isActive ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>

                {/* Background glow effect for active item */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-[#9FE870]/10 rounded-xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Bottom safe area for devices with home indicator */}
        <div className="h-1 bg-transparent" />
      </motion.div>
    </div>
  );
}

export default Landing;
