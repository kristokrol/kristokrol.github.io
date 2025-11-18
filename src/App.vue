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
              <a href="https://kristokrol.github.io/" target="_blank">Website</a>
              <a href="#showreel">Showreel</a>
              <a href="#" id="save-pdf">CV</a>
            </div>
        </div>
      </div>
      <!-- <div class="hero-gif-wrap">
        <img :src="thiefGif" alt="Character animation gif" class="hero-gif" />
      </div> -->
    </header>

    <!-- SUMMARY -->
    <section class="section summary-section" ref="summarySection">
      <h3 class="section-title">About me</h3>
      <p class="summary-text">
        3D character animator with 3.5 years of experience creating expressive, game-ready performances for stylized and realistic characters,
        blending strong body mechanics with clear, competitive gameplay readability.
      </p>
    </section>

    <!-- EXPERIENCE – Argentics -->
    <section class="section experience-section" ref="experienceArgenticsSection">
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

      <h4 class="project-title">Selected Project – <a href="https://youtu.be/K72rsqTfzTo" target="_blank" rel="noopener noreferrer">Last Flag</a></h4>

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
    <section class="section experience-section" ref="experienceOtherSection">
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
    <section class="section other-experience-section" ref="otherExperienceSection">
      <h3 class="section-title">Other Experience & Skills</h3>

      <p><strong>2D Artist – Sweetcode</strong></p>
      <ul class="simple-list">
        <li>Designed and illustrated sticker packs for messaging apps, matching brand tone and composition requirements.</li>
      </ul>
    </section>
    
    <!-- CORE SKILLS -->
    <section class="section core-skills-section" ref="coreSkillsSection">
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
    <section class="section education-section" ref="educationSection">
      <h3 class="section-title" style="margin-top:20px;">Education & Languages</h3>
      <ul class="simple-list">
        <li>Lviv National Academy of Arts – Master of Ceramic Arts (2020–2022)</li>
        <li>Lviv College of Applied Arts n.a. I. Trush – Bachelor of Ceramic Arts (2014–2020)</li>
        <li>IT STEP Academy – Autodesk Maya, Character Animation Course (2017–2018)</li>
        <li>Languages: Ukrainian (Native), English (Upper-intermediate)</li>
      </ul>
    </section>

    <!-- SHOWREEL -->
    <section id="showreel" class="section showreel-section" ref="showreelSection">
      <h3 class="section-title">Showreel</h3>
      <div class="showreel-card">
        <div class="showreel-title">Full Animation Reel</div>
        <p>
          Embedded reel with gameplay and cinematic work across Last Flag and other projects.
        </p>
        <iframe
          class="showreel-frame"
          src="https://www.youtube.com/embed/WNk3lURMlwM"
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

// Section refs for observer
const summarySection = ref(null)
const experienceArgenticsSection = ref(null)
const experienceOtherSection = ref(null)
const otherExperienceSection = ref(null)
const coreSkillsSection = ref(null)
const educationSection = ref(null)
const showreelSection = ref(null)

onMounted(() => {
  const sections = [
    summarySection.value,
    experienceArgenticsSection.value,
    experienceOtherSection.value,
    otherExperienceSection.value,
    coreSkillsSection.value,
    educationSection.value,
    showreelSection.value
  ]

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible')
        entry.target.classList.remove('section-hidden')
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 0.1
  })

  sections.forEach(section => {
    if (section) {
      section.classList.add('section-hidden')
      observer.observe(section)
    }
  })
})


// Один масив для всього списку досвіду
const experienceItems = [
  {
    type: 'simple',
    title: 'Rigged and skinned stylized heroes and enemies for gameplay-ready use and produced core gameplay animations (movement, traversal, combat, interactions), aligning performances with Last Flag\'s visual direction and game design goals.'
  },
  {
    id: 'keyframe-animation',
    type: 'simple', // Changed from 'accordion'
    title: 'Keyframe animation for gameplay-ready characters across movement, combat, reactions, and interaction cycles, with a focus on readability and strong poses at gameplay distances.',
    mediaItems: [] // Місце для майбутніх GIF
  },
  {
    id: 'rigging-skinning',
    type: 'simple', // Changed from 'accordion'
    title: 'Rigging and skinning biped models using Advanced Skeleton, including weight cleanup and deformation fixes (rigging breakdown).',
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
    title: 'Skillfully rigging and skinning biped and quadruped models',
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

  /* Palette: "Deep Amethyst" */
  --bg-main: #1A1A1D;
  --bg-section-primary: #3B1C32;
  --bg-section-secondary: #242428;
  --accent-primary: #A64D79;
  --accent-secondary: #6A1E55;
  --accent-contrast: #FFBF00; /* Rich Amber/Gold */
  --text-primary: #EAEAEA;
  --text-secondary: #B0B0B0;
  --text-title: #FFFFFF;
  --border-color: #4F4F5A;
  --shadow-color: rgba(0, 0, 0, 0.6);

  /* Accordion specific colors */
  --accordion-bg-hover: rgba(166, 77, 121, 0.1);
  --accordion-border-hover: rgba(166, 77, 121, 0.3);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-primary);
}

body {
  background-color: var(--bg-main);
  color: var(--text-primary);
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
  justify-content: space-between;
  padding: 20px 28px;
  min-height: 180px;
  background: linear-gradient(135deg, var(--bg-main), var(--bg-section-primary));
  border-bottom: 1px solid var(--border-color);
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
  border: 4px solid var(--accent-primary);
  box-shadow: 0 8px 24px var(--shadow-color);
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent-contrast);
}

