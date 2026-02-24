
import Container from '../components/Container';

interface ApproachStep {
    title: string;
    description: string;
}

const approachSteps: ApproachStep[] = [
    {
        title: "User-Centric Design",
        description: "Every line of code starts with the user. I prioritize intuitive interfaces, accessibility, and solving real problems over flashy tech demos."
    },
    {
        title: "Scalable Architecture",
        description: "Building systems that grow. I use modular patterns, strict typing, and automated testing to ensure the codebase remains clean and maintainable."
    },
    {
        title: "Performance First",
        description: "Speed is a feature. From server-side rendering to optimized assets, I ensure applications load instantly and run smoothly on any device."
    },
    {
        title: "Rapid Iteration",
        description: "Ship fast, learn faster. I believe in short feedback loops, continuous deployment, and refining products based on real-world usage."
    }
];

const HowIBuild = () => {
    return (
        <section id="approach" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-32">
            <Container>
                <div className="mb-16 max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl">
                        How I{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                            Build
                        </span>
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-400 md:text-xl">
                        A philosophy rooted in reliability, speed, and user experience.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                    {approachSteps.map((step) => (
                        <div
                            key={step.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,180,255,0.12)] active:-translate-y-1 active:border-cyan-400/40 active:shadow-[0_0_25px_rgba(0,200,255,0.15)] active:scale-[0.98] md:p-7"
                        >
                            {/* Premium Light Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative flex gap-4">
                                {/* Refined Accent Bar */}
                                <div className="w-1 shrink-0 rounded-full bg-cyan-400/60 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,180,255,0.5)]" />

                                <div>
                                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowIBuild;
