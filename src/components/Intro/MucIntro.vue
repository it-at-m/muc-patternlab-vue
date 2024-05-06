<script setup lang="ts">
defineProps<{
  /**
   * Title of the Intro
   */
  title: string;
}>();

defineSlots<{
  /**
   * Text-content of the Intro.
   */
  default(): any;
}>();
</script>

<template>
  <div class="m-intro m-intro-summary-text">
    <div class="container">
      <div class="m-intro-summary-text__body">
        <div class="m-intro-summary-text__grid">
          <div class="m-intro-summary-text__content">
            <h1 class="m-intro-summary-text__title">{{ title }}</h1>
            <p>
              <slot></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
