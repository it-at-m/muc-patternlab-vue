<template>
  <div
    class="m-callout"
    :class="calloutClass"
    :aria-label="typeAriaLabel"
  >
    <div class="m-callout__inner">
      <div class="m-callout__icon">
        <slot name="icon">
          <!-- fallback icon -->
          <muc-icon :icon="fallbackCalloutIcon" />
        </slot>
      </div>
      <div class="m-callout__body">
        <div class="m-callout__body__inner">
          <div class="m-callout__headline">
            <slot name="header" />
          </div>
          <div class="m-callout__content">
            <p>
              <slot
                name="content"
                class="m-callout__content"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";

type calloutType = "info" | "warning" | "success" | "error";

const { type = "info" } = defineProps<{
  /**
   * Type of the callout, default is `info`.
   *
   * Available are `info`, `warning`, `success` and `error`.
   */
  type?: calloutType;
}>();

defineSlots<{
  /**
   * Icon shown above the callout. Defaults to icons matching the type.
   */
  icon(): any;
  /**
   * Heading of the callout.
   */
  header(): any;
  /**
   * Content beneath the heading shown as text.
   */
  content(): any;
}>();

/*
Computing the corresponding icon-component for the given comment-type
 */
const fallbackCalloutIcon = computed(() => {
  switch (type) {
    case "error":
    case "warning":
      return "warning";
    case "success":
      return "check";
    default:
      return "information";
  }
});

/*
Computing the corresponding css-class for the given comment-type
*/
const calloutClass = computed(() => {
  switch (type) {
    case "error":
      return "m-callout--error";
    case "warning":
      return "m-callout--warning";
    case "success":
      return "m-callout--success";
    default:
      return "m-callout--default";
  }
});

/*
Computing the corresponding aria-label for the given comment-type, currently in german
*/
const typeAriaLabel = computed(() => {
  switch (type) {
    case "success":
      return "Erfolgreich";
    case "warning":
      return "Warnung";
    case "error":
      return "Error";
    default:
      return "Information";
  }
});
</script>
