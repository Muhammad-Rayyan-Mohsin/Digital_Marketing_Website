import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Frontend Developer",
        company: "TechFlow",
        text: "SkillNest helped me bridge the gap between my CS degree and real-world React development. I landed my first job in 3 months!",
        image: "https://i.pravatar.cc/150?u=alex",
        rating: 5
    },
    {
        name: "Sarah Lee",
        role: "Freelancer",
        company: "Upwork Top Rated",
        text: "The freelancing track is a goldmine. I learned how to price my services and write proposals that actually convert.",
        image: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        company: "Google",
        text: "I recommend SkillNest to all my interns. It teaches the practical tooling (Git, CI/CD) that universities often miss.",
        image: "https://i.pravatar.cc/150?u=michael",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Product Designer",
        company: "Creative Studio",
        text: "The UX/UI principles I learned here gave me the confidence to switch careers. The portfolio building section is a game changer.",
        image: "https://i.pravatar.cc/150?u=emily",
        rating: 5
    },
    {
        name: "David Kim",
        role: "Full Stack Dev",
        company: "Startup Inc",
        text: "Finally, a platform that doesn't just teach syntax but teaches 'how to build'. The deployment module saved me so much time.",
        image: "https://i.pravatar.cc/150?u=david",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 md:py-32 bg-gray-50/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-mesh-gradient pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 mb-14 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-dark mt-3 mb-4">Success Stories</h2>
                    <p className="text-gray-500 text-lg">Hear from students who transformed their careers.</p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-gray-50/50 to-transparent z-10 hidden md:block pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-50/50 to-transparent z-10 hidden md:block pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-fit"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="w-[380px] flex-shrink-0">
                            <div className="h-full p-8 bg-white rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-lg transition-all duration-500 group">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} size={16} className="fill-accent text-accent" />
                                    ))}
                                </div>

                                <Quote className="text-primary/10 mb-3" size={36} />
                                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/10">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-400">{testimonial.role} @ {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
