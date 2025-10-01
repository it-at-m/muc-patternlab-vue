<template>
  <li
    class="m-form-step"
    :class="{
      'm-form-step--current': isActive,
      'show-cursor': isDone && !disabled && !isActive,
    }"
    @click="handleClick"
  >
    <div
      class="m-form-step__icon"
      :class="{ disabled: disabled }"
      :tabindex="getTabindex"
      :aria-label="getAriaLabel"
    >
      <muc-icon :icon="getIcon" />
    </div>
    <div
      class="m-form-step__title"
      :class="{ disabled: disabled }"
    >
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
   * @param id of the clicked item
   */
  click: [id: string];
}>();

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
  if (isDone && !disabled) {
    emit("click", item.id);
  }
};
</script>

<style scoped>
.show-cursor {
  cursor: pointer;
}

.disabled {
  color: var(--mde-color-neutral-grey-x-light);
  border-color: var(--mde-color-neutral-grey-x-light);
}
</style>
