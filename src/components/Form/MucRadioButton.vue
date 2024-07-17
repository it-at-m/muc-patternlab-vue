<template>
  <div
    class="m-radios__item"
    @click="clicked"
  >
    <input
      class="m-radios__input"
      id="radio-button-example-0"
      name="radio-button-example"
      type="radio"
      :checked="isChecked"
      :disabled="parentData?.disabled.value"
    />
    <label
      class="m-label m-radios__label"
      for="radio-button-example-0"
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

import { RadioButtonGroupKey } from "./RadioButtonTypes";

const props = defineProps<{
  value: string;
  label?: string;
  hint?: string;
}>();

const parentData = inject(RadioButtonGroupKey);

const clicked = () => parentData?.set(props.value);

const isChecked = computed(() => parentData?.modelValue.value === props.value);

const isInRadioButtonGroup = computed(() => !!parentData?.disabled ?? false);
</script>
