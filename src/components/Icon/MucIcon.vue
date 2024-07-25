<template>
  <svg
    aria-hidden="true"
    :class="iconClass"
    :style="{ color: color }"
  >
    <use :href="'#icon-' + icon" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * String of the icon to be displayed.
     */
    icon: string;

    /**
     * Optional css-color for the icon.
     */
    color?: string;

    iconClass?: string | string[];
  }>(),
  {
    iconClass: "icon",
  }
);
</script>
