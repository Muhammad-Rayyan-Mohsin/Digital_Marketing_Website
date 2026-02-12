import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import Card from '../components/ui/Card';
import blogPosts from '../data/blogPosts';

const ContentRenderer = ({ section }) => {
    switch (section.type) {
        case 'heading':
            return <h2 className="text-2xl font-bold text-dark mt-8 mb-4">{section.text}</h2>;
        case 'subheading':
            return <h3 className="text-xl font-semibold text-dark mt-6 mb-3">{section.text}</h3>;
        case 'paragraph':
            return <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>;
        case 'list':
            return (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 pl-2">
                    {section.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
                </ul>
            );
        case 'image':
            return (
                <figure className="my-6">
                    <img src={section.src} alt={section.alt} className="w-full rounded-xl object-cover max-h-96" />
                    {section.caption && (
                        <figcaption className="text-sm text-gray-500 mt-2 text-center italic">{section.caption}</figcaption>
                    )}
                </figure>
            );
        case 'callout':
            return (
                <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-4 my-6">
                    <p className="text-gray-800 font-medium">{section.text}</p>
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
                <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
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
        <div className="container mx-auto px-4 py-8">
            <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back to Blog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <article className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="rounded-2xl overflow-hidden mb-8">
                            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                            <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">{post.title}</h1>

                        <div className="max-w-none">
                            {post.content.map((section, index) => (
                                <ContentRenderer key={index} section={section} />
                            ))}
                        </div>
                    </motion.div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <Card className="sticky top-24 p-6 border-t-4 border-t-primary" hoverEffect={false}>
                        <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                        <div className="space-y-4">
                            {blogPosts
                                .filter(p => p.slug !== slug)
                                .slice(0, 3)
                                .map(related => (
                                    <Link key={related.id} to={`/blog/${related.slug}`} className="block group">
                                        <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">{related.date}</p>
                                    </Link>
                                ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h3 className="text-lg font-bold mb-3">Keywords</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.keywords.map((kw, i) => (
                                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
};

export default BlogPost;