.hero-text h2 {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent-contrast);
  margin-top: 4px;
}

.hero-meta {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.hero-links {
  margin-top: 12px;
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
}
.hero-links a {
  color: var(--accent-contrast);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;
}
.hero-links a:hover {
  color: var(--text-title);
  text-decoration: underline;
  transform: translateY(-2px);
}

.hero-gif-wrap {
  position: relative;
  z-index: 2;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 12px;
}

.hero-gif {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Summary Section --- */
.summary-section {
  padding: 40px 28px;
  background-color: var(--bg-main);
}
.summary-section .section-title {
  text-align: left;
  margin: 0 0 24px 0; /* Adjust margin for left alignment */
  max-width: 100%;
  color: var(--text-title);
  border-bottom-color: var(--accent-secondary);
}
.summary-text {
  max-width: 800px; /* Wider for better flow */
  font-size: 1.1rem;
  font-family: var(--font-secondary);
  margin-left: 0;
  margin-right: 0;
  text-align: left;
  color: var(--text-primary);
}


/* --------------- ANIMATION STYLES --------------- */
.section-hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section-visible {
  opacity: 1;
  transform: translateY(0);
}


/* --------------- GENERAL SECTION STYLING --------------- */

.section {
  padding: 32px 28px;
}

.section-title {
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 auto 24px;
  padding-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  max-width: 80%;
}

.section p,
.section ul {
  margin-left: auto;
  margin-right: auto;
}

.section p {
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.7; /* Increased for readability */
  max-width: 800px;
}

ul.simple-list {
  margin-top: 12px;
  padding-left: 20px;
  font-size: 1rem;
  line-height: 1.7; /* Increased for readability */
  max-width: 800px;
}
ul.simple-list li {
  margin-bottom: 6px;
}


/* --- Experience Sections (ACCENT) --- */
.experience-section {
  background-color: var(--bg-section-primary);
  color: var(--text-primary);
}

.exp-title {
  display: block;
  text-align: left;
  font-size: 1.4rem; /* Increased font size */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-contrast);
  margin: 0 0 32px 0; /* Adjust margin for left alignment */
  padding-bottom: 8px;
  border-bottom: 2px solid var(--accent-primary);
}

.experience-section .exp-role,
.experience-section .project-title {
  color: var(--text-title);
}
.experience-section .exp-meta {
  color: var(--text-secondary);
}

.experience-grid {
  display: grid;
  grid-template-columns: 80px auto;
  gap: 20px;
  align-items: start;
  margin-bottom: 20px;
  max-width: 100%; /* Full width within section padding */
  margin-left: 0;
  margin-right: auto;
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
  font-size: 1.2rem;
  margin: 24px 0 16px;
  font-weight: 700;
  text-align: center;
  color: var(--accent-contrast);
}

.exp-bullets {
  margin: 0;
  padding-left: 24px;
  max-width: 800px;
  font-size: 1.05rem; /* Unified font size */
  line-height: 1.8; /* Increased for readability */
  text-align: left;
}
.exp-bullets li {
  margin-bottom: 12px;
}
.exp-bullets :deep(.accordion-header) {
  color: var(--text-primary);
  font-size: 1.05rem; /* Unified font size */
  text-align: left;
}
.exp-bullets :deep(.accordion-icon) {
  color: var(--accent-contrast);
}
.exp-bullets :deep(.accordion-header:hover) {
  background-color: var(--accordion-bg-hover);
  border-color: var(--accordion-border-hover);
  color: var(--accent-primary);
}


/* --- Other Experience --- */
.other-experience-section {
  background-color: var(--bg-section-secondary);
}
.other-experience-section .section-title {
  border-bottom-color: var(--border-color);
  color: var(--text-title);
}
.other-experience-section p,
.other-experience-section ul {
  text-align: left;
}


/* --- Core Skills & Education --- */
.core-skills-section,
.education-section {
  background-color: var(--bg-main);
}

.core-skills-section .section-title,
.education-section .section-title {
  border-bottom-color: var(--accent-secondary);
  color: var(--text-title);
}

.inline-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the skill tags */
  gap: 12px;
  margin: 12px auto 0;
  max-width: 800px;
}
.inline-list span {
  background-color: var(--accent-secondary);
  color: var(--text-title);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
}

/* --- Showreel Section --- */
.showreel-section {
  background-color: var(--bg-section-secondary);
}
.showreel-section .section-title {
  color: var(--text-title);
  border-bottom-color: var(--border-color);
}
.showreel-section .showreel-card p {
  color: var(--text-secondary);
}
.showreel-section .showreel-title {
  color: var(--text-title);
}

.showreel-card {
  max-width: 800px;
  border-radius: 12px;
  padding: 24px;
  background: linear-gradient(135deg, var(--accent-secondary), var(--bg-section-primary));
  border: 1px solid var(--border-color);
  box-shadow: 0 16px 40px var(--shadow-color);
  margin: 0 auto;
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
  .hero-gif-wrap { display: none; } /* Hide on mobile to save space */
  .experience-grid { grid-template-columns: 1fr; gap: 12px; }
  .exp-logo { margin: 0 auto; }
  .experience-header-text { text-align: center; }
  .section { padding: 24px 14px; }
}
</style>

