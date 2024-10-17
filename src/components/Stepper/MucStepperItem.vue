<template>
  <li :class="isActiveStep">
    <div class="m-form-step__icon">
      <MucIcon :icon="getIcon" />
    </div>
    <div class="m-form-step__title">
      <span :aria-disabled="isDisabled"> {{ item.label }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {MucIcon} from "../Icon";
import {StepperItem} from "./MucStepperTypes";

const { item, isActive, isDone } = defineProps<{
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
}>();

const emit = defineEmits<{
  /**
   * Triggered when step item is clicked.
   * @param e Click-Event
   */
  (e: "click"): void;
}>();

/**
 * Computed property set active state of step
 */
const isActiveStep = computed(
    () => isActive ? "m-form-step m-form-step--current" : "m-form-step"
);

/**
 * Computed property set icon of step
 */
const getIcon = () => computed(
    () => isDone ? "check" : item.label
);

/**
 * Check if step is disabled
 */
const isDisabled = () => {
  return !isActive && !isDone;
};


</script>
