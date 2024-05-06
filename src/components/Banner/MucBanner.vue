<script setup lang="ts">
import { computed } from "vue";

type bannerType = "info" | "warning" | "emergency";

const props = withDefaults(
  defineProps<{
    /**
     * Changes the style of the banner. Available types are `info`, `warning` and `emergency`.
     */
    type?: bannerType;
  }>(),
  {
    type: "info",
  }
);

defineSlots<{
  /**
   * Text-content of the banner.
   */
  default(): any;
}>();

const typeClass = computed(() => {
  switch (props.type) {
    case "info":
      return "m-banner--info";
    case "warning":
      return "m-banner--warning";
    case "emergency":
      return "m-banner--emergency";
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
