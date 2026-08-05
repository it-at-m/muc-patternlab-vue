<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";

type bannerType = "info" | "success" | "warning" | "emergency" | "danger";
type bannerVariant = "content" | "header";

const {
  type = "info",
  variant,
  noIcon = false,
} = defineProps<{
  /**
   * Changes the style of the banner. Available types are `content` and `header`. `content` is used in the content area. `header` is used directly below the header and has more padding.
   */
  variant: bannerVariant;

  /**
   * Changes the style of the banner. Available types are `info`, `success`, `warning`, `emergency` and `danger`.
   */
  type?: bannerType;

  noIcon?: boolean;
}>();

defineSlots<{
  /**
   * Text-content of the banner.
   */
  default(): unknown;
}>();

const typeClass = computed(() => {
  switch (type) {
    case "info":
      return "m-banner--info";
    case "success":
      return "m-banner--success";
    case "warning":
      return "m-banner--warning";
    case "emergency":
      return "m-banner--emergency";
    case "danger":
      return "m-banner--danger";
    default:
      return "m-banner--info";
  }
});

const typeRole = computed(() => {
  switch (type) {
    case "info":
      return "dialog";
    case "success":
      return "dialog";
    case "warning":
    case "emergency":
    case "danger":
      return "alert";
    default:
      return "dialog";
  }
});

const typeAriaLabel = computed(() => {
  switch (type) {
    case "info":
      return "Information";
    case "success":
      return "Erfolg";
    case "warning":
      return "Warnung";
    case "emergency":
      return "Emergency";
    case "danger":
      return "Danger";
    default:
      return "Information";
  }
});

const typeIcon = computed(() => {
  switch (type) {
    case "success":
      return "check";
    case "warning":
    case "emergency":
    case "danger":
      return "warning";
    case "info":
    default:
      return "information";
  }
});
</script>

<template>
  <div
    class="m-banner"
    :class="typeClass"
    :role="typeRole"
    :aria-label="typeAriaLabel"
  >
    <template v-if="variant === 'content'">
      <muc-icon
        v-if="!noIcon"
        :icon="typeIcon"
      />
      <p>
        <slot />
      </p>
    </template>
    <template v-else>
      <div class="container-fluid">
        <muc-icon
          v-if="!noIcon"
          :icon="typeIcon"
        />
        <p>
          <slot />
        </p>
      </div>
    </template>
  </div>
</template>

<style>
.m-banner--danger {
  background-color: var(--mde-color-status-error-x-light, #f8f2f2);
  border-bottom: 1px solid var(--mde-color-status-error-light, #c79a9b);
  color: var(--mde-color-neutral-grey, #3a5368);
}
</style>
