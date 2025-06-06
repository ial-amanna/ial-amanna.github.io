import { motion } from "framer-motion";

interface ProfilePictureProps {
    imageUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 p-1">
        <div className="rounded-full bg-white p-2 h-full">
          <div
            className="rounded-full w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}${imageUrl})`,
              backgroundColor: '#f3f4f6', // Light gray background if image fails to load
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePicture; 