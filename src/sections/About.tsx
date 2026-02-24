import Image from 'next/image';
import Container from '../components/Container';

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-32">
            <Container>
                {/* Section Header */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl">
                        About{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Text Content */}
                    <div className="max-w-2xl space-y-8 text-lg leading-relaxed">
                        <p className="text-slate-300">
                            I'm a full-stack engineer who ships reliable, production-ready software. I turn messy, ambiguous problems into systems that users can depend on.
                        </p>

                        <p className="text-slate-300">
                            I recently built and launched <span className="font-semibold text-cyan-400">Taskflow</span>, fixing complex UI failures across browsers, devices, and rendering layers.
                        </p>

                        <p className="text-slate-300">
                            I focus on speed, ownership, and making products stable under real-world pressure.
                        </p>

                        <p className="text-slate-400">
                            I spend my time improving system design, scalability, and how teams move from idea to live product fast.
                        </p>
                    </div>

                    {/* Right Column - Profile Card */}
                    <div className="flex items-start justify-center lg:justify-end">
                        <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/5 bg-slate-900/20 p-8 backdrop-blur-sm transition-all duration-200 hover:border-white/10 hover:bg-slate-900/30 active:border-white/10 active:bg-slate-900/30 active:scale-[0.98]">
                            {/* Subtle Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative space-y-6">
                                {/* Avatar */}
                                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                    <Image
                                        src="/profile-v2.jpg"
                                        alt="Profile Picture"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 128px, 128px"
                                        priority
                                    />
                                </div>

                                {/* Info */}
                                <div className="space-y-3 text-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        Full-Stack Engineer
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        Building reliable systems that scale
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="space-y-2 border-t border-white/5 pt-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Focus</span>
                                        <span className="text-slate-300">Production-Ready Code</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Approach</span>
                                        <span className="text-slate-300">Detail-Oriented</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
