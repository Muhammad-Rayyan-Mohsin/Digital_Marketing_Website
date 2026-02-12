import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary-hover hover:to-blue-700 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
        secondary: 'bg-gradient-to-r from-secondary to-emerald-500 text-white hover:from-secondary-hover hover:to-emerald-600 shadow-lg shadow-secondary/25',
        accent: 'bg-accent text-dark hover:bg-accent-hover shadow-md',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-dark hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg font-semibold',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
                'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 cursor-pointer',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
