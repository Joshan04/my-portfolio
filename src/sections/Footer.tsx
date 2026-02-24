import React from 'react';
import Container from '../components/Container';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-slate-950 py-8 md:py-12">
            <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Boluwatife Ojo. All rights reserved.
                </p>
                <p className="text-center text-sm text-slate-500">
                    Built with{' '}
                    <span className="font-medium text-slate-300">React</span>,{' '}
                    <span className="font-medium text-slate-300">Next.js</span>,{' '}
                    <span className="font-medium text-sky-400">Tailwind CSS</span>{' '}
                    &amp;{' '}
                    <span className="font-medium text-slate-300">TypeScript</span>.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
