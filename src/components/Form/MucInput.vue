<template>
  <div
    class="m-form-group"
    :class="isErrorClass"
  >
    <label
      for="search-input"
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
    <p
      id="text-input-error"
      class="m-error-message"
    >
      {{ errorMsg }}
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
        class="m-input autocomplete-input"
        :type="type"
        v-model="modelValue"
        :aria-describedby="type + '-input'"
        :placeholder="placeholder"
        :required="required"
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
    <p
      class="m-hint"
      id="text-input-hint"
    >
      {{ hint }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useFuse } from "@vueuse/integrations/useFuse";
import { computed } from "vue";

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
}>();

const slots = defineSlots<{
  /**
   * Slot in front of the user input with divider.
   */
  prefix(): any;
}>();

const emits = defineEmits<{
  /**
   * Triggered when suffix-button is clicked.
   * @param e Click-Event
   */
  (e: "suffixClick"): void;
}>();

/**
 * Computes a CSS class based on the presence of an error message.
 * @returns {string} Returns "has-error" if there is an error message, otherwise an empty string.
 */
const isErrorClass = computed(() => (!errorMsg ? "" : "has-error"));

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
const currentAvalOptions = useFuse(modelValue.value, dataList);

/**
 * Handles the selection of an option.
 * Sets the model value to the selected option.
 * @param {string} option - The selected option.
 */
const handleOptionSelection = (option: string) => (modelValue.value = option);

const handleSuffixClick = () => emits("suffixClick");
</script>
<style scoped></style>
