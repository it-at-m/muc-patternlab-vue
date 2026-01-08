<template>
  <splide-slide>
    <slot />
  </splide-slide>
</template>

<script setup lang="ts">
// @ts-expect-error vue-splide is not maintained anymore
import { SplideSlide } from "@splidejs/vue-splide";

defineSlots<{
  /**
   * Elements can be put into this slot.
   */
  default(): unknown;
}>();
</script>
