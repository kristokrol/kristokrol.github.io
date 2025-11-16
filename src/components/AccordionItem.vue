<template>
  <li class="accordion-item">
    <button 
      class="accordion-header" 
      @click="toggle"
      :aria-expanded="isOpen"
      :aria-controls="`accordion-content-${id}`"
    >
      <span class="accordion-title">{{ title }}</span>
      <span class="accordion-icon" :class="{ 'open': isOpen }">▼</span>
    </button>
    <div 
      v-if="isOpen"
      class="accordion-content"
      :id="`accordion-content-${id}`"
    >
      <div class="accordion-media-grid" v-if="mediaItems && mediaItems.length > 0">
        <div 
          v-for="(media, index) in mediaItems" 
          :key="index"
          class="accordion-media-item"
        >
          <img 
            v-if="media.type === 'image' || media.type === 'gif'"
            :src="media.src" 
            :alt="media.alt || ''"
            class="accordion-media"
          />
          <video 
            v-else-if="media.type === 'video'"
            :src="media.src"
            :alt="media.alt || ''"
            class="accordion-media"
            controls
            muted
            loop
          />
        </div>
      </div>
      <div v-else class="accordion-placeholder">
        <!-- Місце для майбутніх медіа-елементів -->
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  mediaItems: {
    type: Array,
    default: () => []
  },
  id: {
    type: String,
    required: true
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.accordion-item {
  list-style: disc; /* Крапочки як у звичайних li */
  margin-bottom: 6px;
  line-height: 1.45;
  margin-left: 0;
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 8px;
  margin: 0;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.45;
  transition: all 0.2s ease;
  gap: 12px;
}

.accordion-header:hover {
  background: var(--accordion-bg-hover);
  border-color: var(--accordion-border-hover);
  color: var(--accent-primary);
}

.accordion-title {
  flex: 1;
}

.accordion-icon {
  font-size: 0.7rem;
  color: var(--accent-primary);
  transition: transform 0.3s ease, opacity 0.2s ease;
  flex-shrink: 0;
  opacity: 0.7;
}

.accordion-header:hover .accordion-icon {
  opacity: 1;
}

.accordion-icon.open {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 12px 0 8px 0;
  padding-left: 0;
  animation: slideDown 0.3s ease;
  margin-top: 4px;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px; /* Adjust if content can be taller */
  }
}

.accordion-media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.accordion-media-item {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.accordion-media {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.accordion-placeholder {
  min-height: 100px;
  padding: 20px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.85rem;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
}

@media (max-width: 600px) {
  .accordion-media-grid {
    grid-template-columns: 1fr;
  }
}
</style>

