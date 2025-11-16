<template>
  <div class="page">
    <!-- HEADER -->
    <header class="hero-strip">
      <div class="hero-left">
        <!-- Use the new portrait image here -->
        <img :src="portraitImage" alt="Khrystyna Orobets portrait" class="hero-photo" />
        <div class="hero-text">
          <h1>Khrystyna Orobets</h1>
          <h2>3D Character Animator</h2>
          <div class="hero-meta">
            Lviv, Ukraine · Open to remote work
          </div>
          <div class="hero-links">
            <a href="mailto:kristokrol@gmail.com">Email</a>
            <a href="https://linkedin.com/in/khrystyna-orobets" target="_blank">LinkedIn</a>
            <a href="https://www.behance.net/kristokrol" target="_blank">Portfolio</a>
            <a href="#showreel">Showreel</a>
          </div>
        </div>
      </div>
      <div class="hero-gif-wrap">
        <!-- Hidden for future changes -->
        <!-- <img :src="thiefGif" alt="Gameplay animation gif" class="hero-gif" /> -->
      </div>
    </header>

    <!-- SUMMARY -->
    <section class="section summary">
      <h3 class="section-title">Animation Summary</h3>
      <p class="summary-text">
        3D character animator with 3.5 years of experience creating expressive, game-ready performances for stylized and realistic characters,
        blending strong body mechanics with clear, competitive gameplay readability.
      </p>
    </section>

    <!-- EXPERIENCE – LAST FLAG -->
    <section class="section experience">
      <h3 class="exp-title">Experience – Last Flag</h3>

      <div class="experience-grid">
        <div class="experience-logos">
          <img :src="lastFlagLogo" alt="Last Flag logo" class="exp-logo" />
          <!-- second portrait removed here on purpose -->
        </div>

        <div class="experience-header-text">
          <h4 class="exp-role">3D Animator – Argentics</h4>
          <div class="exp-meta">Supporting Last Flag · Jun 2024 – Present</div>
        </div>
      </div>

      <h4 class="project-title">Selected Project – Last Flag</h4>
      <p class="project-desc">
        Rigged and skinned stylized heroes and enemies for gameplay-ready use and produced core gameplay animations (movement,
        traversal, combat, interactions), aligning performances with Last Flag's visual direction and game design goals.
      </p>

      <ul class="exp-bullets">
        <li>Keyframe animation for gameplay-ready characters across movement, combat, reactions, and interaction cycles, with a focus on readability and strong poses at gameplay distances.</li>
        <li>Rigging and skinning biped and quadruped models using Advanced Skeleton, including weight cleanup and deformation fixes (rigging breakdown).</li>
        <li>Collaborates with rigging, modeling, VFX, and lighting teams in a shot-based Maya pipeline to keep scenes clean, organized, and production-ready.</li>
        <li>Creates gameplay-focused animation variations tuned for snappiness, responsiveness, and competitive clarity in combat encounters.</li>
        <li>Comfortable working with modern game-engine pipelines (Unreal-style blend spaces, montages, and animation graphs) and assisting with in-engine timing checks and root-motion validation.</li>
        <li>Supports internal animation reviews by preparing clear thumbnails, notes, and quick iterations on feedback from the Lead Animator and Art Director.</li>
      </ul>
    </section>

    <!-- OTHER EXPERIENCE & SKILLS -->
    <section class="section other">
      <h3 class="section-title">Other Experience & Skills</h3>

      <p><strong>2D Artist – Sweetcode</strong></p>
      <ul class="simple-list">
        <li>Designed and illustrated sticker packs for messaging apps, matching brand tone and composition requirements.</li>
      </ul>

      <h3 class="section-title" style="margin-top:20px;">Core Skills</h3>
      <p class="inline-list">
        <span>Autodesk Maya</span>
        <span>Advanced Skeleton Rigging</span>
        <span>Keyframe Character Animation</span>
        <span>Body Mechanics &amp; Acting</span>
        <span>Shot-Based Animation Pipelines</span>
        <span>Traditional &amp; Digital Drawing</span>
        <span>Storytelling &amp; Visual Narrative</span>
      </p>

      <h3 class="section-title" style="margin-top:20px;">Education & Languages</h3>
      <ul class="simple-list">
        <li>Lviv National Academy of Arts – Master of Ceramic Arts (2020–2022)</li>
        <li>Lviv College of Applied Arts n.a. I. Trush – Bachelor of Ceramic Arts (2014–2020)</li>
        <li>IT STEP Academy – Autodesk Maya, Character Animation Course (2017–2018)</li>
        <li>Languages: Ukrainian (Native), English (Upper-intermediate)</li>
      </ul>
    </section>

    <!-- SHOWREEL -->
    <section class="section showreel" id="showreel">
      <h3 class="section-title">Showreel</h3>
      <div class="showreel-card">
        <div class="showreel-title">Full Animation Reel</div>
        <p>
          Embedded reel with gameplay and cinematic work across Last Flag and other projects.
        </p>
        <iframe
          class="showreel-frame"
          src="https://www.youtube.com/embed/WNk3lURMlwM?autoplay=1&mute=1&rel=0"
          title="Khrystyna Orobets – Animation Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
