<script setup lang="ts">
import type { PropType } from "vue";

import { computed } from "vue";

type bannerType = "info" | "warning" | "emergency";

const props = defineProps({
  type: {
    type: String as PropType<bannerType>,
    default: "info",
  },
});

const typeClass = computed(() => {
  switch (props.type) {
    case "info":
      return "m-banner--info";
    case "warning":
      return "m-banner--emergency";
    case "emergency":
      return "m-banner--warning";
    default:
      return "m-banner--info";
  }
});

const typeRole = computed(() => {
  switch (props.type) {
    case "info":
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
  switch (props.type) {
    case "info":
      return "Information";
    case "warning":
      return "Warnung";
    case "emergency":
      return "Emergency";
    default:
      return "Information";
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
          <svg class="icon">
            <use href="#icon-information" />
          </svg>
          <p>
            <slot />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
