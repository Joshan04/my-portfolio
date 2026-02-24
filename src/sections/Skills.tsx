
import Container from '../components/Container';

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand", "Web APIs"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "REST APIs", "Authentication", "API Design"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
        title: "DevOps & Tools",
        skills: ["GitHub", "Vercel", "CI/CD", "Linux", "Docker"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-32">
            <Container>
                <div className="mb-16 max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl">
                        Technical{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-400 md:text-xl">
                        A focused stack for solving production problems and shipping reliable software.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,180,255,0.15)] active:-translate-y-1 active:border-cyan-400/40 active:shadow-[0_0_25px_rgba(0,200,255,0.15)] active:scale-[0.98]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative">
                                <h3 className="mb-6 text-lg font-semibold tracking-tight text-white">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2.5 md:gap-3">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-800/60 px-3 py-1 text-sm text-slate-300 transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-300 active:bg-cyan-500/20 active:text-cyan-300 active:scale-[0.98]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
