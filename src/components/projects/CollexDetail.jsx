import React from 'react';
import '../ProjectDetail.css';

const CollexDetail = () => (
    <article>
        <header className="detail-header">
            <p className="label detail-category">Product Engineering · Realtime Systems · Campus Platform</p>
            <h1 className="detail-title">Collex — Campus Marketplace & Roommate Discovery Platform</h1>
            <p className="detail-summary">
                A campus-focused platform designed for verified student interactions. Collex enables marketplace
                listings, roommate discovery, real-time communication, and OCR-based identity verification — creating
                a trusted, closed-loop ecosystem for student commerce and housing.
            </p>
        </header>

        <div className="detail-meta-row">
            <div className="detail-meta-item">
                <span className="label">Stack</span>
                <span className="detail-meta-value">Next.js · PostgreSQL (Neon) · Clerk Auth · Tailwind · Shadcn UI</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Key Tech</span>
                <span className="detail-meta-value">OCR · Realtime · Subscription Workflows</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Focus</span>
                <span className="detail-meta-value">Authentication · Database Design · Product Workflows · UX</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Live</span>
                <span className="detail-meta-value">collex-ubej.vercel.app</span>
            </div>
        </div>

        <div className="detail-body">

            <section className="detail-section">
                <h2 className="detail-section-title">The Problem</h2>
                <p>Campus commerce and student housing discovery are fragmented — scattered across WhatsApp groups, notice boards, and unofficial Facebook groups. There's no trusted, verified channel for students to buy, sell, or find compatible roommates.</p>
                <div className="detail-highlight-box">
                    <p>The core product challenge: how do you build trust in a peer-to-peer marketplace where you can't verify identity through traditional means? The answer was OCR-based student ID verification — matching roll numbers from uploaded ID card images before granting access to verified features.</p>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">System Architecture</h2>
                <div className="detail-layers-grid">
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Identity & Auth Layer</p>
                        <p className="detail-layer-desc">Clerk handles core authentication. A secondary verification layer adds OCR-based student ID matching, with verification status stored in Neon Postgres and checked at protected route entry points.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Marketplace Engine</p>
                        <p className="detail-layer-desc">Listings with category filtering, image uploads, and a subscription gating system that restricts certain listing types to verified users only.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Roommate Matching</p>
                        <p className="detail-layer-desc">Preference-based matching using structured form data. Users define preferences (location, schedule, lifestyle) and the system surfaces compatible profiles through filtered database queries rather than ML.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Realtime Communication</p>
                        <p className="detail-layer-desc">Real-time chat built with message persistence in Postgres. Notifications for new messages and listing activity are delivered via a polling-based system with optimistic updates on the frontend.</p>
                    </div>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Key Engineering Decisions</h2>
                <ul>
                    <li><strong>Client-side OCR with Tesseract.js</strong> — running OCR on the client avoids sending raw ID card images to the server, reducing privacy risk. The extracted text (roll number) is then validated server-side against enrollment records.</li>
                    <li><strong>Subscription gating over open access</strong> — a tiered subscription model restricts premium listing types to verified, subscribed users. This creates a natural incentive for identity verification while generating a potential revenue path.</li>
                    <li><strong>Next.js App Router with Server Components</strong> — used for listing pages and user profiles to get SSR benefits for SEO and initial load performance. Interactive features (chat, filters) use client components selectively.</li>
                    <li><strong>Neon Postgres over Supabase</strong> — Neon's branching feature was useful during development for testing schema migrations without affecting the production database.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Challenges & Tradeoffs</h2>
                <ul>
                    <li><strong>OCR accuracy on low-quality phone photos</strong> — ID cards photographed in poor lighting produced inconsistent OCR results. Addressed with image preprocessing (contrast boost, grayscale) before passing to Tesseract, and a manual review fallback for failed automatic verification.</li>
                    <li><strong>Chat performance at scale</strong> — polling-based realtime works well for small user counts but would not scale to hundreds of concurrent chat sessions. The current implementation is a deliberate scope decision; a production system would use WebSockets or a realtime database.</li>
                    <li><strong>Preventing listing spam without friction</strong> — rate limiting on listing creation had to be carefully tuned. Too aggressive and legitimate sellers are blocked; too lenient and the marketplace fills with spam. Settled on a per-day limit that resets at midnight with a verified-user override.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Product Decisions Worth Highlighting</h2>
                <p>The roommate matching system was intentionally kept simple. An early version explored a scoring algorithm, but user testing revealed that students preferred browsing profiles manually after a basic filter — they wanted to read about a person, not just see a compatibility score.</p>
                <p>This was a lesson in resisting over-engineering: the right solution was a well-designed filter UI, not a matching algorithm.</p>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Outcome</h2>
                <p>Collex is live and functional, demonstrating product thinking around trust, verification, and campus-specific workflows. The project shows strong full-stack engineering with Clerk, Neon Postgres, and Next.js, alongside product sensitivity around user trust and marketplace dynamics.</p>
            </section>

            <div className="detail-links">
                <a href="https://collex-ubej.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Live Project ↗</a>
                <a href="https://github.com/Praanshuu/COLLEX" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            </div>
        </div>
    </article>
);

export default CollexDetail;
