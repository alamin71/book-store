import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
      {/* Image with Animation */}
      <motion.div
        className="md:w-1/2 w-full flex items-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImg}
          alt="New Releases"
          className="w-full max-w-md drop-shadow-lg"
        />
      </motion.div>

      {/* Text Section with Animation */}
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-5xl text-2xl font-extrabold tracking-wide mb-5">
          Discover This Week's Top Picks
        </h1>
        <p className="mb-6 text-lg opacity-90">
          Dive into the freshest literary gems hitting the shelves this week.
          Whether you're craving an electrifying mystery or an inspiring memoir,
          there's a perfect read waiting just for you.
        </p>

        {/* Button with Hover Animation */}
        <motion.button
          className="bg-white text-indigo-600 flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe <ArrowRight size={18} />
        </motion.button>

        <p className="text-sm opacity-80 mt-2">Join 10,000+ book lovers!</p>
      </motion.div>
    </div>
  );
};

export default Banner;
