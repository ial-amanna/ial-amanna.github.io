// src/components/StatsSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaRobot } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import type { FC, ReactNode } from "react";

interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: ReactNode;
  category: string;
  gradient: string;
}

const stats: StatItem[] = [
  {
    label: "Computer Vision",
    value: "3+ Years",
    description: "Object Detection, Image Processing, 3D Vision",
    icon: <FaLaptopCode className="w-8 h-8" />,
    category: "Expertise",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    label: "Deep Learning",
    value: "4+ Years",
    description: "Neural Networks, GANs, Transfer Learning",
    icon: <BiCodeAlt className="w-8 h-8" />,
    category: "Projects",
    gradient: "from-purple-600 to-fuchsia-600"
  },
  {
    label: "Robotics",
    value: "2+ Years",
    description: "Robot Navigation, SLAM, Control Systems",
    icon: <FaRobot className="w-8 h-8" />,
    category: "Experience",
    gradient: "from-fuchsia-600 to-pink-600"
  },
  {
    label: "Robotics",
    value: "3+ Years",
    description: "Robot Manipulation, Navigation and SLAM",
    icon: <FaRobot className="w-8 h-8" />,
    category: "Experience",
    gradient: "from-pink-600 to-rose-600"
  },
];

const StatCard: FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass rounded-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} text-white`}>
          {stat.icon}
        </div>
        <span className="text-sm font-medium text-gray-700 glass px-3 py-1 rounded-full">
          {stat.category}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
          {stat.label}
        </h3>
        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
          {stat.value}
        </div>
        <p className="text-gray-600">
          {stat.description}
        </p>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient}`}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.2 }}
      />
    </motion.div>
  );
};

const StatsSection: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent pb-1">
            Background
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey has been a journey of learning and growth. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;