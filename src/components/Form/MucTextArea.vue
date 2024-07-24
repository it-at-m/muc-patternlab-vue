<template>
  <div class="m-form-group has-error">
    <label
      for="textarea"
      class="m-label"
    >
      {{ label }}
      <span
        v-if="required"
        aria-hidden="true"
        class="mandatory"
      >
        *
        <span class="visually-hidden">(erforderlich)</span>
      </span>
    </label>
    <p class="m-error-message">
      {{ errorMsg }}
    </p>
    <div class="m-input-wrapper">
      <textarea
        class="m-textarea"
        :rows="rows"
        aria-describedby="textarea input"
        :placeholder="placeholder"
        v-model="modelValue"
      />
    </div>
    <p class="m-hint">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Input value from the form component.
 */
const modelValue = defineModel<string>({ default: "" });

const props = withDefaults(
  defineProps<{
    /**
     * Displays error message and highlights the input form with a red border.
     */
    errorMsg?: string;

    /**
     * Number of rows displayed of the textarea. Default is three.
     */
    rows?: number;

    /**
     * Placeholder for empty input form.
     */
    placeholder?: string;

    /**
     * Displays a label above the form component.
     */
    label?: string;

    /**
     * Displays a hint beneath the form component.
     */
    hint?: string;

    /**
     * Sets this input form as required. Default is false.
     */
    required?: boolean;
  }>(),
  {
    rows: 3,
    required: false,
  }
);
</script>

<style scoped></style>
