import Container from '../components/Container';
import { LINKS } from '../lib/links';

const Projects = () => {
    return (
        <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-32">
            <Container>
                <div className="mb-16 max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl">
                        Selected{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-400 md:text-xl">
                        These are examples of solving hard problems and building scalable systems.
                    </p>
                </div>

                {/* Featured Project Card */}
                <div className="group relative w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900/40 backdrop-blur-xl transition-all duration-200 ease-out shadow-[0_8px_20px_-8px_rgba(30,58,138,0.15)] hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.3),0_0_20px_5px_rgba(14,165,233,0.1)] active:-translate-y-1 active:border-cyan-400/40 active:shadow-[0_0_25px_rgba(0,200,255,0.15)] active:scale-[0.98]">

                    {/* Ambient Glow (Always visible, stronger on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Soft Highlight (Reacts to hover) */}
                    <div className="absolute -inset-1 bg-[radial-gradient(400px_at_50%_0%,rgba(56,189,248,0.1),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative p-8 md:p-10">
                        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
                            {/* Left Content: Title & Impact */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                                        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">Featured Project</span>
                                    </div>
                                    <h3 className="mb-2 text-3xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-white md:text-4xl">Taskflow</h3>
                                    <p className="text-lg font-medium text-slate-400 md:text-xl">
                                        Installable task manager engineered for <span className="text-sky-400">reliable cross-device UI.</span>
                                    </p>
                                </div>

                                {/* Stack Pills - moved here for better flow on mobile */}
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Vite', 'Tailwind', 'Zustand', 'date-fns'].map((tech) => (
                                        <span key={tech} className="rounded-md border border-white/10 bg-slate-950/30 px-2.5 py-1 text-xs font-medium text-slate-400 transition-colors duration-150 group-hover:border-white/20 group-hover:text-slate-300 hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-300 active:bg-cyan-500/20 active:text-cyan-300 active:scale-[0.98]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content: Problem/Solution & Actions */}
                            <div className="flex flex-1 flex-col justify-between gap-8 max-w-md">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase">The Problem</h4>
                                        <p className="text-sm leading-relaxed text-slate-300/80">
                                            Complex UI causes misplaced popovers, layer conflicts, and inconsistent behavior across browsers.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase">The Solution</h4>
                                        <p className="text-sm leading-relaxed text-slate-300/80">
                                            Introduced structured state, controlled portals, and browser fixes to make interactions predictable and production-safe.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2 mt-6">
                                    <a
                                        href={LINKS.projects.taskflow.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-10 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_4px_12px_rgba(14,165,233,0.3)]"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={LINKS.projects.taskflow.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 text-sm font-bold text-slate-300 transition-all hover:-translate-y-0.5 hover:border-slate-500 hover:text-white hover:bg-slate-800"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Projects;
