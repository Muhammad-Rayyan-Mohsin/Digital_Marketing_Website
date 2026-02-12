import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, PlayCircle, Lock, Clock, Award, ChevronLeft, BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const lessonData = {
    'git-mastery': {
        title: 'Git & GitHub Mastery',
        description: 'Learn to collaborate, manage versions, and contribute to open source like a pro.',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        modules: [
            {
                title: 'Module 1: The Basics',
                lessons: [
                    { title: 'What is Version Control?', duration: '5 min', locked: false },
                    { title: 'Installing Git', duration: '10 min', locked: false },
                    { title: 'Your First Commit', duration: '15 min', locked: true },
                ]
            },
            {
                title: 'Module 2: Branching & Merging',
                lessons: [
                    { title: 'Understanding Branches', duration: '12 min', locked: true },
                    { title: 'Merge Conflicts & Resolution', duration: '20 min', locked: true },
                ]
            },
            {
                title: 'Module 3: GitHub Collaboration',
                lessons: [
                    { title: 'Pull Requests Explained', duration: '15 min', locked: true },
                    { title: 'Code Reviews', duration: '10 min', locked: true },
                ]
            }
        ]
    },
    'default': {
        title: 'Skill Track',
        description: 'Content for this simulated track.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        modules: [
            {
                title: 'Module 1: Getting Started',
                lessons: [
                    { title: 'Introduction', duration: '10 min', locked: false },
                    { title: 'Setup Environment', duration: '15 min', locked: true },
                ]
            }
        ]
    }
};

const SkillDetail = () => {
    const { id } = useParams();
    const data = lessonData[id] || lessonData['default'];

    return (
        <div className="overflow-hidden">
            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-48 md:h-64 overflow-hidden"
            >
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-4 -mt-16 relative z-10 pb-16">
                <Link to="/skills" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors text-sm">
                    <ChevronLeft size={16} className="mr-1" /> Back to Skills
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="p-8 mb-8" hoverEffect={false}>
                                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">{data.title}</h1>
                                <p className="text-lg text-gray-500 mb-6 leading-relaxed">{data.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center gap-2 text-sm font-semibold bg-primary/5 text-primary px-4 py-2 rounded-full border border-primary/10">
                                        <Clock size={16} /> 2.5 Hours
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-semibold bg-secondary/5 text-secondary px-4 py-2 rounded-full border border-secondary/10">
                                        <Award size={16} /> Certificate
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-semibold bg-purple-50 text-purple-600 px-4 py-2 rounded-full border border-purple-100">
                                        <BookOpen size={16} /> {data.modules.length} Modules
                                    </span>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Curriculum */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-dark mb-2">Course Content</h2>
                            {data.modules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="p-0 overflow-hidden" hoverEffect={false}>
                                        <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100">
                                            <h3 className="font-bold text-gray-800">{module.title}</h3>
                                        </div>
                                        <div className="divide-y divide-gray-50">
                                            {module.lessons.map((lesson, j) => (
                                                <div key={j} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer group">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${lesson.locked ? 'bg-gray-100 text-gray-400' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                                            {lesson.locked ? <Lock size={16} /> : <PlayCircle size={16} />}
                                                        </div>
                                                        <span className={`font-medium text-sm ${lesson.locked ? 'text-gray-400' : 'text-gray-700'}`}>{lesson.title}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2.5 py-1 rounded-full">{lesson.duration}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24 p-6 border-t-4 border-t-primary" hoverEffect={false}>
                            <h3 className="text-xl font-bold mb-4">Your Progress</h3>
                            <div className="w-full bg-gray-100 h-2.5 rounded-full mb-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '15%' }}
                                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                                    className="bg-gradient-to-r from-primary to-blue-600 h-full rounded-full"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mb-6">15% Completed</p>

                            <Button className="w-full mb-6">Resume Learning</Button>

                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                {['Access to all course materials', 'Certificate of completion', 'Mentor support'].map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-gray-500">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetail;
