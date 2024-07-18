<template>
  <div class="m-radios__item">
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
import { computed, inject, onMounted } from "vue";

import { RadioButtonGroupKey } from "./RadioButtonTypes";

const props = withDefaults(
  defineProps<{
    value: string;
    label?: string;
    hint?: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const parentData = inject(RadioButtonGroupKey);

const clicked = () => parentData?.set(props.value);

const isChecked = computed(() => parentData?.modelValue.value === props.value);

const isDisabled = computed(() => props.disabled || parentData?.disabled.value);

const isInRadioButtonGroup = computed(() => !!parentData?.disabled ?? false);
</script>
