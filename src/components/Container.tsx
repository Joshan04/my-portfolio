import React from 'react';
import { cn } from '../lib/utils'; // Assuming cn is available or will be useful, but let's stick to simple props first unless needed. Actually, reusable components usually need className.

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    );
};

export default Container;
