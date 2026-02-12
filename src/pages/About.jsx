import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <div className="overflow-hidden">
            {/* Header / Mission */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block"
                    >
                        Our Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-dark mb-6"
                    >
                        Bridging the Gap Between <br />
                        <span className="text-primary">Degrees and Careers</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        We believe that a university degree is just the beginning. SkillNest was built to provide the missing practical layer that turns students into job-ready professionals.
                    </motion.p>
                </div>
            </section>

            {/* The Problem / Solution Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Team Working"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-dark mb-6">Why We Started</h2>
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    In 2024, we noticed a recurring pattern: brilliant students with 4.0 GPAs were failing technical interviews because they had never deployed a real application or worked in a team environment.
                                </p>
                                <p>
                                    Traditional education is excellent for foundations, but it moves too slowly to keep up with industry tools.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                                    <h4 className="font-bold text-dark mb-2">The SkillNest Approach:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-green-500 mt-1" />
                                            <span>Focus on <strong>Application</strong>, not just Theory.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-green-500 mt-1" />
                                            <span>Short, <strong>outcome-driven</strong> modules (2-4 hours).</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-green-500 mt-1" />
                                            <span>Real-world tools: Git, Jira, AWS, Vercel.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-8 text-center hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 mx-auto bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">
                                <Target size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Practicality First</h3>
                            <p className="text-sm text-gray-500">If it doesn't help you get hired or build something, we don't teach it.</p>
                        </Card>
                        <Card className="p-8 text-center hover:border-green-500/50 transition-colors">
                            <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Growth Mindset</h3>
                            <p className="text-sm text-gray-500">Failure is just a debugging step. We encourage iterative learning.</p>
                        </Card>
                        <Card className="p-8 text-center hover:border-accent/50 transition-colors">
                            <div className="w-12 h-12 mx-auto bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Community Led</h3>
                            <p className="text-sm text-gray-500">Learn together. Review each other's code. Network for life.</p>
                        </Card>
                        <Card className="p-8 text-center hover:border-purple-500/50 transition-colors">
                            <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Award size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Excellence</h3>
                            <p className="text-sm text-gray-500">We hold our content to the highest industry standards.</p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
