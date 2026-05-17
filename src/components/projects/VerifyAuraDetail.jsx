import React from 'react';
import '../ProjectDetail.css';

const VerifyAuraDetail = () => (
    <article>
        <header className="detail-header">
            <p className="label detail-category">Verification Platform · RBAC · Backend Architecture</p>
            <h1 className="detail-title">Verify Aura — Certificate Verification & Event Management System</h1>
            <p className="detail-summary">
                A scalable certificate issuance and verification platform designed for educational institutions and event
                organizers. Features role-based access control, admin dashboards, analytics, and instant public
                certificate validation via unique IDs — enabling sub-2-second verification at scale.
            </p>
        </header>

        <div className="detail-meta-row">
            <div className="detail-meta-item">
                <span className="label">Stack</span>
                <span className="detail-meta-value">React · Node.js · Express · PostgreSQL · Tailwind CSS</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Scale</span>
                <span className="detail-meta-value">250+ Participants · Multiple Events</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Focus</span>
                <span className="detail-meta-value">RBAC · REST APIs · Verification Systems · Admin UX</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Live</span>
                <span className="detail-meta-value">verify-aura-frontend.vercel.app</span>
            </div>
        </div>

        <div className="detail-body">

            <section className="detail-section">
                <h2 className="detail-section-title">The Problem</h2>
                <p>Certificate fraud is a persistent problem in academic and professional events. Manually verifying paper-based certificates is slow, error-prone, and doesn't scale across large events or multiple organizer teams.</p>
                <div className="detail-highlight-box">
                    <p>The core requirement: a system where administrators can issue and revoke certificates, participants can access their credentials, and anyone can publicly verify authenticity in under 2 seconds — without needing an account.</p>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">System Architecture</h2>
                <div className="detail-layers-grid">
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">RBAC Layer</p>
                        <p className="detail-layer-desc">Three-tier role system: Super Admin → Event Admin → Participant. Each role has strictly scoped API access enforced at the middleware level.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Certificate Engine</p>
                        <p className="detail-layer-desc">Certificates are generated with a UUID-based unique ID, stored in PostgreSQL, and linked to participant records and event metadata.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Public Verification API</p>
                        <p className="detail-layer-desc">An unauthenticated endpoint accepts a certificate ID and returns full verification status, participant name, event details, and issuance/expiry dates — publicly accessible without login.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Admin Dashboard</p>
                        <p className="detail-layer-desc">A React admin interface provides bulk certificate issuance, participant management, revocation controls, event creation, and analytics with filtering and pagination.</p>
                    </div>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Key Engineering Decisions</h2>
                <ul>
                    <li><strong>UUID v4 for certificate IDs over sequential IDs</strong> — prevents enumeration attacks where a bad actor could guess valid certificate IDs and bulk-query the verification endpoint.</li>
                    <li><strong>Middleware-level RBAC enforcement</strong> — role checks are applied at the Express middleware layer, not inside individual route handlers. This prevents accidental permission leaks as new routes are added.</li>
                    <li><strong>Optimistic UI for admin bulk operations</strong> — issuing certificates to 50+ participants at once required careful UX decisions. Optimistic updates with background error reconciliation kept the admin experience fast without sacrificing correctness.</li>
                    <li><strong>Indexed certificate ID lookups</strong> — the verification endpoint query path is indexed on certificate UUID, achieving consistent sub-2-second response even as the certificate table grows.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Challenges & Tradeoffs</h2>
                <ul>
                    <li><strong>Revocation UX</strong> — revoking certificates needed careful thought. A hard delete would break existing verification links. Instead, certificates use a status field (active / revoked / expired) that the public API reflects, preserving the URL while accurately communicating status.</li>
                    <li><strong>Pagination at scale</strong> — early implementations loaded all participant records for an event into the frontend. With 250+ participants this became slow. Switched to server-side cursor-based pagination.</li>
                    <li><strong>Cross-event admin scope</strong> — event admins should only manage their own events, not others. Implementing scoped admin access required careful query-level filtering in addition to middleware checks to prevent data leakage between event teams.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">What I Would Do Differently</h2>
                <p>The current architecture stores all certificate data in a single PostgreSQL instance. For a production deployment serving multiple institutions, I would move toward a multi-tenant schema with event-level data isolation, and add a webhook system so event organizers can receive verification notifications in real-time.</p>
                <p>I would also add PDF certificate generation (via Puppeteer or a similar tool) so participants can download a formatted certificate that embeds the verification URL as a QR code.</p>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Outcome</h2>
                <p>The system successfully managed 250+ participants across multiple live events, with zero reported verification failures. Admin teams reported significantly reduced manual verification overhead. The project demonstrated strong backend architecture thinking, API design, and role-scoped access control in a real production context.</p>
            </section>

            <div className="detail-links">
                <a href="https://verify-aura-frontend.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Live Project ↗</a>
                <a href="https://github.com/Praanshuu/verifyAura" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            </div>
        </div>
    </article>
);

export default VerifyAuraDetail;
