<template>
  <splide-slide>
    <slot />
  </splide-slide>
</template>

<script setup lang="ts">
import { SplideSlide } from "@splidejs/vue-splide";

defineSlots<{
  /**
   * Elements can be put into this slot.
   */
  default(): unknown;
}>();
</script>
