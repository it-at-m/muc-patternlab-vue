<template>
  <svg
    aria-hidden="true"
    :class="[additionalClasses, iconClass]"
    :style="{ color: color }"
  >
    <use :href="'#icon-' + icon" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

type AdditionalClass = "icon--before" | "icon--after";

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

  /**
   * Additional css-classes adjacent to the icon class
   */
  additionalClasses?: AdditionalClass;
}>();

/**
 * Computed icon-class for svg-icon, default to "icon"
 */
const iconClass = computed(() => props.iconClassOverride ?? " icon");
</script>
