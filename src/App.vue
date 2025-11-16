<template>
  <div class="page">
    <!-- HEADER -->
    <header class="hero-strip" :style="{ backgroundImage: `url(${thiefGif})` }">
      <div class="hero-strip-overlay"></div>
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
        <!-- Space reserved for future changes -->
      </div>
    </header>

    <!-- SUMMARY -->
    <section class="section summary-section">
      <h3 class="section-title">About me</h3>
      <p class="summary-text">
        3D character animator with 3.5 years of experience creating expressive, game-ready performances for stylized and realistic characters,
        blending strong body mechanics with clear, competitive gameplay readability.
      </p>
    </section>

    <!-- EXPERIENCE – Argentics -->
    <section class="section experience-section">
      <h3 class="exp-title">Experience – Argentics</h3>

      <div class="experience-grid">
        <div class="experience-logos">
          <img :src="lastFlagLogo" alt="Last Flag logo" class="exp-logo" />
          <!-- second portrait removed here on purpose -->
        </div>

        <div class="experience-header-text">
          <h4 class="exp-role">3D Animator – Last Flag</h4>
          <div class="exp-meta">Supporting Last Flag · Jun 2024 – Present</div>
        </div>
      </div>

      <h4 class="project-title">Selected Project – Last Flag</h4>

      <ul class="exp-bullets">
        <template v-for="(item, index) in experienceItems" :key="index">
          <AccordionItem
            v-if="item.type === 'accordion'"
            :id="item.id"
            :title="item.title"
            :media-items="item.mediaItems"
          />
          <li v-else>{{ item.title }}</li>
        </template>
      </ul>
    </section>

    <!-- EXPERIENCE – OTHER PROJECTS -->
    <section class="section experience-section">
      <div class="experience-grid">
        <div class="experience-logos">
          <img :src="argenticsLogo" alt="Argentics logo" class="exp-logo" />
        </div>

        <div class="experience-header-text">
          <h4 class="exp-role">3D Animator – Other Projects</h4>
          <div class="exp-meta">Feb 2022 - present</div>
        </div>
      </div>

      <ul class="exp-bullets">
        <template v-for="(item, index) in otherProjectsItems" :key="index">
          <AccordionItem
            v-if="item.type === 'accordion'"
            :id="item.id"
            :title="item.title"
            :media-items="item.mediaItems"
          />
          <li v-else>{{ item.title }}</li>
        </template>
      </ul>
    </section>

    <!-- OTHER EXPERIENCE -->
    <section class="section other-experience-section">
      <h3 class="section-title">Other Experience & Skills</h3>

      <p><strong>2D Artist – Sweetcode</strong></p>
      <ul class="simple-list">
        <li>Designed and illustrated sticker packs for messaging apps, matching brand tone and composition requirements.</li>
      </ul>
    </section>
    
    <!-- CORE SKILLS -->
    <section class="section core-skills-section">
      <h3 class="section-title" style="margin-top:20px;">Core Skills</h3>
      <p class="inline-list">
        <span>Autodesk Maya</span>
        <span>Advanced Skeleton Rigging</span>
        <span>Keyframe Character Animation</span>
        <span>Body Mechanics &amp; Acting</span>
        <span>Shot-Based Animation Pipelines</span>
        <span>Traditional &amp; Digital Drawing</span>
        <span>Storytelling &amp; Visual Narrative</span>
        <span>Basic 3D modelling</span>
      </p>
    </section>

    <!-- EDUCATION & LANGUAGES -->
    <section class="section education-section">
      <h3 class="section-title" style="margin-top:20px;">Education & Languages</h3>
      <ul class="simple-list">
        <li>Lviv National Academy of Arts – Master of Ceramic Arts (2020–2022)</li>
        <li>Lviv College of Applied Arts n.a. I. Trush – Bachelor of Ceramic Arts (2014–2020)</li>
        <li>IT STEP Academy – Autodesk Maya, Character Animation Course (2017–2018)</li>
        <li>Languages: Ukrainian (Native), English (Upper-intermediate)</li>
      </ul>
    </section>

    <!-- SHOWREEL -->
    <section class="section showreel-section" id="showreel">
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
import { ref, computed, onMounted, watch } from 'vue'
import AccordionItem from './components/AccordionItem.vue'

