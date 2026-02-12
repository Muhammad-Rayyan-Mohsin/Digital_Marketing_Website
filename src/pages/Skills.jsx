import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, Briefcase, PenTool, BookOpen, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const skillsData = [
    {
        id: 'git-mastery',
        title: 'Git & GitHub Mastery',
        category: 'Tech',
        description: 'Learn to collaborate, manage versions, and contribute to open source like a pro.',
        level: 'Beginner',
        duration: '2 Hours',
        icon: Code,
        color: 'orange',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'freelancing-101',
        title: 'Freelancing 101',
        category: 'Career',
        description: 'How to find your first client, price your work, and write winning proposals.',
        level: 'Beginner',
        duration: '3 Hours',
        icon: Briefcase,
        color: 'green',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'cv-optimization',
        title: 'CV & Portfolio Building',
        category: 'Career',
        description: 'Create a resume that passes ATS and a portfolio that wows recruiters.',
        level: 'Intermediate',
        duration: '4 Hours',
        icon: PenTool,
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'deployment',
        title: 'Deploying Your Project',
        category: 'Tech',
        description: 'Move from localhost to production. Netlify, Vercel, and AWS basics.',
        level: 'Intermediate',
        duration: '2.5 Hours',
        icon: BookOpen,
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'linkedin-growth',
        title: 'LinkedIn Growth',
        category: 'Career',
        description: 'Optimize your profile and start networking effectively.',
        level: 'Beginner',
        duration: '1.5 Hours',
        icon: Briefcase,
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'api-basics',
        title: 'API Fundamentals',
        category: 'Tech',
        description: 'Understand REST, JSON, and how to fetch data in your apps.',
        level: 'Beginner',
        duration: '2 Hours',
        icon: Code,
        color: 'orange',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
];

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const categories = ['All', 'Career', 'Tech', 'Freelancing'];

    const filteredSkills = skillsData.filter(skill => {
        const matchesCategory = filter === 'All' || skill.category === filter;
        const matchesSearch = skill.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="overflow-hidden">
            {/* Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-12"
                    >
                        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-semibold text-primary">
                            <Sparkles size={16} /> Browse Courses
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Explore Skills</h1>
                        <p className="text-gray-500 text-lg">Master the practical skills that university doesn't teach you.</p>
                    </motion.div>

                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
                    >
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all whitespace-nowrap text-sm ${filter === cat
                                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25'
                                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search skills..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/skills/${skill.id}`}>
                                    <Card className="h-full p-0 overflow-hidden group cursor-pointer">
                                        {/* Image */}
                                        <div className="h-44 overflow-hidden relative">
                                            <img
                                                src={skill.image}
                                                alt={skill.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 uppercase tracking-wider">
                                                {skill.category}
                                            </span>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                                            <p className="text-gray-500 mb-6 text-sm line-clamp-2 leading-relaxed">{skill.description}</p>

                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={14} /> {skill.duration}
                                                    </span>
                                                    <span className="bg-gray-50 px-2.5 py-1 rounded-full text-gray-500">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                <div className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                    <ChevronRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 mb-4">No skills found matching your criteria.</p>
                        <Button variant="ghost" onClick={() => { setFilter('All'); setSearch('') }}>Clear Filters</Button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Skills;
