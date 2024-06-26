<template>
  <div class="m-radios__item">
    <input
      class="m-radios__input"
      id="radio-button-example-0"
      name="radio-button-example"
      type="radio"
      v-model="modelValue"
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
const modelValue = defineModel();

defineProps<{
  value: string;
  label?: string;
  hint?: string;
}>();
</script>
