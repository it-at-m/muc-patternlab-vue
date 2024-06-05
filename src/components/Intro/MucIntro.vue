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
   * Body of the Intro.
   */
  default(): any;
}>();
</script>

<template>
  <div
    class="m-intro m-intro-static-image"
    style="background-color: var(--color-neutrals-blue-xlight)"
  >
    <div class="container">
      <div style="width: 66.6%">
        <div>
          <p
            v-if="tagline"
            class="m-intro-vertical__tagline"
          >
            {{ tagline }}
          </p>
          <h1 class="m-intro-vertical__title">
            {{ title }}
          </h1>
        </div>

        <div
          v-if="divider"
          class="muc-divider"
        ></div>

        <div class="m-intro-vertical__content">
          <p style="padding-bottom: 32px">
            <slot></slot>
          </p>
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
