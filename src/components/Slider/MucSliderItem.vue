<template>
  <SplideSlide>
    <slot />
  </SplideSlide>
</template>

<script setup lang="ts">
import { SplideSlide } from "@splidejs/vue-splide";

defineSlots<{
  /**
   * Elements can be put into this slot.
   */
  default(): any;
}>();
</script>
