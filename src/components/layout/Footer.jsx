import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Rocket size={20} />
                            </div>
                            SkillNest
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Bridging the gap between academic theory and industry reality. Learn practical skills that get you hired.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-dark mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/skills" className="hover:text-primary transition-colors">Browse Skills</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-dark mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/skills" className="hover:text-primary transition-colors">All Skills</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Latest Posts</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Our Mission</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-dark mb-4">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} SkillNest. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <span>Made with ❤️ for Students</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
