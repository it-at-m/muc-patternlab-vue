<script setup lang="ts">
import { computed, useSlots } from "vue";

import { MucIcon } from "../Icon";

type bannerType =
  | "info"
  | "success"
  | "warning"
  | "emergency"
  | "emergency-light";
type bannerVariant = "content" | "header";

const {
  type = "info",
  variant,
  noIcon = false,
  leftBorder = false,
} = defineProps<{
  /**
   * Changes the style of the banner. Available types are `content` and `header`. `content` is used in the content area. `header` is used directly below the header and has more padding.
   */
  variant: bannerVariant;

  /**
   * Changes the style of the banner. Available types are `info`, `success`, `warning`, `emergency` and `emergency-light`.
   */
  type?: bannerType;

  noIcon?: boolean;

  /**
   * Shows a coloured accent bar on the left side of the banner.
   */
  leftBorder?: boolean;
}>();

defineSlots<{
  /**
   * Optional heading shown above the banner text.
   */
  header(): unknown;
  /**
   * Text-content of the banner.
   */
  default(): unknown;
}>();

const slots = useSlots();
const hasHeader = computed(() => Boolean(slots.header));

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
    case "emergency-light":
      return "m-banner--emergency-light";
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
    case "emergency-light":
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
    case "emergency-light":
      return "Emergency";
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
    case "emergency-light":
      return "warning";
    case "info":
    default:
      return "information";
  }
});

const rootClass = computed(() => [
  typeClass.value,
  { "m-banner--left-border": leftBorder },
]);
</script>

<template>
  <div
    class="m-banner"
    :class="rootClass"
    :role="typeRole"
    :aria-label="typeAriaLabel"
  >
    <template v-if="variant === 'content'">
      <muc-icon
        v-if="!noIcon"
        :icon="typeIcon"
      />
      <div
        v-if="hasHeader"
        class="m-banner__body"
      >
        <p class="m-banner__headline">
          <slot name="header" />
        </p>
        <p class="m-banner__content">
          <slot />
        </p>
      </div>
      <p v-else>
        <slot />
      </p>
    </template>
    <template v-else>
      <div class="container-fluid">
        <muc-icon
          v-if="!noIcon"
          :icon="typeIcon"
        />
        <div
          v-if="hasHeader"
          class="m-banner__body"
        >
          <p class="m-banner__headline">
            <slot name="header" />
          </p>
          <p class="m-banner__content">
            <slot />
          </p>
        </div>
        <p v-else>
          <slot />
        </p>
      </div>
    </template>
  </div>
</template>

<style>
/* Not yet part of MDE patternlab – provided by muc-patternlab-vue. */
.m-banner--emergency-light {
  background-color: var(--mde-color-status-error-x-light, #f8f2f2);
  border-bottom: 1px solid var(--mde-color-status-error-light, #c79a9b);
  color: var(--mde-color-neutral-grey, #3a5368);
}

.m-banner--left-border {
  border-left-width: 4px;
  border-left-style: solid;
}

.m-banner--info.m-banner--left-border {
  border-left-color: var(--mde-color-brand-mde-blue, #005a9f);
  border-bottom: none;
}

.m-banner--success.m-banner--left-border {
  border-left-color: var(--mde-color-status-success, #3a7f53);
  border-bottom: none;
}

.m-banner--warning.m-banner--left-border {
  border-left-color: var(--mde-color-status-warning, #fcaa67);
  border-bottom: none;
}

.m-banner--emergency.m-banner--left-border {
  border-left-color: #7a282b;
  border-bottom: none;
}

.m-banner--emergency-light.m-banner--left-border {
  border-left-color: var(--mde-color-status-error, #984447);
  border-bottom: none;
}

.m-banner__body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.m-banner__headline {
  font-weight: 700;
  margin: 0;
}

.m-banner__content {
  margin: 0;
}
</style>
