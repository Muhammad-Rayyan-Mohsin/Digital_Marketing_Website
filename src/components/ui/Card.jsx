import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={cn(
                'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
