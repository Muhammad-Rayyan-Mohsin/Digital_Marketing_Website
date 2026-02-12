import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card';

const categoryColors = {
    'Career': 'bg-blue-100 text-blue-600',
    'Tech': 'bg-purple-100 text-purple-600',
    'Freelancing': 'bg-green-100 text-green-600',
    'Digital Marketing': 'bg-blue-100 text-blue-700',
    'SEO': 'bg-orange-100 text-orange-600',
    'Social Media': 'bg-pink-100 text-pink-600',
    'Content Marketing': 'bg-teal-100 text-teal-600',
    'Email Marketing': 'bg-yellow-100 text-yellow-700',
};

const BlogCard = ({ post }) => {
    return (
        <Link to={`/blog/${post.slug}`} className="block h-full">
            <Card className="h-full p-0 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <User size={14} /> {post.author}
                        </span>
                        {post.readTime && (
                            <span className="flex items-center gap-1">
                                <Clock size={14} /> {post.readTime}
                            </span>
                        )}
                    </div>

                    <div className="mb-2">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                            {post.category}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-between items-center text-primary font-medium text-sm">
                        Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default BlogCard;
