<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";

type bannerType = "info" | "success" | "warning" | "emergency";

const { type = "info" } = defineProps<{
  /**
   * Changes the style of the banner. Available types are `info`, `warning` and `emergency`.
   */
  type?: bannerType;
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
      return "alert";
    case "emergency":
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
      return "warning";
    case "info":
    default:
      return "information";
  }
});
</script>

<template>
  <div>
    <div>
      <div
        class="m-banner"
        :class="typeClass"
        :role="typeRole"
        :aria-label="typeAriaLabel"
      >
        <div class="container-fluid">
          <muc-icon :icon="typeIcon" />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
