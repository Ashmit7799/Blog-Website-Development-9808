import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPenTool } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiPenTool} className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">ModernBlog</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A modern blogging platform where writers share their stories, insights, and experiences with the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/category/lifestyle" className="text-gray-400 hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link to="/category/travel" className="text-gray-400 hover:text-white transition-colors">Travel</Link></li>
              <li><Link to="/category/business" className="text-gray-400 hover:text-white transition-colors">Business</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ModernBlog. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <SafeIcon icon={FiMail} className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">hello@modernblog.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;