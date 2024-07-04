<script setup lang="ts">
import { computed } from "vue";

type bannerType = "info" | "success" | "warning" | "emergency";

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
  switch (props.type) {
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
  switch (props.type) {
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
  switch (props.type) {
    case "success":
      return "#icon-check";
    case "warning":
    case "emergency":
      return "#icon-warning"
    case "info":
    default:
      return "#icon-information";
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
            <use :href="typeIcon" />
          </svg>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.m-banner--success {
  background-color: #f1f6f3;
  border-bottom: 1px solid #3a7f53;
}

.m-banner--success .icon {
  color: #3a7f53;
}
</style>
