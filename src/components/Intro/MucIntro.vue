<script setup lang="ts">
defineProps<{
  /**
   * Title of the Intro
   */
  title: string;
  /**
   * Tagline of the Intro (above the title)
   */
  tagline: string;
  /**
   * Toggle to show a divider between title and body
   */
  divider: boolean;
}>();

defineSlots<{
  /**
   * Text-content of the Intro.
   */
  default(): any;
}>();
</script>

<template>

  <div class="m-intro m-intro-vertical">
    <div class="m-intro-vertical__body">
      <div class="container">
        <div class="m-intro-vertical__grid">
          <div class="m-intro-vertical__grid-inner">
            <span v-if="tagline" class="m-intro-vertical__tagline">
              {{ tagline }}
            </span>

            <h1 class="m-intro-vertical__title">
              {{ title }}
            </h1>

            <div v-if="divider" class="muc-divider"></div>

            <div class="m-intro-vertical__content">
              <p>
                <slot></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.muc-divider {
  margin-top: 8px;
  margin-bottom: 16px;
}
</style>