// Images are in public folder, referenced from root
const portraitImage = '/Screenshot 2025-11-14 200048.png'
const lastFlagLogo = '/LastFlag_Color.png'
// const thiefGif = '/Thief_Intro-600.gif'
</script>

<style scoped>
:root {
  --red:   #8c2c24;
  --green: #2e6b5a;
  --black: #1b1b1f;
  --cream: #f7e4c7;
  --bg:    #050816;
  --text-main:  #f9fafb;
  --text-muted: #d1d5db;
  --accent:     #facc6b;
}

* { box-sizing: border-box; }

.page {
  max-width: 1100px;
  margin: 0 auto 40px;
}

/* ---------------- HEADER ---------------- */

.hero-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 28px;
  background: linear-gradient(135deg, #b96532 0, #8c2c24 45%, #2b5b66 100%);
}

.hero-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.hero-photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--cream);
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

.hero-text h1 {
  margin: 0 0 2px;
  font-size: 1.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cream);
}

.hero-text h2 {
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #ffe2b0;
}

.hero-meta {
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--cream);
}

.hero-links {
  margin-top: 4px;
  font-size: 0.8rem;
}
.hero-links a { margin-right: 10px; }

.hero-gif-wrap {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;
}

.hero-gif {
  width: 120px;
  height: 120px;
  object-fit: contain;
  transform: scale(2.0); /* zoomed in */
  transform-origin: center;
  pointer-events: none;
}

/* --------------- SECTIONS --------------- */

.section {
  padding: 24px 28px;
}
.section.summary   { background: linear-gradient(135deg, #d87a37 0, #8c2c24 40%, #4a3221 100%); }
.section.experience{ background: var(--green); }
.section.other     { background: var(--black); }
.section.showreel  { background: #111827; }

.section-title {
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--cream);
  margin: 0 0 10px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.section p {
  margin: 0 0 8px;
  font-size: 0.95rem;
  color: var(--text-main);
  max-width: 900px;
}

.summary-text {
  max-width: 650px;
  font-size: 0.98rem;
}

/* ---------- EXPERIENCE – LAST FLAG ---------- */

.exp-title {
  font-size: 1.05rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--cream);
  margin-bottom: 10px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.experience-grid {
  display: grid;
  grid-template-columns: 70px auto;
  gap: 16px;
  align-items: start;
  margin-bottom: 12px;
}

.experience-logos {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-logo {
  width: 60px;
  height: auto;
}

.experience-header-text {
  padding-top: 2px;
}

.exp-role {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--cream);
}

.exp-meta {
  margin-top: 2px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.project-title {
  font-size: 1rem;
  margin-top: 4px;
  margin-bottom: 6px;
  color: var(--cream);
  font-weight: 700;
}

.project-desc {
  margin-bottom: 10px;
}

.exp-bullets {
  margin: 0;
  padding-left: 22px;
  max-width: 900px;
  font-size: 0.95rem;
}

.exp-bullets li {
  margin-bottom: 6px;
  line-height: 1.45;
}

/* ------------- OTHER EXPERIENCE & SKILLS ------------- */

.inline-list span {
  margin-right: 10px;
  font-size: 0.9rem;
  color: var(--cream);
}

ul.simple-list {
  margin: 4px 0 0 0;
  padding-left: 16px;
  font-size: 0.95rem;
}
ul.simple-list li {
  margin-bottom: 4px;
}

/* ------------------ SHOWREEL ------------------ */

.showreel-card {
  max-width: 720px;
  border-radius: 12px;
  padding: 16px 18px;
  background: radial-gradient(circle at top left, #f97316 0, #b91c1c 40%, #111827 100%);
  box-shadow: 0 12px 32px rgba(0,0,0,0.7);
}

.showreel-title {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--cream);
  margin: 0 0 8px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.showreel-frame {
  width: 100%;
  max-width: 100%;
  height: 360px;
  border: none;
  border-radius: 10px;
  margin-top: 8px;
}

@media (max-width: 800px) {
  .hero-strip { padding: 10px 14px; }
  .hero-photo { width: 110px; height: 110px; }
  .hero-gif-wrap { width: 90px; height: 90px; }
  .experience-grid { grid-template-columns: 1fr; }
  .showreel-frame { height: 220px; }
}
</style>

