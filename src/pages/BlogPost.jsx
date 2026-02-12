import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import Card from '../components/ui/Card';
import blogPosts from '../data/blogPosts';

const ContentRenderer = ({ section }) => {
    switch (section.type) {
        case 'heading':
            return <h2 className="text-2xl font-bold text-dark mt-10 mb-4">{section.text}</h2>;
        case 'subheading':
            return <h3 className="text-xl font-semibold text-dark mt-8 mb-3">{section.text}</h3>;
        case 'paragraph':
            return <p className="text-gray-600 leading-relaxed mb-5">{section.text}</p>;
        case 'list':
            return (
                <ul className="space-y-2 mb-5 text-gray-600 pl-1">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case 'image':
            return (
                <figure className="my-8">
                    <img src={section.src} alt={section.alt} className="w-full rounded-2xl object-cover max-h-96 shadow-lg" />
                    {section.caption && (
                        <figcaption className="text-sm text-gray-400 mt-3 text-center">{section.caption}</figcaption>
                    )}
                </figure>
            );
        case 'callout':
            return (
                <div className="bg-gradient-to-r from-primary/5 to-blue-50 border-l-4 border-primary rounded-r-2xl p-5 my-8">
                    <p className="text-gray-700 font-medium leading-relaxed">{section.text}</p>
                </div>
            );
        default:
            return null;
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (post) {
            document.title = post.metaTitle || post.title + ' | SkillNest';
        }
        return () => { document.title = 'SkillNest'; };
    }, [post]);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-dark mb-4">Post Not Found</h1>
                <p className="text-gray-500 mb-6">The article you are looking for does not exist.</p>
                <Link to="/blog" className="text-primary font-medium hover:underline">Back to Blog</Link>
            </div>
        );
    }

    const categoryColors = {
        'Digital Marketing': 'bg-blue-100 text-blue-700',
        'SEO': 'bg-orange-100 text-orange-600',
        'Social Media': 'bg-pink-100 text-pink-600',
        'Content Marketing': 'bg-teal-100 text-teal-600',
        'Email Marketing': 'bg-yellow-100 text-yellow-700',
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-64 md:h-80 lg:h-96 overflow-hidden"
            >
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-4 -mt-20 relative z-10 pb-16">
                <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm">
                    <ChevronLeft size={16} className="mr-1" /> Back to Blog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="p-8 md:p-10" hoverEffect={false}>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-5">
                                    <span className="flex items-center gap-1.5"><Calendar size={15} /> {post.date}</span>
                                    <span className="text-gray-200">|</span>
                                    <span className="flex items-center gap-1.5"><User size={15} /> {post.author}</span>
                                    <span className="text-gray-200">|</span>
                                    <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime}</span>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                                        {post.category}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8 leading-tight">{post.title}</h1>

                                <div className="max-w-none">
                                    {post.content.map((section, index) => (
                                        <ContentRenderer key={index} section={section} />
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="p-6 border-t-4 border-t-primary" hoverEffect={false}>
                                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                                <div className="space-y-4">
                                    {blogPosts
                                        .filter(p => p.slug !== slug)
                                        .slice(0, 3)
                                        .map(related => (
                                            <Link key={related.id} to={`/blog/${related.slug}`} className="flex gap-3 group">
                                                <img src={related.image} alt="" className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                        {related.title}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">{related.date}</p>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </Card>

                            <Card className="p-6" hoverEffect={false}>
                                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <Tag size={18} className="text-primary" /> Keywords
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.keywords.map((kw, i) => (
                                        <span key={i} className="text-xs bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100 hover:border-primary/30 hover:text-primary transition-colors">
                                            {kw}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
