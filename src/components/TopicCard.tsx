import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TopicCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  path: string;
}

const TopicCard = ({ title, description, icon, gradient, path }: TopicCardProps) => {
  return (
    <Link to={path}>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass rounded-xl p-6 space-y-4 cursor-pointer"
      >
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white w-fit`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
};

export default TopicCard; 