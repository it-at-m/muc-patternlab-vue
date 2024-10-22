<template>
  <div class="m-form-group">
    <fieldset class="m-radio-group">
      <legend class="m-radio-group__legend">
        <h3 class="m-radio-group__heading">
          {{ heading }}
        </h3>
      </legend>
      <div class="m-radios">
        <slot name="default" />
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { provide, readonly, toRef } from "vue";

import {
  RadioButtonGroupKey,
  RadioButtonValueTypes,
} from "./MucRadioButtonTypes";

/**
 * exposed two-way binding of the currently selected radiobuttons-value
 */
const modelValue = defineModel<RadioButtonValueTypes>();

const { disabled = false } = defineProps<{
  /**
   * Optional heading above all radiobuttons as a group heading
   */
  heading?: string;

  /**
   * Optionally disable all child radiobuttons - defaults to 'false'
   */
  disabled?: boolean;
}>();

const emit = defineEmits<{
  /**
   * Triggered when a different radiobutton is selected.
   * @param value RadioButtonValueTypes the value of the newly selected radiobutton
   */
  change: [value: RadioButtonValueTypes];
}>();

/**
 * Providing necessary data to all child radiobuttons.
 */
provide(RadioButtonGroupKey, {
  set: (value: RadioButtonValueTypes) => {
    emit("change", value);
    modelValue.value = value;
  },
  modelValue,
  disabled: readonly(toRef(() => disabled)),
});
</script>
