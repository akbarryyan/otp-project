import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  BoltIcon,
  CheckBadgeIcon,
  StarIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface MobileBottomNavigationProps {
  navItems: Array<{ name: string; href: string }>;
  activeSection: string;
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const MobileBottomNavigation: React.FC<MobileBottomNavigationProps> = ({
  navItems,
  activeSection,
  handleSmoothScroll,
}) => {
  return (
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
  );
};

export default MobileBottomNavigation;
