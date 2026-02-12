import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Contact = () => {
    return (
        <div className="overflow-hidden">
            {/* Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-semibold text-primary">
                            <MessageCircle size={16} /> Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Let's Chat About Your Career</h1>
                        <p className="text-gray-500 text-lg">
                            Have questions about our courses? Want to partner with us? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        {/* Contact Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Mail,
                                        color: 'blue',
                                        title: 'Email Us',
                                        lines: ['support@skillnest.com', 'partnerships@skillnest.com']
                                    },
                                    {
                                        icon: MapPin,
                                        color: 'green',
                                        title: 'Visit Us',
                                        lines: ['123 Innovation Drive', 'Tech City, NY 10012']
                                    },
                                    {
                                        icon: Phone,
                                        color: 'purple',
                                        title: 'Call Us',
                                        lines: ['+1 (555) 123-4567'],
                                        subtitle: 'Mon-Fri, 9am - 6pm EST'
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Card className="p-6 flex items-start gap-5 group" hoverEffect={false}>
                                            <div className={`w-12 h-12 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                <item.icon size={22} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                                                {item.lines.map((line, j) => (
                                                    <p key={j} className="text-gray-500 text-sm">{line}</p>
                                                ))}
                                                {item.subtitle && (
                                                    <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                                                )}
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map or image placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Our office space"
                                    className="w-full h-48 object-cover rounded-2xl"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="p-8 shadow-lg border-t-4 border-t-primary" hoverEffect={false}>
                                <h3 className="text-xl font-bold text-dark mb-6">Send us a message</h3>
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 hover:bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 hover:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 hover:bg-white"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Course Support</option>
                                            <option>Partnership</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none bg-gray-50/50 hover:bg-white"
                                        ></textarea>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        <Send size={18} /> Send Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
