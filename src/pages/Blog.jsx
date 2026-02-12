import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/ui/BlogCard';
import blogPosts from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-dark mb-4">Latest Insights</h1>
                <p className="text-gray-600">
                    Tips, tutorials, and career advice to help you navigate the journey from student to professional.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <BlogCard post={post} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
