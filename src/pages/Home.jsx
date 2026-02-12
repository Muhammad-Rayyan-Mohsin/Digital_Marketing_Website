import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Users, Code, PenTool, TrendingUp, ChevronRight, Sparkles, Zap, GraduationCap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Testimonials from '../components/sections/Testimonials';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const stats = [
    { value: '10K+', label: 'Active Learners', icon: Users },
    { value: '50+', label: 'Skill Tracks', icon: BookOpen },
    { value: '95%', label: 'Completion Rate', icon: TrendingUp },
    { value: '4.9', label: 'Average Rating', icon: Star },
];

const Home = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Animated mesh gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/8 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent/6 to-purple-500/6 rounded-full blur-3xl animate-float pointer-events-none" />

                {/* Decorative floating elements */}
                <div className="absolute top-32 right-[15%] hidden lg:block">
                    <motion.div
                        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10 backdrop-blur-sm flex items-center justify-center"
                    >
                        <Code size={28} className="text-primary/60" />
                    </motion.div>
                </div>
                <div className="absolute bottom-40 left-[10%] hidden lg:block">
                    <motion.div
                        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="w-14 h-14 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/10 backdrop-blur-sm flex items-center justify-center"
                    >
                        <Briefcase size={24} className="text-secondary/60" />
                    </motion.div>
                </div>
                <div className="absolute top-48 left-[20%] hidden lg:block">
                    <motion.div
                        animate={{ y: [-8, 12, -8], rotate: [0, -3, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl border border-accent/15 backdrop-blur-sm flex items-center justify-center"
                    >
                        <Sparkles size={20} className="text-accent/70" />
                    </motion.div>
                </div>

                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                                <Zap size={16} className="text-primary" />
                                <span className="text-primary font-semibold text-sm">Launch Your Career Today</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-[1.1] tracking-tight">
                                Bridge the Gap
                                <br />
                                Between{' '}
                                <span className="text-gradient">Academia</span>
                                <br />
                                & <span className="text-gradient-accent">Industry</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
                                University teaches concepts. We teach you how to build, deploy, and get hired. Master the practical skills employers actually look for.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-4">
                                <Link to="/skills">
                                    <Button size="lg" className="text-lg px-8">
                                        Start Learning Free <ArrowRight size={20} />
                                    </Button>
                                </Link>
                                <Link to="/about">
                                    <Button variant="outline" size="lg" className="text-lg px-8">
                                        View Roadmap
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Social proof */}
                            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {['alex', 'sarah', 'michael', 'emily'].map((name) => (
                                        <img
                                            key={name}
                                            src={`https://i.pravatar.cc/80?u=${name}`}
                                            alt=""
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-0.5">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} size={14} className="fill-accent text-accent" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        <span className="font-semibold text-dark">4.9/5</span> from 2,000+ reviews
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Main image */}
                                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Students collaborating on projects"
                                        className="w-full h-[480px] object-cover"
                                    />
                                </div>

                                {/* Floating stat card */}
                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                            <TrendingUp size={20} className="text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-dark">95%</p>
                                            <p className="text-xs text-gray-400">Job placement rate</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [5, -5, 5] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <GraduationCap size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-dark">10K+</p>
                                            <p className="text-xs text-gray-400">Students enrolled</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Bar */}
            <section className="relative -mt-4 z-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                className="text-center"
                            >
                                <stat.icon size={22} className="mx-auto mb-2 text-primary" />
                                <p className="text-3xl md:text-4xl font-bold text-dark">{stat.value}</p>
                                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why SkillNest Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-dark mt-3 mb-4">Why SkillNest?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Most graduates have a degree but lack the "job-ready" skills. We fix that.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Briefcase,
                                title: 'Practical over Theory',
                                description: 'Stop memorizing definitions. Start building real projects, writing professional emails, and deploying code.',
                                color: 'blue',
                                gradient: 'from-primary to-blue-600'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Industry Standard',
                                description: 'Learn Git, Jira, Agile, and Client Communication - the tools teams actually use every day.',
                                color: 'green',
                                gradient: 'from-secondary to-emerald-500'
                            },
                            {
                                icon: Users,
                                title: 'Career Focused',
                                description: 'From your first CV to your first freelance client, we guide you through the entire career kickoff.',
                                color: 'purple',
                                gradient: 'from-purple-500 to-violet-600'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <Card className="p-8 h-full group hover:border-transparent relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                                    <div className={`w-14 h-14 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Students learning digital skills"
                                    className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                                />
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark/20 to-transparent" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real-World Learning</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">Learn by Building, Not Just Watching</h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                Every skill track includes hands-on projects, real-world scenarios, and portfolio-ready deliverables. No more tutorial hell.
                            </p>
                            <div className="space-y-4">
                                {['Project-based curriculum with real deliverables', 'Industry mentors review your work', 'Certificate recognized by employers'].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Popular Skills Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Popular Courses</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-dark mt-3 mb-3">Popular Skill Tracks</h2>
                            <p className="text-gray-500 text-lg">Start with our most requested concise courses.</p>
                        </motion.div>
                        <Link to="/skills" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                            View All Skills <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: 'git-mastery', icon: Code, title: 'Git & GitHub Mastery', desc: 'Learn to collaborate, manage versions, and contribute to open source like a pro.', tag: 'Tech', color: 'orange', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                            { id: 'freelancing-101', icon: Briefcase, title: 'Freelancing 101', desc: 'How to find your first client, price your work, and write winning proposals.', tag: 'Career', color: 'green', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                            { id: 'cv-optimization', icon: PenTool, title: 'CV & Portfolio Building', desc: 'Create a resume that passes ATS and a portfolio that wows recruiters.', tag: 'Career', color: 'blue', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                            { id: 'deployment', icon: BookOpen, title: 'Deploying Your Project', desc: 'Move from localhost to production. Netlify, Vercel, and AWS basics.', tag: 'Tech', color: 'purple', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
                        ].map((skill, i) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link to={`/skills/${skill.id}`} className="block h-full">
                                    <Card className="h-full p-0 overflow-hidden group cursor-pointer">
                                        {/* Skill Image */}
                                        <div className="h-36 overflow-hidden relative">
                                            <img
                                                src={skill.image}
                                                alt={skill.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 uppercase tracking-wider">
                                                {skill.tag}
                                            </span>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{skill.desc}</p>
                                            <div className="flex items-center text-sm font-semibold text-primary">
                                                Start Track <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center md:hidden">
                        <Link to="/skills">
                            <Button variant="outline" className="w-full">View All Skills</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-dark text-white relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-mesh-gradient-dark pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium">
                            <Sparkles size={16} /> Ready to level up?
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ready to upgrade
                            <br />
                            your career?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of students who are bridging the gap and landing their dream jobs with practical, industry-ready skills.
                        </p>
                        <Link to="/skills">
                            <Button variant="secondary" size="lg" className="px-10 py-4 text-lg">
                                Start Learning For Free <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
