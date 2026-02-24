import React from 'react';
import { cn } from '../lib/utils'; // Assuming this utility exists

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    className?: string; // For the container
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    titleClassName,
    subtitleClassName,
    className
}) => {
    return (
        <div className={cn("mb-8 md:mb-12 text-center", className)}>
            <h2 className={cn("text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", titleClassName)}>
                {title}
            </h2>
            {subtitle && (
                <p className={cn("mt-4 text-lg text-gray-500", subtitleClassName)}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
