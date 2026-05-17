import React from 'react';
import '../ProjectDetail.css';

const AIAssemblyDetail = () => (
    <article>
        <header className="detail-header">
            <p className="label detail-category">AI Systems · Semantic Search · Component Architecture</p>
            <h1 className="detail-title">AI Website Assembly — Semantic Component Builder</h1>
            <p className="detail-summary">
                An AI-assisted website generation system that automates webpage creation using semantic similarity
                techniques and modular UI assembly. The system accepts intent-based inputs, retrieves semantically
                relevant UI components via vector embeddings, and assembles responsive layouts through a custom
                assembly engine.
            </p>
        </header>

        <div className="detail-meta-row">
            <div className="detail-meta-item">
                <span className="label">Stack</span>
                <span className="detail-meta-value">React · Node.js · PostgreSQL · pgvector · Sentence Transformers</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Role</span>
                <span className="detail-meta-value">Solo — Architecture, ML Pipeline, Engineering</span>
            </div>
            <div className="detail-meta-item">
                <span className="label">Focus</span>
                <span className="detail-meta-value">Semantic Search · Vector Databases · AI Orchestration</span>
            </div>
        </div>

        <div className="detail-body">

            <section className="detail-section">
                <h2 className="detail-section-title">The Problem</h2>
                <p>Website creation remains slow, template-dependent, and divorced from user intent. Most tools offer either rigid templates or expensive generative AI that produces inconsistent results.</p>
                <div className="detail-highlight-box">
                    <p>The core insight: if UI components are embedded into a semantic vector space, it becomes possible to retrieve them based on <em>meaning</em> rather than keywords — assembling entire pages from intent descriptions rather than manual selection.</p>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">System Architecture</h2>
                <p>The pipeline operates in three distinct phases:</p>
                <div className="detail-layers-grid">
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Intent Processing</p>
                        <p className="detail-layer-desc">User inputs (business type, target audience, purpose) are processed and embedded using Sentence Transformers into dense vector representations.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Semantic Retrieval</p>
                        <p className="detail-layer-desc">pgvector similarity search retrieves the most semantically relevant components from the pre-embedded component database in Postgres/Supabase.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Assembly Engine</p>
                        <p className="detail-layer-desc">A custom layout engine orders retrieved components, handles style harmonization, and assembles them into a responsive, coherent webpage structure.</p>
                    </div>
                    <div className="detail-layer-card">
                        <p className="detail-layer-name">Live Preview & Export</p>
                        <p className="detail-layer-desc">The assembled layout is rendered in a live preview system with exportable, clean frontend code that can be deployed immediately.</p>
                    </div>
                </div>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Key Engineering Decisions</h2>
                <ul>
                    <li><strong>pgvector over a dedicated vector database</strong> — embedding vectors directly in PostgreSQL kept the architecture simple. For the scale of this project, a dedicated vector DB like Pinecone would have added unnecessary operational complexity.</li>
                    <li><strong>Sentence Transformers over OpenAI embeddings</strong> — using open-source Sentence Transformers eliminated API costs and allowed the embedding pipeline to run locally during development and batch component ingestion.</li>
                    <li><strong>Component metadata schema design</strong> — the hardest architectural decision was designing the component metadata schema. Components needed rich semantic descriptors (tone, purpose, audience, visual weight) to enable meaningful similarity matching.</li>
                    <li><strong>Assembly ordering heuristics</strong> — rather than letting the AI decide layout order, I implemented deterministic heuristics (hero → features → social proof → CTA) that could be overridden by semantic weight scores.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Challenges & Tradeoffs</h2>
                <p>The most difficult challenge was making semantic retrieval produce <em>coherent</em> layouts rather than semantically similar but visually mismatched components. Two components can both be "modern SaaS" but clash visually.</p>
                <p>The solution was a secondary compatibility scoring step that evaluated retrieved components against each other on visual properties (color temperature, density, spacing) before final assembly.</p>
                <ul>
                    <li>Early iterations produced visually incoherent pages despite semantically correct component selection.</li>
                    <li>Style harmonization required building a simple CSS variable normalization layer across all components.</li>
                    <li>The live preview system had performance constraints when rendering large component trees — solved by component virtualization.</li>
                </ul>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">What I Would Do Differently</h2>
                <p>The component metadata schema was defined manually, which doesn't scale. A better approach would use an automated embedding pipeline that derives semantic descriptors from component code, visual screenshots, and usage context together.</p>
                <p>Additionally, the assembly engine would benefit from an LLM-powered reasoning step that evaluates full page coherence rather than relying entirely on pairwise compatibility scoring.</p>
            </section>

            <section className="detail-section">
                <h2 className="detail-section-title">Outcome</h2>
                <p>The project demonstrates the practical application of AI, semantic search, vector databases, and modular component architecture in an intelligent web development workflow. It provided strong foundations in machine learning pipeline design, vector database operations, and AI-assisted system orchestration.</p>
            </section>

            <div className="detail-links">
                <a href="https://github.com/Praanshuu" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            </div>
        </div>
    </article>
);

export default AIAssemblyDetail;
