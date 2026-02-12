import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Frontend Developer",
        company: "TechFlow",
        text: "SkillNest helped me bridge the gap between my CS degree and real-world React development. I landed my first job in 3 months!",
        image: "https://i.pravatar.cc/150?u=alex"
    },
    {
        name: "Sarah Lee",
        role: "Freelancer",
        company: "Upwork Top Rated",
        text: "The freelancing track is a goldmine. I learned how to price my services and write proposals that actually convert.",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        company: "Google",
        text: "I recommend SkillNest to all my interns. It teaches the practical tooling (Git, CI/CD) that universities often miss.",
        image: "https://i.pravatar.cc/150?u=michael"
    },
    {
        name: "Emily Davis",
        role: "Product Designer",
        company: "Creative Studio",
        text: "The UX/UI principles I learned here gave me the confidence to switch careers. The portfolio building section is a game changer.",
        image: "https://i.pravatar.cc/150?u=emily"
    },
    {
        name: "David Kim",
        role: "Full Stack Dev",
        company: "Startup Inc",
        text: "Finally, a platform that doesn't just teach syntax but teaches 'how to build'. The deployment module saved me so much time.",
        image: "https://i.pravatar.cc/150?u=david"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Success Stories</h2>
                <p className="text-gray-600">Hear from students who transformed their careers.</p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient">
                {/* Gradient Masks for smooth fade on edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

                <motion.div
                    className="flex gap-8 w-fit"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate list to create seamless loop */}
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="w-[350px] flex-shrink-0">
                            <Card className="h-full p-8 border-none bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <Quote className="text-primary/20 mb-4" size={40} />
                                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{testimonial.role} @ {testimonial.company}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
