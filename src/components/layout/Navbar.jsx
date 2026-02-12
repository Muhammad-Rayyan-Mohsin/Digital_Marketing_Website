import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
            scrolled
                ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
                : 'bg-transparent border-b border-transparent'
        )}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
                            <Rocket size={18} />
                        </div>
                        <span className="text-2xl font-bold text-dark tracking-tight">
                            Skill<span className="text-gradient">Nest</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'relative px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                                    isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-gray-500 hover:text-dark hover:bg-gray-50'
                                )}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/contact">
                            <Button variant="ghost" size="sm">Log In</Button>
                        </Link>
                        <Link to="/skills">
                            <Button variant="primary" size="sm">Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'block px-4 py-3 rounded-xl text-base font-medium transition-all',
                                            isActive(link.path)
                                                ? 'text-primary bg-primary/5'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full">Log In</Button>
                                </Link>
                                <Link to="/skills" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
