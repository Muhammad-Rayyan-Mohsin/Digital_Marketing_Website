import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hoverEffect = true, glass = false, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -6, transition: { duration: 0.3, ease: 'easeOut' } } : {}}
            className={cn(
                'rounded-2xl p-6 border transition-all duration-300',
                glass
                    ? 'bg-white/60 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl hover:bg-white/80'
                    : 'bg-white shadow-sm border-gray-100/80 hover:shadow-lg hover:border-gray-200/80',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
