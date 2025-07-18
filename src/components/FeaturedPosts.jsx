import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser } = FiIcons;

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Coming Next",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Technology",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Minimalist Living: Finding Joy in Less",
      excerpt: "Discover how embracing minimalism can lead to a more fulfilling and stress-free lifestyle.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Lifestyle",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Hidden Gems: Unexplored Destinations in Southeast Asia",
      excerpt: "Uncover breathtaking locations off the beaten path that offer authentic cultural experiences.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      category: "Travel",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked articles from our most talented writers covering diverse topics and perspectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link to={`/post/${post.id}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;