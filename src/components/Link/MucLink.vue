<template>
  <a
    :href="href"
    :target="target"
    class="m-link"
    :class="reversedUnderlineClass"
  >
    {{ label }}
    <slot name="icon">
      <muc-icon
        v-if="icon"
        :icon="icon"
        class="icon icon--after"
      />
    </slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";

const {
  href = "#",
  target = "_blank",
  noUnderline = false,
} = defineProps<{
  /**
   * Text shown as the link
   */
  label: string;

  /**
   * href to link to
   */
  href?: string;

  /**
   * Optional icon displayed behind the text
   */
  icon?: string;

  /**
   * Target on the link
   */
  target?: string;

  /**
   * Removes the underline from the label text
   */
  noUnderline?: boolean;
}>();

defineSlots<{
  /**
   * Icon slots overrides chosen prop icon.
   * The icon can be displayed infront or behind the label with these classes: icon--after | icon--before
   */
  icon(): void;
}>();

/**
 * Computed class to remove the underline if chosen.
 */
const reversedUnderlineClass = computed(() =>
  noUnderline ? "m-link--reversed-underline" : ""
);
</script>

<style scoped></style>
