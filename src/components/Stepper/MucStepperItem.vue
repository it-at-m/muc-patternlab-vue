<template>
  <li
    class="m-form-step"
    :class="{ 'm-form-step--current': isActive }"
    :aria-current="isActive ? 'step' : undefined"
  >
    <!--
      Keep Patternlab's div.m-form-step__icon for circle styling.
      Use a display:contents button wrapper for keyboard-accessible navigation.
    -->
    <button
      v-if="isClickable"
      type="button"
      class="m-form-step__button"
      @click="handleClick"
    >
      <div class="m-form-step__icon">
        <muc-icon :icon="item.icon" />
      </div>
      <span class="visually-hidden">Zurück zu Schritt: {{ item.label }}</span>
    </button>
    <div
      v-else
      class="m-form-step__icon"
      :class="{ disabled: disabled }"
    >
      <muc-icon :icon="item.icon" />
    </div>
    <div
      class="m-form-step__title"
      :class="{ disabled: disabled }"
    >
      <span>{{ item.label }}</span>
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
 * Completed steps stay navigable via a real button (Patternlab: no tabindex on div).
 * Done steps keep their original step icon instead of a check icon.
 */
const isClickable = computed(() => isDone && !disabled && !isActive);

const handleClick = () => {
  if (isClickable.value) {
    emit("click", item.id);
  }
};
</script>

<style scoped>
/* Lets Patternlab layout treat .m-form-step__icon as a direct child of .m-form-step */
.m-form-step__button {
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: contents;
}

.disabled {
  color: var(--mde-color-neutral-grey-x-light);
  border-color: var(--mde-color-neutral-grey-x-light);
}
</style>
