import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Rocket, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-dark text-white overflow-hidden">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-gradient-dark pointer-events-none" />

            {/* Newsletter Banner */}
            <div className="relative border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Stay in the loop</h3>
                            <p className="text-gray-400 text-sm">Get weekly tips on career growth, new skills, and industry insights.</p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/10 rounded-l-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                            <button className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-r-xl hover:from-primary-hover hover:to-blue-700 transition-all flex items-center gap-2 whitespace-nowrap">
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white">
                                <Rocket size={18} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">SkillNest</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Bridging the gap between academic theory and industry reality. Learn practical skills that get you hired.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: Github, label: 'GitHub' },
                                { icon: Twitter, label: 'Twitter' },
                                { icon: Linkedin, label: 'LinkedIn' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/skills" className="hover:text-white transition-colors">Browse Skills</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/skills" className="hover:text-white transition-colors">All Skill Tracks</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Latest Articles</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Get Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} SkillNest. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500">
                        Built with passion for students worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
