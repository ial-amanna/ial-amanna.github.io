// src/components/BackgroundCircles.tsx
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Base background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#faf5ff' }} />
      
      {/* Large circle */}
      <motion.div 
        className="absolute -left-1/4 -top-1/4"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(139, 92, 246, 0.2))',
          filter: 'blur(60px)',
        }}
      />

      {/* Medium circle */}
      <motion.div 
        className="absolute right-0 bottom-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(216, 180, 254, 0.1))',
          filter: 'blur(40px)',
        }}
      />

      {/* Small circle */}
      <motion.div 
        className="absolute top-1/2 right-1/4"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(216, 180, 254, 0.2), rgba(232, 121, 249, 0.1))',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
}
