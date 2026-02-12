import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Users, Code, PenTool, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Testimonials from '../components/sections/Testimonials';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">

                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm">
                            🚀 Launch Your Career Today
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight tracking-tight">
                            Bridge the Gap Between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Academia & Industry</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            University teaches you concepts. We teach you how to build, deploy, and get hired. Master the practical skills employers actually look for.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/skills">
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                                    Start Learning Now <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                                    View Roadmap
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">Trusted by students from</p>
                            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder textual logos for universities/companies */}
                                <span className="text-xl font-bold font-serif">University</span>
                                <span className="text-xl font-bold font-mono">TechInstitute</span>
                                <span className="text-xl font-bold font-sans">CodeAcademy</span>
                                <span className="text-xl font-bold font-serif">GlobalCampus</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why SkillNest?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Most graduates have a degree but lack the "job-ready" skills. We fix that.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-t-4 border-t-primary p-8">
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Practical over Theory</h3>
                            <p className="text-gray-600">Stop memorizing definitions. Start building real projects, writing professional emails, and deploying code.</p>
                        </Card>

                        <Card className="border-t-4 border-t-secondary p-8">
                            <div className="w-12 h-12 bg-green-50 text-secondary rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Industry Standard</h3>
                            <p className="text-gray-600">Learn Git, Jira, Agile, and Client Communication - the tools teams actually use every day.</p>
                        </Card>

                        <Card className="border-t-4 border-t-accent p-8">
                            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Career Focused</h3>
                            <p className="text-gray-600">From your first CV to your first freelance client, we guide you through the entire career kickoff.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Popular Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Popular Skill Tracks</h2>
                            <p className="text-gray-600">Start with our most requested concise courses.</p>
                        </div>
                        <Link to="/skills" className="hidden md:flex items-center text-primary font-semibold hover:gap-2 transition-all">
                            View All Skills <ArrowRight size={18} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Skill Card 1 */}
                        <Link to="/skills/git-mastery" className="block">
                            <Card className="h-full hover:border-primary/50 group cursor-pointer transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                        <Code size={20} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">Tech</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Git & GitHub Mastery</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Learn to collaborate, manage versions, and contribute to open source like a pro.</p>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    Start Track <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </Link>

                        {/* Skill Card 2 */}
                        <Link to="/skills/freelancing-101" className="block">
                            <Card className="h-full hover:border-primary/50 group cursor-pointer transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <Briefcase size={20} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">Career</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Freelancing 101</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">How to find your first client, price your work, and write winning proposals.</p>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    Start Track <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </Link>

                        {/* Skill Card 3 */}
                        <Link to="/skills/cv-optimization" className="block">
                            <Card className="h-full hover:border-primary/50 group cursor-pointer transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <PenTool size={20} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">Career</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">CV & Portfolio Building</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Create a resume that passes ATS and a portfolio that wows recruiters.</p>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    Start Track <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </Link>

                        {/* Skill Card 4 */}
                        <Link to="/skills/deployment" className="block">
                            <Card className="h-full hover:border-primary/50 group cursor-pointer transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">Tech</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Deploying Your Project</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Move from localhost to production. Netlify, Vercel, and AWS basics.</p>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    Start Track <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </Link>

                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/skills">
                            <Button variant="outline" className="w-full">View All Skills</Button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="py-20 bg-dark text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your career?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Join thousands of students who are bridging the gap and landing their dream jobs.</p>
                    <Link to="/skills">
                        <Button variant="secondary" size="lg" className="px-10 py-4 text-lg">Start Learning For Free</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
