import React from 'react';
import '../ProjectDetail.css';

const layers = [
    { name: 'Strategy Layer', desc: 'Long-term goals, prioritization, and task inventory' },
    { name: 'Execution Layer', desc: 'Daily planning, focus execution, and commitment tracking' },
    { name: 'Verification Layer', desc: 'Real-time session logging and behavioral telemetry' },
    { name: 'Intelligence Layer', desc: 'AI-powered analysis, planning, and behavioral insights' },
];

const LifeOSDetail = () => (
    <article>
        <header className="detail-header">
            <p className="label detail-category">Behavioral UX · AI Systems · Full-Stack</p>
            <h1 className="detail-title">LifeOS — Behavioral Productivity & Execution Operating System</h1>
            <p className="detail-summary">
                A behavioral productivity platform designed to bridge the gap between planning and real-world execution.
                Instead of functioning as a traditional task manager, LifeOS acts as an operational layer combining
                goal management, execution tracking, AI-assisted reflection, and behavioral analytics.
            </p>
        </header>

        <div className="detail-meta-row">
            <div className="detail-meta-item">
                <span className="label">Stack</span>
                <span className="detail-meta-value">Next.js · Drizzle ORM · Neon Postgres · Clerk · Groq AI</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Role</span>
                <span className="detail-meta-value">Solo — Architecture, Design, Engineering</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Focus</span>
                <span className="detail-meta-value">Behavioral Architecture · AI Workflows · Product Design</span>
            </div>
        </div>

        <div className="detail-body">

            <section className="detail-section">
                <h2 className="detail-section-title">The Problem</h2>
                <p>Most productivity systems fail not because they lack features — they fail because they ignore behavior. Users over-plan, under-execute, and receive no visibility into why.</p>
                <p>Goals stay disconnected from daily actions. Behavioral patterns remain invisible. Traditional task managers ignore emotional states like burnout, overwhelm, and avoidance.</p>
                <div className="detail-highlight-box">
                    <p>The insight: productivity is a behavioral problem, not an organizational one. A system that helps people understand their own execution patterns is fundamentally more valuable than one that helps them add more tasks.</p>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">System Architecture</h2>
                <p>The platform is structured into four interconnected layers, each serving a distinct purpose in the behavioral workflow:</p>
                <div className="detail-layers-grid">
                    {layers.map((l, i) => (
                        <div key={i} className="detail-layer-card">
                            <p className="detail-layer-name">{l.name}</p>
                            <p className="detail-layer-desc">{l.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Key Engineering Decisions</h2>
                <ul>
                    <li><strong>Drizzle ORM over Prisma</strong> — chosen for lightweight runtime, excellent TypeScript inference, and direct SQL access when needed for complex behavioral queries.</li>
                    <li><strong>Server Components + Server Actions</strong> — used Next.js App Router with Server Actions for mutations to eliminate unnecessary API routes and reduce client-server roundtrips.</li>
                    <li><strong>Real-time session tracking without WebSockets</strong> — implemented optimistic UI updates with polling intervals, keeping the architecture simple while maintaining a live feel.</li>
                    <li><strong>AI context generation</strong> — the AI Bodyguard is fed structured behavioral context (recent sessions, friction logs, goal states) rather than raw chat history for more grounded, actionable responses.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Design Decisions & Tradeoffs</h2>
                <ul>
                    <li><strong>Constraint over feature richness</strong> — the system limits how many priorities a user can commit to per day. This was a deliberate design choice to enforce execution integrity over false productivity.</li>
                    <li><strong>Recovery-oriented UX</strong> — the interface is designed to make re-engagement frictionless. Failed days are not punished; the system helps users return to execution without shame.</li>
                    <li><strong>Behavioral verification, not time tracking</strong> — rather than tracking clock time, LifeOS tracks commitment states and session intent, which proved more meaningful for behavioral analytics.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Challenges & Iterations</h2>
                <p>The hardest challenge was preventing the system from becoming another source of cognitive overload — the very problem it was designed to solve. Early versions had too many views, too many data points, and too many configuration options.</p>
                <p>Multiple iterations were required to simplify the daily execution view into a single, focused commitment stack. The architectural insight that helped most: <em>design for the worst day, not the best day.</em></p>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Outcome</h2>
                <p>LifeOS evolved into a comprehensive execution coordination system that demonstrates strong focus on product systems design, behavioral UX, AI-assisted workflows, and full-stack application architecture.</p>
                <p>The project is actively used as a personal operational system and continues to be iterated based on real behavioral data.</p>
            </section>

            <div className="detail-links">
                <a href="https://github.com/Praanshuu" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            </div>
        </div>
    </article>
);

export default LifeOSDetail;