// Images are in public folder, referenced from root
const portraitImage = '/Screenshot 2025-11-14 200048.png'
const lastFlagLogo = '/LastFlag_Color.png'
const argenticsLogo = '/Argentics_logo.jpg'
const thiefGif = '/Thief_Intro-600.gif'

// Один масив для всього списку досвіду
const experienceItems = [
  {
    type: 'simple',
    title: 'Rigged and skinned stylized heroes and enemies for gameplay-ready use and produced core gameplay animations (movement, traversal, combat, interactions), aligning performances with Last Flag\'s visual direction and game design goals.'
  },
  {
    id: 'keyframe-animation',
    type: 'accordion',
    title: 'Keyframe animation for gameplay-ready characters across movement, combat, reactions, and interaction cycles, with a focus on readability and strong poses at gameplay distances.',
    mediaItems: [] // Місце для майбутніх GIF
  },
  {
    id: 'rigging-skinning',
    type: 'accordion',
    title: 'Rigging and skinning biped and quadruped models using Advanced Skeleton, including weight cleanup and deformation fixes (rigging breakdown).',
    mediaItems: [] // Місце для майбутніх GIF
  },
  {
    type: 'simple',
    title: 'Collaborates with rigging, modeling, VFX, and lighting teams in a shot-based Maya pipeline to keep scenes clean, organized, and production-ready.'
  },
  {
    type: 'simple',
    title: 'Creates gameplay-focused animation variations tuned for snappiness, responsiveness, and competitive clarity in combat encounters.'
  },
  {
    type: 'simple',
    title: 'Comfortable working with modern game-engine pipelines (Unreal-style blend spaces, montages, and animation graphs) and assisting with in-engine timing checks and root-motion validation.'
  },
  {
    type: 'simple',
    title: 'Supports internal animation reviews by preparing clear thumbnails, notes, and quick iterations on feedback from the Lead Animator and Art Director.'
  }
]

// Масив для секції Other Projects
const otherProjectsItems = [
  {
    id: 'locomotion-combat',
    type: 'accordion',
    title: 'Animating full sets of locomotion and combat motions',
    mediaItems: [
      { type: 'video', src: '/Boar_Fly.mp4', alt: 'Boar Fly animation' },
      { type: 'video', src: '/Boar_idle.mp4', alt: 'Boar Idle animation' }
    ]
  },
  {
    id: 'rigging-skinning-other',
    type: 'accordion',
    title: 'Skillfully rigging and skinning biped and quadripped models',
    mediaItems: [] // Місце для майбутніх GIF
  },
  {
    type: 'simple',
    title: 'Worked closely with an engineering team to get the full character and animations exported and imported into Unity.'
  },
  {
    type: 'simple',
    title: 'Collaborated with the Art Director and team to align character performance with the project\'s visual and gameplay goals.'
  }
]
</script>

<style scoped>
/* Define color and font variables for easy customization */
:global(:root) {
  --font-primary: 'Helvetica Neue', Arial, sans-serif;
  --font-secondary: 'Georgia', serif;

  /* Gradients */
  --g-hero: linear-gradient(135deg, #222945 0%, #56708b 45%, #e66152 100%);
  --g-summary: linear-gradient(135deg, #679595 0%, #95b08d 45%, #dfa07d 100%);

  /* Shared */
  --shadow-color: rgba(0, 0, 0, 0.7);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-primary);
}

body {
  background-color: #263650; /* Base background */
  color: #f7f28a; /* Base text color */
}

.page {
  max-width: 1100px;
  margin: 0 auto 40px;
}

/* ---------------- HEADER ---------------- */

.hero-strip {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 28px;
  min-height: 180px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero-strip-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--g-hero);
  z-index: 1;
}

.hero-left {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f7f28a;
  box-shadow: 0 8px 24px var(--shadow-color);
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f7f28a;
}

.hero-text h2 {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #fbffff;
  margin-top: 4px;
}

.hero-meta {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #f7f28a;
}

