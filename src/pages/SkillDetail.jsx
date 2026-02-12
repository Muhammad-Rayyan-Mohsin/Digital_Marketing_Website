import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, PlayCircle, Lock, Clock, Award, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const lessonData = {
    'git-mastery': {
        title: 'Git & GitHub Mastery',
        description: 'Learn to collaborate, manage versions, and contribute to open source like a pro.',
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
    // Fallback for other IDs
    'default': {
        title: 'Skill Track',
        description: 'Content for this simulated track.',
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
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <Link to="/skills" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back to Skills
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">{data.title}</h1>
                        <p className="text-xl text-gray-600 mb-6">{data.description}</p>
                        <div className="flex gap-4 mb-8">
                            <span className="flex items-center gap-2 text-sm font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                <Clock size={16} /> 2.5 Hours
                            </span>
                            <span className="flex items-center gap-2 text-sm font-semibold bg-green-50 text-green-600 px-3 py-1 rounded-full">
                                <Award size={16} /> Certificate
                            </span>
                        </div>
                    </motion.div>

                    {/* Curriculum */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-dark">Course Content</h2>
                        {data.modules.map((module, i) => (
                            <Card key={i} className="p-0 overflow-hidden border-2 border-transparent hover:border-blue-100 transition-colors" hoverEffect={false}>
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                    <h3 className="font-bold text-gray-800">{module.title}</h3>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {module.lessons.map((lesson, j) => (
                                        <div key={j} className="px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${lesson.locked ? 'bg-gray-100 text-gray-400' : 'bg-primary/10 text-primary'}`}>
                                                    {lesson.locked ? <Lock size={16} /> : <PlayCircle size={16} />}
                                                </div>
                                                <span className={`font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-700'}`}>{lesson.title}</span>
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium">{lesson.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 p-6 border-t-4 border-t-primary">
                        <h3 className="text-xl font-bold mb-4">Your Progress</h3>
                        <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
                            <div className="bg-primary h-2 rounded-full w-[15%]"></div>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">15% Completed</p>

                        <Button className="w-full mb-4">Resume Learning</Button>

                        <div className="space-y-4 pt-6 border-t border-gray-100">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 mt-0.5" />
                                <p className="text-sm text-gray-600">Access to all course materials</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 mt-0.5" />
                                <p className="text-sm text-gray-600">Certificate of completion</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 mt-0.5" />
                                <p className="text-sm text-gray-600">Mentor support</p>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default SkillDetail;
