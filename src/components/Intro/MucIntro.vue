<script setup lang="ts">
import { MucDivider } from "../Divider";

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
  default(): unknown;
}>();
</script>

<template>
  <div
    class="m-intro m-intro-static-image"
    style="background-color: var(--color-neutrals-blue-xlight)"
  >
    <div class="container">
      <div class="muc-intro-content">
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

        <muc-divider v-if="divider" />

        <div class="m-intro-vertical__content">
          <p style="padding-bottom: 32px">
            <slot />
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

@media screen and (width >992px) {
  .muc-intro-content {
    width: 66.6%;
  }
}
</style>
