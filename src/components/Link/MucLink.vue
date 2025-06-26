<template>
  <a
    :href="href"
    :target="target"
    class="m-link"
    :class="[reversedUnderlineClass, disabledClass]"
  >
    <span v-if="iconShownLeft">
      <slot name="icon">
        <muc-icon
          v-if="icon"
          class="icon icon--before"
          :icon="icon"
        />
      </slot>
    </span>
    {{ label }}
    <span v-if="!iconShownLeft">
      <slot name="icon">
        <muc-icon
          v-if="icon"
          class="icon icon--after"
          :icon="icon"
        />
      </slot>
    </span>
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
  iconShownLeft = false,
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
  /**
   * Disables the link
   */
  disabled?: boolean;
  /**
   * Whether the Icon should be shown on the left side of the link (slide-right) or not.
   *
   * Default is `false`
   */
  iconShownLeft?: boolean;
}>();

defineSlots<{
  /**
   * Icon slots overrides chosen prop icon.
   */
  icon(): void;
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
