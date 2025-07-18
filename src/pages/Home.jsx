import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import RecentPosts from '../components/RecentPosts';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedPosts />
      <RecentPosts />
      <Newsletter />
    </motion.div>
  );
};

export default Home;