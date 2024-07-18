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

import { RadioButtonGroupKey, RadioButtonValueTypes } from "./RadioButtonTypes";

const selectedButton = defineModel<RadioButtonValueTypes>("modelValue");

const props = withDefaults(
  defineProps<{
    heading?: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const emit = defineEmits<{
  change: [value: RadioButtonValueTypes];
}>();

provide(RadioButtonGroupKey, {
  set: (value: RadioButtonValueTypes) => {
    emit("change", value);
    selectedButton.value = value;
  },
  modelValue: selectedButton,
  disabled: readonly(toRef(props.disabled)),
});
</script>
