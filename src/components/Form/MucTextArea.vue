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
    <div
      class="m-input-wrapper"
      :class="{ 'm-input-wrapper--character-count': maxlength }"
    >
      <textarea
        :id="'textarea-' + id"
        class="m-textarea"
        :aria-describedby="
          (hint ? 'textarea-hint-' + id : '') +
          ' ' +
          (maxlength ? 'textarea-count-' + id : '')
        "
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxlength"
        v-model="modelValue"
        :required="required"
        :aria-required="ariaRequired"
        @blur="currentCount = modelValue.length"
      />
      <div
        v-if="maxlength"
        class="m-character-count"
      >
        <span
          :id="'textarea-count-' + id"
          class="m-character-count__message visually-hidden"
          >Sie können bis zu {{ maxlength }} Zeichen eingeben.</span
        >
        <span
          class="m-character-count__status"
          aria-hidden="true"
        >
          {{ modelValue.length }}/{{ maxlength }}
        </span>
        <div
          class="m-character-count__sr-status visually-hidden"
          aria-live="polite"
        >
          {{ currentCount }}/{{ maxlength }}
        </div>
      </div>
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
import { ref } from "vue";

import FormErrorMessage from "./FormErrorMessage.vue";

/**
 * Input value from the form component.
 */
const modelValue = defineModel<string>({ default: "" });

/**
 * Current number of characters output by the screen reader when the field is exited.
 */
const currentCount = ref<number>(modelValue.value.length);

const {
  errorMsg,
  rows = 3,
  required = false,
  ariaRequired,
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

  /**
   * Restricts character input to the specified number
   */
  maxlength?: number;

  /**
   * Sets this input form as required.
   */
  ariaRequired?: boolean;
}>();
</script>
