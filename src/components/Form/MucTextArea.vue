<template>
  <div
    class="m-form-group"
    :class="isErrorClass"
  >
    <label
      v-if="label"
      for="textarea"
      class="m-label"
      :class="isRequiredClass"
    >
      {{ label }}
    </label>
    <p class="m-hint">
      {{ hint }}
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
    <form-error-message v-if="errorMsg">
      {{ errorMsg }}
    </form-error-message>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

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

/**
 * Computes a CSS class based on the presence of an error message.
 * @returns {string} Returns "has-error" if there is an error message, otherwise an empty string.
 */
const isErrorClass = computed(() => (!errorMsg ? "" : "has-error"));

/**
 * Computes a CSS class for optional fields.
 * @returns {string} Returns "m-label--optional" if the field is optional, otherwise an empty string.
 */
const isRequiredClass = computed(() => (required ? "" : "m-label--optional"));
</script>
