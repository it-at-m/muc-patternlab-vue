<template>
  <a
    :href="href"
    :target="target"
    class="m-link"
    :class="[reversedUnderlineClass, disabledClass]"
  >
    <slot name="prepend">
      <muc-icon
        v-if="prependIcon"
        class="icon icon--before"
        :icon="prependIcon"
      />
    </slot>
    {{ label }}
    <slot name="append">
      <muc-icon
        v-if="appendIcon"
        class="icon icon--after"
        :icon="appendIcon"
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
  disabled = false,
  prependIcon = "",
  appendIcon = "",
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
   * Optional icon displayed before the text
   */
  prependIcon?: string;

  /**
   * Optional icon displayed behind the text
   */
  appendIcon?: string;

  /**
   * Target on the link
   */
  target?: string;

  /**
   * Removes the underline from the label text
   */
  noUnderline?: boolean;
  /**
   * Disables the link
   */
  disabled?: boolean;
}>();

defineSlots<{
  /**
   * This slot allows you to inject custom content before the link label.
   */
  prepend(): void;
  /**
   * This slot allows you to inject custom content behind the link label.
   */
  append(): void;
}>();

/**
 * Computed class to remove the underline if chosen.
 */
const reversedUnderlineClass = computed(() =>
  noUnderline ? "m-link--reversed-underline" : ""
);

const disabledClass = computed(() => (disabled ? "m-link--disabled" : ""));
</script>

<style scoped></style>
