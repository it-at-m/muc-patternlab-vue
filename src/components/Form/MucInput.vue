<template>
  <div
    class="m-form-group"
    :class="{ 'has-error': errorMsg }"
  >
    <label
      v-if="label"
      :for="'input-' + id"
      class="m-label"
      :class="{ 'm-label--optional': !required }"
    >
      {{ label }}
    </label>
    <p
      v-if="hint"
      class="m-hint"
      :id="'input-hint-' + id"
    >
      {{ hint }}
    </p>
    <div class="m-input-wrapper m-autocomplete">
      <div
        v-if="!!slots.prefix"
        class="m-input__prefix"
      >
        <span>
          <slot name="prefix" />
        </span>
      </div>
      <input
        :id="'input-' + id"
        class="m-input autocomplete-input"
        :type="type"
        v-model="modelValue"
        :aria-describedby="hint ? 'input-hint-' + id : undefined"
        :placeholder="placeholder"
        :required="required"
        :aria-required="required"
        :maxlength="max"
        :autocomplete="autocomplete"
        :name="name"
      />
      <ul
        v-if="isSearch && currentAvalOptions.length !== 0"
        class="autocomplete-result-list autocomplete-result-list--location"
      >
        <li
          class="autocomplete-result"
          v-for="option in currentAvalOptions"
          :key="option"
          @click="handleOptionSelection(option)"
        >
          {{ option }}
        </li>
      </ul>
      <button
        v-if="suffixIcon"
        class="m-input__suffix"
        @click="handleSuffixClick"
      >
        <svg
          aria-hidden="true"
          class="icon"
        >
          <use :xlink:href="'#icon-' + suffixIcon"></use>
        </svg>
        <span class="visually-hidden">Suchen</span>
      </button>
    </div>
    <form-error-message
      id="text-input-error"
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
import { computed } from "vue";

import FormErrorMessage from "./FormErrorMessage.vue";

/**
 * Type includes all possible input types possible.
 */
type InputType =
  | "text"
  | "password"
  | "color"
  | "search"
  | "date"
  | "datetime-local";

/**
 * Input value from the input component.
 */
const modelValue = defineModel<string>({ default: "" });

const {
  errorMsg,
  required = false,
  type = "text",
  dataList = [] as string[],
} = defineProps<{
  /**
   *  Unique identifier for the input. Required property used to associate the input with its label and hint text for accessibility.
   */
  id: string;
  /**
   * Displays error message and highlights the input form with a red border.
   */
  errorMsg?: string;

  /**
   * Placeholder for empty input form.
   */
  placeholder?: string;

  /**
   * Sets this input form as required. Default is wrong.
   */
  required?: boolean;

  /**
   * Displays a label above the form component.
   */
  label?: string;

  /**
   * Displays a hint beneath the form component.
   */
  hint?: string;

  /**
   * Sets the type of this form component. This can be text, password, color, date or datetime-local.
   */
  type?: InputType;

  /**
   * Options for the form component. Type must set to 'search'.
   */
  dataList?: string[];

  /**
   * Icon to be displayed as a suffix at the end of the input.
   */
  suffixIcon?: string;

  /**
   * Restricts character input to the specified number
   */
  max?: number;

  /**
   * Enables autocomplete for the input
   */
  autocomplete?: string;

  /**
   * Defines a default name for autocomplete
   */
  name?: string;
}>();

const slots = defineSlots<{
  /**
   * Slot in front of the user input with divider.
   */
  prefix(): unknown;
}>();

const emits = defineEmits<
  /**
   * Triggered when suffix-button is clicked.
   * @param e Click-Event
   */
  (e: "suffixClick") => void
>();

/**
 * Computes whether the current type is "search".
 * @returns {boolean} Returns true if the type is "search", otherwise false.
 */
const isSearch = computed(() => type === "search");

/**
 * Computes the list of available options based on the current search value.
 * Filters the options from the datalist based on whether they start with the search value.
 * @returns {string[]} Returns an array of matching options.
 */
const currentAvalOptions = computed(() => {
  if (modelValue.value === "") return [];

  const searchValue = modelValue.value.toLowerCase();
  return dataList.filter(
    (option) =>
      option.toLowerCase().startsWith(searchValue) &&
      option.toLowerCase() !== searchValue
  );
});

/**
 * Handles the selection of an option.
 * Sets the model value to the selected option.
 * @param {string} option - The selected option.
 */
const handleOptionSelection = (option: string) => (modelValue.value = option);

const handleSuffixClick = () => emits("suffixClick");
</script>
