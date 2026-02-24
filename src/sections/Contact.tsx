'use client';

import React, { useState } from 'react';
import Container from '../components/Container';
import { LINKS } from '../lib/links';

/* ─── SVG Icons ─── */
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

/* ─── Data ─── */
const trustPoints = [
    'Ship production-ready features fast',
    'Strong in messy, ambiguous environments',
    'Focused on reliability and scale',
    'Clear communicator, low management overhead',
];

const socialLinks: {
    label: string;
    href: string;
    Icon: () => React.ReactElement;
    external: boolean;
    disabled?: boolean;
}[] = [
        { label: 'GitHub', href: LINKS.social.github, Icon: GithubIcon, external: true },
        { label: 'Twitter', href: LINKS.social.twitter, Icon: TwitterIcon, external: true },
        { label: 'Email', href: LINKS.social.email, Icon: MailIcon, external: false },
        { label: 'LinkedIn', href: LINKS.social.linkedin, Icon: LinkedinIcon, external: true, disabled: LINKS.social.linkedin === '#' },
    ];

/* ─── Shared input style ─── */
const inputBase =
    'w-full rounded-xl border border-white/[0.12] bg-slate-900/60 px-5 py-4 text-slate-200 ' +
    'placeholder-slate-500 outline-none backdrop-blur-sm transition-all duration-200 ' +
    'focus:border-blue-400 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)]';

type Status = 'idle' | 'loading' | 'success' | 'error';

/* ─── Component ─── */
const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const busy = status === 'loading';

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black pt-24 pb-24 text-white md:pt-32 md:pb-28"
        >
            {/* ── Radial glow — bottom-centre origin like a beacon ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 75% 55% at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 70%), ' +
                        'radial-gradient(ellipse 60% 40% at 50% 0%,   rgba(59,130,246,0.06) 0%, transparent 70%)',
                }}
            />

            {/* ── Subtle grid texture ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), ' +
                        'linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <Container>

                {/* ── Section header ── */}
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                    Open to product opportunities
                </span>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                    Let&apos;s Build{' '}
                    <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Something Great
                    </span>
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
                    Have a product to ship, scale, or stabilize? I&apos;m open to discussing
                    opportunities where I can take ownership and deliver fast.
                </p>

                {/* ── Two-column grid ── */}
                <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:mt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-10">

                    {/* ── LEFT — Form ── */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name + Email side-by-side on md+ */}
                        <div className="grid gap-5 sm:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                disabled={busy}
                                className={`${inputBase} disabled:opacity-50`}
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                disabled={busy}
                                className={`${inputBase} disabled:opacity-50`}
                            />
                        </div>

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell me about what you're building…"
                            required
                            disabled={busy}
                            rows={7}
                            className={`${inputBase} resize-none disabled:opacity-50`}
                        />

                        {/* CTA button — glow wrapper gives the ambient halo */}
                        <div className="relative mt-1">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(59,130,246,0.45), transparent)' }}
                            />
                            <button
                                type="submit"
                                disabled={busy}
                                className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 py-4 text-base font-semibold tracking-wide text-white shadow-[0_4px_24px_rgba(59,130,246,0.35)] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:from-blue-500 hover:to-sky-400 hover:shadow-[0_8px_32px_rgba(59,130,246,0.55)] active:scale-[0.99] active:translate-y-0 active:shadow-[0_2px_12px_rgba(59,130,246,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {/* shimmer sweep */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-700 group-hover:translate-x-full"
                                />
                                {busy ? (
                                    <>
                                        <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending…
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </div>

                        {/* Feedback messages */}
                        {status === 'success' && (
                            <p className="flex items-center gap-2 text-sm font-medium text-sky-400">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15">
                                    <CheckIcon />
                                </span>
                                Message sent — I&apos;ll be in touch soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-sm font-medium text-red-400">
                                Something went wrong. Try emailing me directly below.
                            </p>
                        )}
                    </form>

                    {/* ── RIGHT — Trust + Connect ── */}
                    <div className="h-fit space-y-8">

                        {/* Why teams work with me */}
                        <div className="rounded-2xl border border-white/[0.06] bg-slate-900/40 p-5 backdrop-blur-sm">
                            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-400">
                                Why teams work with me
                            </h3>
                            <ul className="flex flex-col gap-5">
                                {trustPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 ring-1 ring-blue-500/25 shadow-[0_0_6px_rgba(59,130,246,0.25)]">
                                            <span className="text-blue-400"><CheckIcon /></span>
                                        </span>
                                        <span className="text-sm leading-relaxed text-slate-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Connect With Me */}
                        <div>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                                Connect With Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map(({ label, href, Icon, external, disabled }) => {
                                    if (disabled) {
                                        return (
                                            <span
                                                key={label}
                                                title={`${label} coming soon`}
                                                className="flex cursor-not-allowed select-none items-center gap-3 rounded-xl border border-white/5 bg-slate-900/30 px-4 py-3.5 opacity-30"
                                            >
                                                <span className="text-slate-600"><Icon /></span>
                                                <span className="text-sm text-slate-600">{label}</span>
                                            </span>
                                        );
                                    }
                                    return (
                                        <a
                                            key={label}
                                            href={href}
                                            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3.5 text-slate-300 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-blue-400/40 hover:bg-slate-900/70 hover:text-white hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] active:scale-[0.98]"
                                        >
                                            <span className="text-slate-400 transition-all duration-200 group-hover:scale-110 group-hover:text-blue-300">
                                                <Icon />
                                            </span>
                                            <span className="text-sm font-medium">{label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Contact;
