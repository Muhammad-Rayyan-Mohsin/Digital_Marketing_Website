import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <div className="overflow-hidden">
            {/* Header / Mission */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 text-center max-w-3xl relative">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
                    >
                        Our Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight"
                    >
                        Bridging the Gap Between{' '}
                        <span className="text-gradient">Degrees</span> and{' '}
                        <span className="text-gradient-accent">Careers</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 leading-relaxed"
                    >
                        We believe that a university degree is just the beginning. SkillNest was built to provide the missing practical layer that turns students into job-ready professionals.
                    </motion.p>
                </div>
            </section>

            {/* The Problem / Solution Story */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team Working"
                                    className="rounded-3xl shadow-2xl w-full object-cover h-[450px]"
                                />
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark/10 to-transparent" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">Why We Started</h2>
                            <div className="space-y-5 text-gray-500 leading-relaxed">
                                <p>
                                    In 2024, we noticed a recurring pattern: brilliant students with 4.0 GPAs were failing technical interviews because they had never deployed a real application or worked in a team environment.
                                </p>
                                <p>
                                    Traditional education is excellent for foundations, but it moves too slowly to keep up with industry tools.
                                </p>
                                <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-2xl border border-primary/10">
                                    <h4 className="font-bold text-dark mb-3">The SkillNest Approach:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            ['Focus on ', 'Application', ', not just Theory.'],
                                            ['Short, ', 'outcome-driven', ' modules (2-4 hours).'],
                                            ['Real-world tools: Git, Jira, AWS, Vercel.', '', '']
                                        ].map((parts, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                                                <span>{parts[0]}<strong className="text-dark">{parts[1]}</strong>{parts[2]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-dark mt-3">Our Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: 'Practicality First', desc: "If it doesn't help you get hired or build something, we don't teach it.", color: 'blue', gradient: 'from-primary to-blue-600' },
                            { icon: TrendingUp, title: 'Growth Mindset', desc: 'Failure is just a debugging step. We encourage iterative learning.', color: 'green', gradient: 'from-secondary to-emerald-500' },
                            { icon: Users, title: 'Community Led', desc: "Learn together. Review each other's code. Network for life.", color: 'yellow', gradient: 'from-accent to-amber-500' },
                            { icon: Award, title: 'Excellence', desc: 'We hold our content to the highest industry standards.', color: 'purple', gradient: 'from-purple-500 to-violet-600' },
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-8 text-center h-full group relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                                    <div className={`w-14 h-14 mx-auto bg-${value.color}-50 text-${value.color}-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon size={26} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Image Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="SkillNest Team"
                            className="w-full h-[300px] md:h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Built by practitioners, for practitioners.</h3>
                            <p className="text-white/70 max-w-lg">Our team of engineers, designers, and career coaches is dedicated to helping the next generation succeed.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
