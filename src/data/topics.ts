import { FaLaptopCode, FaBrain, FaChartLine, FaMicrochip, FaCogs } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  gradient: string;
  path: string;
}

export const topics: Topic[] = [
  {
    id: 'medical-image-analysis',
    title: 'Medical Image Analysis',
    description: 'Projects focusing on medical imaging, disease detection, and healthcare applications.',
    icon: FaLaptopCode,
    gradient: 'from-violet-600 to-purple-600',
    path: '/projects/medical-image-analysis'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Deep learning, neural networks, and AI research projects.',
    icon: FaBrain,
    gradient: 'from-purple-600 to-fuchsia-600',
    path: '/projects/machine-learning'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Image processing, object detection, and visual understanding projects.',
    icon: FaLaptopCode,
    gradient: 'from-fuchsia-600 to-pink-600',
    path: '/projects/computer-vision'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Data analysis, visualization, and statistical modeling projects.',
    icon: FaChartLine,
    gradient: 'from-pink-600 to-rose-600',
    path: '/projects/data-science'
  },
  {
    id: 'edge-ai',
    title: 'Edge AI & Wearables',
    description: 'Projects involving edge computing, IoT, and wearable technology.',
    icon: FaMicrochip,
    gradient: 'from-rose-600 to-orange-600',
    path: '/projects/edge-ai'
  },
  {
    id: 'control-systems',
    title: 'Control Systems & Biomechanics',
    description: 'Robotics, control systems, and biomechanical engineering projects.',
    icon: FaCogs,
    gradient: 'from-orange-600 to-amber-600',
    path: '/projects/control-systems'
  }
]; 