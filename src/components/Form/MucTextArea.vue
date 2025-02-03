<template>
  <div
    class="m-form-group"
    :class="{ 'has-error': errorMsg }"
  >
    <label
      v-if="label"
      :for="'textarea-' + id"
      class="m-label"
      :class="{ 'm-label--optional': !required }"
    >
      {{ label }}
    </label>
    <p
      v-if="hint"
      :id="'textarea-hint-' + id"
      class="m-hint"
    >
      {{ hint }}
    </p>
    <div class="m-input-wrapper">
      <textarea
        :id="'textarea-' + id"
        class="m-textarea"
        :aria-describedby="hint ? 'textarea-hint-' + id : undefined"
        :rows="rows"
        :placeholder="placeholder"
        v-model="modelValue"
      />
    </div>
    <form-error-message
      v-if="errorMsg"
      tabindex="0"
      role="alert"
      aria-live="polite"
    >
      {{ errorMsg }}
    </form-error-message>
  </div>
</template>

<script setup lang="ts">
import FormErrorMessage from "./FormErrorMessage.vue";

/**
 * Input value from the form component.
 */
const modelValue = defineModel<string>({ default: "" });

const {
  errorMsg,
  rows = 3,
  required = false,
} = defineProps<{
  /**
   * Unique identifier for the textarea. Required property used  to associate the textarea with its label and hint text for accessibility.
   */
  id: string;
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
}>();
</script>
