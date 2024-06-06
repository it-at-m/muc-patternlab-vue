<template>
  <div class="m-form-group">
    <fieldset class="m-checkbox-group">
      <legend class="m-checkbox-group__legend">
        <h3 class="m-checkbox-group__heading">
          {{ heading }}
        </h3>
      </legend>
      <div class="m-checkboxes m-checkboxes--collapse">
        <slot name="checkboxes" />
        <div
          v-if="$slots.collapsableCheckboxes"
          class="m-checkboxes__collapse__container"
          :class="isCollapsed"
        >
          <slot name="collapsableCheckboxes" />
        </div>
        <muc-button
          v-if="$slots.collapsableCheckboxes"
          variant="ghost"
          @click="toggleCollapse"
          :aria-expanded="!collapsed"
        >
          <span>Mehr </span>
          <svg
            aria-hidden="true"
            class="icon icon--after"
          >
            <use :href="'#icon-chevron-' + buttonIcon"></use>
          </svg>
        </muc-button>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";

/**
 * Internal state for the collapsed section
 */
const collapsed = ref(true);

defineProps<{
  /**
   * Display a heading above the slots.
   */
  heading?: string;
}>();

defineSlots<{
  /**
   * Slot directly beneath the heading which will be displayed at all times.
   */
  checkboxes(): any;

  /**
   * Slot beneath the regular checkbox slot which will be collapsed at first.
   */
  collapsableCheckboxes(): any;
}>();

/**
 * Switches the collapse class for the collapsable container.
 */
const isCollapsed = computed(() => (collapsed.value ? "collapse" : ""));

/**
 * Switches the icon in the button to collapse / expand the container.
 */
const buttonIcon = computed(() => (collapsed.value ? "down" : "up"));

/**
 * Toggles the internal state for the collapsed container.
 */
const toggleCollapse = () => (collapsed.value = !collapsed.value);
</script>

<style scoped></style>
