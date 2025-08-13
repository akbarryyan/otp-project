import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

interface NavigationProps {
  isScrolled: boolean;
  navItems: Array<{ name: string; href: string }>;
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  navItems,
  handleSmoothScroll,
}) => {
  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-[#163300] rounded-xl flex items-center justify-center">
              <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#163300]">LinkOTP</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-700 hover:text-[#163300] font-medium transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="px-6 py-2 text-[#163300] font-medium hover:text-[#9FE870] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Masuk
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/services"
                className="px-6 py-3 bg-[#163300] hover:bg-[#9FE870] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Mulai Gratis
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button - Only visible on mobile */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/services"
              className="px-4 py-2 bg-[#163300] hover:bg-[#9FE870] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Mulai Gratis
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
