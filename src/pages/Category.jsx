import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser, FiArrowRight } = FiIcons;

const Category = () => {
  const { category } = useParams();
  
  // Mock category posts
  const categoryPosts = {
    technology: [
      {
        id: 1,
        title: "The Future of Web Development: What's Coming Next",
        excerpt: "Explore the latest trends and technologies shaping the future of web development.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        readTime: "8 min read"
      },
      {
        id: 4,
        title: "Building Scalable React Applications",
        excerpt: "Best practices for creating maintainable and scalable React applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        author: "David Kim",
        date: "Dec 8, 2024",
        readTime: "12 min read"
      }
    ],
    lifestyle: [
      {
        id: 2,
        title: "Minimalist Living: Finding Joy in Less",
        excerpt: "Discover how embracing minimalism can lead to a more fulfilling lifestyle.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        author: "Mike Chen",
        date: "Dec 12, 2024",
        readTime: "6 min read"
      },
      {
        id: 5,
        title: "The Art of Mindful Cooking",
        excerpt: "Transform your kitchen into a sanctuary of mindfulness.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
        author: "Lisa Park",
        date: "Dec 6, 2024",
        readTime: "7 min read"
      }
    ],
    travel: [
      {
        id: 3,
        title: "Hidden Gems: Unexplored Destinations in Southeast Asia",
        excerpt: "Uncover breathtaking locations off the beaten path.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        author: "Emma Rodriguez",
        date: "Dec 10, 2024",
        readTime: "10 min read"
      },
      {
        id: 6,
        title: "Solo Travel: A Journey of Self-Discovery",
        excerpt: "Embark on a solo adventure and discover the transformative power of traveling alone.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
        author: "Alex Turner",
        date: "Dec 4, 2024",
        readTime: "9 min read"
      }
    ]
  };

  const posts = categoryPosts[category] || [];
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {categoryTitle}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover the latest articles and insights in {categoryTitle.toLowerCase()}.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
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
                      {categoryTitle}
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Category;