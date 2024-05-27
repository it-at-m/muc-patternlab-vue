<template>
  <svg
    aria-hidden="true"
    class="m-button__icon"
    :style="{ color: color }"
  >
    <use :xlink:href="'#icon-' + icon" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * String of the icon to be displayed.
   */
  icon: string;

  /**
   * Optional color string for the icon.
   */
  color?: string;
}>();
</script>