.hero-links {
  margin-top: 12px;
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
}
.hero-links a {
  color: #f7f28a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}
.hero-links a:hover {
  color: #fbffff;
  text-decoration: underline;
}

/* --------------- SECTIONS --------------- */

.section {
  padding: 32px 28px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  display: inline-block;
}

.section p {
  margin: 0 0 12px;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
}

ul.simple-list {
  margin: 12px 0 0 20px;
  padding: 0;
  font-size: 1rem;
  line-height: 1.6;
}
ul.simple-list li {
  margin-bottom: 6px;
}


/* --- Summary Section --- */
.summary-section {
  background: var(--g-summary);
}
.summary-section .section-title,
.summary-section p {
  color: #f5f9ff;
}
.summary-section .section-title {
  border-bottom-color: #b8cee6;
}
.summary-text {
  max-width: 700px;
  font-size: 1.1rem;
  font-family: var(--font-secondary);
}


/* --- Experience Sections (ACCENT) --- */
.experience-section {
  background-color: #642226;
  color: #d8ba94;
}
.experience-section .exp-title,
.experience-section .exp-role,
.experience-section .project-title,
.experience-section .exp-bullets {
  color: #d8ba94;
}
.experience-section .exp-title {
  border-bottom-color: #d8ba94;
}
.experience-section .exp-meta {
  color: #fff9f8;
}

.experience-grid {
  display: grid;
  grid-template-columns: 80px auto;
  gap: 20px;
  align-items: start;
  margin-bottom: 20px;
}

.exp-logo {
  width: 70px;
  height: auto;
  border-radius: 8px;
}

.exp-role {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.exp-meta {
  margin-top: 4px;
  font-size: 0.95rem;
}

.project-title {
  font-size: 1.1rem;
  margin-top: 16px;
  margin-bottom: 12px;
  font-weight: 700;
}

.exp-bullets {
  margin: 0 0 0 24px;
  padding: 0;
  max-width: 800px;
  font-size: 1rem;
  line-height: 1.6;
}
.exp-bullets li {
  margin-bottom: 10px;
}
.exp-bullets :deep(.accordion-header) { color: #d8ba94; }
.exp-bullets :deep(.accordion-icon) { color: #d8ba94; }
.exp-bullets :deep(.accordion-header:hover) {
  background-color: rgba(255, 249, 248, 0.05);
  border-color: rgba(216, 186, 148, 0.3);
}


/* --- Other Experience (Light) --- */
.other-experience-section {
  background-color: #d6b896;
  color: #664534;
}
.other-experience-section .section-title,
.other-experience-section p,
.other-experience-section ul {
  color: #664534;
}
.other-experience-section .section-title {
  border-bottom-color: #69583a;
}

/* --- Core Skills & Education --- */
.core-skills-section,
.education-section {
  background-color: #714e3a;
  color: #d6b896;
}
.core-skills-section .section-title,
.core-skills-section .inline-list span,
.education-section .section-title,
.education-section ul {
  color: #d6b896;
}
.core-skills-section .section-title,
.education-section .section-title {
  border-bottom-color: #fffff1;
}
.inline-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}
.inline-list span {
  background-color: rgba(0,0,0,0.1);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid rgba(255,255,241, 0.2);
}

/* --- Showreel Section --- */
.showreel-section {
  background-color: #263650;
  color: #f7f28a;
}
.showreel-section .section-title {
  color: #f7f28a;
  border-bottom-color: #fbffff;
}
.showreel-section .showreel-card p {
  color: #f7f28a;
}
.showreel-section .showreel-title {
  color: #fbffff;
}

.showreel-card {
  max-width: 800px;
  border-radius: 12px;
  padding: 24px;
  background-color: #222945;
  border: 1px solid #56708b;
  box-shadow: 0 16px 40px var(--shadow-color);
}

.showreel-title {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 12px;
}

.showreel-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  border: none;
  border-radius: 10px;
  margin-top: 12px;
}

@media (max-width: 800px) {
  .hero-strip {
    flex-direction: column;
    text-align: center;
    padding: 20px 14px;
    gap: 16px;
    min-height: auto;
  }
  .hero-photo { width: 120px; height: 120px; }
  .hero-links { justify-content: center; }
  .experience-grid { grid-template-columns: 1fr; gap: 12px; }
  .exp-logo { margin: 0 auto; }
  .experience-header-text { text-align: center; }
  .section { padding: 24px 14px; }
}
</style>

