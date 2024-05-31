<template>
  <svg
    aria-hidden="true"
    class="m-button__icon"
    :style="{ color: color }"
  >
    <use :href="'#icon-' + icon" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * String of the icon to be displayed.
   */
  icon: string;

  /**
   * Optional css-color for the icon.
   */
  color?: string;
}>();
</script>
