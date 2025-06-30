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
import { computed, ComputedRef, useAttrs } from "vue";

const attr = useAttrs();

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

const iconClass: ComputedRef<object> = computed(() => attr.class ?? "icon");
</script>
