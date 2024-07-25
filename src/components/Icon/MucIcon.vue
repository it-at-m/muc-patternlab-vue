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
import { computed } from "vue";

const props = defineProps<{
  /**
   * String of the icon to be displayed.
   */
  icon: string;

  /**
   * Optional css-color for the icon.
   */
  color?: string;

  /**
   * Optional override for css-class on the svg
   */
  iconClassOverride?: string;
}>();

/**
 * Computed icon-class for svg-icon, default to "icon"
 */
const iconClass = computed(() => props.iconClassOverride ?? "icon");
</script>
