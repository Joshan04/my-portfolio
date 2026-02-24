'use client';
import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Approach', href: '#approach' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const hasScrolled = useRef(false);

    // Track user scroll to enable scroll spy
    useEffect(() => {
        const handleScroll = () => {
            hasScrolled.current = true;
        };

        window.addEventListener('scroll', handleScroll, { once: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver-based scroll spy
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px', // Trigger when section is ~30-40% in view
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Only update if user has scrolled
            if (!hasScrolled.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const navItem = navItems.find(item => item.href === `#${sectionId}`);
                    if (navItem) {
                        setActiveSection(navItem.name);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navItems.forEach(item => {
            const section = document.querySelector(item.href);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Update indicator position when active section changes
    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.name === activeSection);
        const activeElement = navRefs.current[activeIndex];

        if (activeElement) {
            const { offsetLeft, offsetWidth } = activeElement;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth
            });
        }
    }, [activeSection]);

    const handleNavClick = (name: string) => {
        setActiveSection(name);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
            <Container className="flex h-20 items-center justify-between">
                {/* Brand / Logo */}
                <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Portfolio
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block relative">
                    {/* Animated Active Indicator */}
                    <div
                        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-500 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                            transform: 'translateZ(0)', // Hardware acceleration
                        }}
                    />

                    <ul className="flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <li key={item.name}>
                                <a
                                    ref={(el) => { navRefs.current[index] = el; }}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`relative block py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:text-cyan-300 ${activeSection === item.name
                                        ? 'text-cyan-400'
                                        : 'text-white/60'
                                        }`}
                                    style={{ transform: 'translateZ(0)' }} // Hardware acceleration
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-slate-400 transition-colors hover:text-white md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </Container>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-20 -z-10 w-full animate-mobile-menu border-b border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl md:hidden">
                    <ul className="flex w-full flex-col p-4">
                        {navItems.map((item) => (
                            <li key={item.name} className="w-full">
                                <a
                                    href={item.href}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`block w-full rounded-lg py-3 text-center text-lg font-medium tracking-wide transition-all duration-300 active:scale-95 ${activeSection === item.name
                                        ? 'text-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)] border-l-4 border-cyan-400'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
