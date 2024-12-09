<template>
  <li
    :class="isActiveStep"
    @click="handleClick"
  >
    <div
      class="m-form-step__icon"
      :class="{disabled: disabled}"
      :tabindex="getTabindex"
      :aria-label="getAriaLabel"
    >
      <MucIcon :icon="getIcon" />
    </div>
    <div class="m-form-step__title" :class="{disabled: disabled}">
      <span aria-disabled="true"> {{ item.label }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";
import { StepperItem } from "./MucStepperTypes";

const { item, isActive, isDone, disabled } = defineProps<{
  /**
   * Individual item to display inside the MucStepper component
   */
  item: StepperItem;

  /**
   * Show stepper as active
   */
  isActive: boolean;

  /**
   * Show stepper as done
   */
  isDone: boolean;

  /**
   * Disabled stepper
   */
  disabled: boolean;
}>();

const emit = defineEmits<{
  /**
   * Triggered when an item is clicked.
   * @param e Click-Event
   * @param id
   */
  (e: "click", id: string): void;
}>();

/**
 * Computed property set active state of step
 */
const isActiveStep = computed(() =>
  isActive
    ? "m-form-step m-form-step--current"
    : "m-form-step" + clickableStep.value
);

/**
 * Computed property show courser on clickable step
 */
const clickableStep = computed(() =>
  isDone && !disabled ? " show-cursor" : ""
);

/**
 * Computed property set icon of step
 */
const getIcon = computed(() => (isDone ? "check" : item.icon));

/**
 * Computed property set tabindex
 */
const getTabindex = computed(() =>
  isActive || (isDone && !disabled) ? 0 : -1
);

/**
 * Computed property set aria-label
 */
const getAriaLabel = computed(() =>
  isActive
    ? "Aktueller Schritt: " + item.label
    : "Zurück zu Schritt: " + item.label
);

const handleClick = () => {
  if (isDone && !disabled) emit("click", item.id);
};
</script>

<style scoped>
.show-cursor {
  cursor: pointer;
}

.disabled {
  color: #9ca8b3;
  border-color: #9ca8b3;
}
</style>
