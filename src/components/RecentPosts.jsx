import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser, FiArrowRight } = FiIcons;

const RecentPosts = () => {
  const recentPosts = [
    {
      id: 4,
      title: "Building Scalable React Applications",
      excerpt: "Best practices for creating maintainable and scalable React applications that grow with your team.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      author: "David Kim",
      date: "Dec 8, 2024",
      category: "Technology",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "The Art of Mindful Cooking",
      excerpt: "Transform your kitchen into a sanctuary of mindfulness and discover the meditative aspects of cooking.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      author: "Lisa Park",
      date: "Dec 6, 2024",
      category: "Lifestyle",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Solo Travel: A Journey of Self-Discovery",
      excerpt: "Embark on a solo adventure and discover the transformative power of traveling alone.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      author: "Alex Turner",
      date: "Dec 4, 2024",
      category: "Travel",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Sustainable Fashion: Style with Purpose",
      excerpt: "Explore how conscious fashion choices can make a positive impact on the environment and society.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      author: "Maya Patel",
      date: "Dec 2, 2024",
      category: "Lifestyle",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Machine Learning for Beginners",
      excerpt: "A comprehensive guide to understanding machine learning concepts and getting started with your first project.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      author: "Robert Chen",
      date: "Nov 30, 2024",
      category: "Technology",
      readTime: "15 min read"
    },
    {
      id: 9,
      title: "Photography Tips for Travel Enthusiasts",
      excerpt: "Capture stunning travel memories with these professional photography tips and techniques.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      author: "Jessica Wong",
      date: "Nov 28, 2024",
      category: "Travel",
      readTime: "11 min read"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest articles from our community of writers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link to={`/post/${post.id}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                
                <Link
                  to={`/post/${post.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read More
                  <SafeIcon icon={FiArrowRight} className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;