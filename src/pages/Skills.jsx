import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, Briefcase, PenTool, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Dummy Data
const skillsData = [
    {
        id: 'git-mastery',
        title: 'Git & GitHub Mastery',
        category: 'Tech',
        description: 'Learn to collaborate, manage versions, and contribute to open source like a pro.',
        level: 'Beginner',
        duration: '2 Hours',
        icon: Code,
        color: 'orange'
    },
    {
        id: 'freelancing-101',
        title: 'Freelancing 101',
        category: 'Career',
        description: 'How to find your first client, price your work, and write winning proposals.',
        level: 'Beginner',
        duration: '3 Hours',
        icon: Briefcase,
        color: 'green'
    },
    {
        id: 'cv-optimization',
        title: 'CV & Portfolio Building',
        category: 'Career',
        description: 'Create a resume that passes ATS and a portfolio that wows recruiters.',
        level: 'Intermediate',
        duration: '4 Hours',
        icon: PenTool,
        color: 'blue'
    },
    {
        id: 'deployment',
        title: 'Deploying Your Project',
        category: 'Tech',
        description: 'Move from localhost to production. Netlify, Vercel, and AWS basics.',
        level: 'Intermediate',
        duration: '2.5 Hours',
        icon: BookOpen,
        color: 'purple'
    },
    {
        id: 'linkedin-growth',
        title: 'LinkedIn Growth',
        category: 'Career',
        description: 'Optimize your profile and start networking effectively.',
        level: 'Beginner',
        duration: '1.5 Hours',
        icon: Briefcase,
        color: 'blue'
    },
    {
        id: 'api-basics',
        title: 'API Fundamentals',
        category: 'Tech',
        description: 'Understand REST, JSON, and how to fetch data in your apps.',
        level: 'Beginner',
        duration: '2 Hours',
        icon: Code,
        color: 'orange'
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

    const variants = {
        orange: 'bg-orange-100 text-orange-600',
        green: 'bg-green-100 text-green-600',
        blue: 'bg-blue-100 text-blue-600',
        purple: 'bg-purple-100 text-purple-600',
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-dark mb-4">Explore Skills</h1>
                <p className="text-gray-600">Master the practical skills that university doesn't teach you.</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to={`/skills/${skill.id}`}>
                                <Card className="h-full hover:border-primary/50 group cursor-pointer">
                                    <div className={`p-3 w-fit rounded-xl mb-4 ${variants[skill.color] || variants['blue']}`}>
                                        <skill.icon size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                                    <p className="text-gray-500 mb-6 text-sm line-clamp-2">{skill.description}</p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} /> {skill.duration}
                                            </span>
                                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            <ChevronRight size={20} />
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
                    <p className="text-gray-500">No skills found matching your criteria.</p>
                    <Button variant="ghost" className="mt-4" onClick={() => { setFilter('All'); setSearch('') }}>Clear Filters</Button>
                </div>
            )}
        </div>
    );
};

export default Skills;
