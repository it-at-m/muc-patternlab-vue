<template>
  <div
    class="m-radios__item"
    v-if="isInRadioButtonGroup"
  >
    <input
      class="m-radios__input"
      type="radio"
      :checked="isChecked"
      :disabled="isDisabled"
      @click.stop="clicked"
    />
    <label
      class="m-label m-radios__label"
      @click="clicked"
    >
      {{ label }}
      <span class="m-hint">
        {{ hint }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";

import { RadioButtonGroupKey } from "./MucRadioButtonTypes";

const { value, disabled = false, } = defineProps<{
    /**
     * value for this radiobutton
     */
    value: string;

    /**
     * Optional label shown behind the radiobutton
     */
    label?: string;

    /**
     * Optional hint shown beneath the radiobutton
     */
    hint?: string;

    /**
     * Optionally disable this specific radiobutton
     */
    disabled?: boolean;
}>();

/**
 * Data provided by the radio-button-group
 */
const parentData = inject(RadioButtonGroupKey);

/**
 * Function called upon clicking this radiobutton
 */
const clicked = () => parentData?.set(value);

/**
 * Computed property if this radiobutton is checked or not
 */
const isChecked = computed(() => parentData?.modelValue.value === value);

/**
 * Computed property if this radiobutton should be disabled
 */
const isDisabled = computed(() => disabled || parentData?.disabled.value);

/**
 * Determines if  this radiobutton is used inside a radiobutton-group
 */
const isInRadioButtonGroup = computed(() => parentData?.disabled ?? false);
</script>
