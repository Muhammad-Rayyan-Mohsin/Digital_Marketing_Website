import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import BlogCard from '../components/ui/BlogCard';
import blogPosts from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="overflow-hidden">
            {/* Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-semibold text-primary">
                            <Sparkles size={16} /> Our Blog
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Latest Insights</h1>
                        <p className="text-gray-500 text-lg">
                            Tips, tutorials, and career advice to help you navigate the journey from student to professional.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
