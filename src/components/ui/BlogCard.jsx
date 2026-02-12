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
            <Card className="h-full p-0 overflow-hidden flex flex-col group" hoverEffect={true}>
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar size={13} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={13} /> {post.readTime}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 w-full flex justify-between items-center">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <User size={13} /> {post.author}
                        </span>
                        <span className="text-primary font-semibold text-sm flex items-center gap-1">
                            Read <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default BlogCard;
