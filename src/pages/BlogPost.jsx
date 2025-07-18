import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser, FiCalendar, FiTag, FiArrowLeft, FiHeart, FiShare2 } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data
  const post = {
    id: parseInt(id),
    title: "The Future of Web Development: What's Coming Next",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and frameworks emerging at a rapid pace. As we look toward the future, several key trends are shaping how we build and interact with web applications.</p>
      
      <h2>Artificial Intelligence Integration</h2>
      <p>AI is no longer a futuristic concept—it's becoming an integral part of modern web development. From chatbots and recommendation engines to automated testing and code generation, AI is transforming how we approach web development.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and mobile applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the preferred choice for many businesses looking to reach users across all devices.</p>
      
      <h2>WebAssembly and Performance</h2>
      <p>WebAssembly is revolutionizing web performance by allowing developers to run near-native code in the browser. This technology opens up new possibilities for complex applications that were previously limited to desktop environments.</p>
      
      <h2>The Rise of Micro-Frontends</h2>
      <p>As applications grow in complexity, micro-frontends offer a way to break down monolithic front-end applications into smaller, more manageable pieces. This approach enables teams to work independently while maintaining a cohesive user experience.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about these emerging trends and technologies, developers can build better, more efficient, and more user-friendly applications.</p>
    `,
    author: "Sarah Johnson",
    date: "December 15, 2024",
    category: "Technology",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
    tags: ["Web Development", "AI", "PWA", "WebAssembly", "Frontend"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
        >
          <SafeIcon icon={FiArrowLeft} className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gray-200 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8">
          <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <SafeIcon icon={FiUser} className="h-5 w-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiCalendar} className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiClock} className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
              <SafeIcon icon={FiHeart} className="h-5 w-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              <SafeIcon icon={FiShare2} className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <SafeIcon icon={FiTag} className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogPost;