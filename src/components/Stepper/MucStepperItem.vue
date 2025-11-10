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
      :aria-labelledby="ariaLabelledby"
      :aria-label="getAriaLabel"
      :aria-setsize="total"
      :aria-posinset="position"
      :aria-current="isActive ? 'step' : false"
    >
      <muc-icon :icon="getIcon" />
    </div>
    <div
      class="m-form-step__title"
      :class="{ disabled: disabled }"
    >
      <span
        :id="labelId"
        aria-disabled="true"
      >
        {{ item.label }}</span
      >

      <span
        class="visually-hidden"
        :id="prefixId"
      >
        Schritt {{ position }} von {{ total }}:
      </span>

      <span
        v-if="isDone"
        class="visually-hidden"
        :id="statusId"
      >
        – erledigt
      </span>
    </div>
    <span
      v-if="isActive"
      class="visually-hidden"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      :aria-labelledby="ariaLabelledby"
    >
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";
import { StepperItem } from "./MucStepperTypes";

const { item, isActive, isDone, disabled, position, total } = defineProps<{
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

  /**
   * position of the item in the step sequence
   */
  position: number;

  /**
   * total number of steps
   */
  total: number;
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

/**
 * Stable element IDs used to compose the accessible name via aria-labelledby
 */
const labelId = computed(() => `m-step-label-${item.id}`);
const prefixId = computed(() => `m-step-prefix-${item.id}`);
const statusId = computed(() => `m-step-status-${item.id}`);

/**
 * Compose the accessible name in order: prefix -> visible label -> optional status
 */
const ariaLabelledby = computed(() => {
  const ids = [prefixId.value, labelId.value];
  if (isDone) ids.push(statusId.value);
  return ids.join(" ");
});

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
