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
        v-if="mandatory"
        aria-hidden="true"
        class="mandatory"
      >
        *
      </span>
      <span class="visually-hidden">(erforderlich)</span>
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
        id="search-input"
        class="m-input autocomplete-input"
        :type="type"
        v-model="modelValue"
        aria-describedby="text-input-hint"
        :placeholder="placeholder"
        required
        :data-combobox="
          () => [
            'Schülersammelliste für eine schulische Reise',
            'Vorläufiger Reisepass',
            'Verkaufsstelle Familienpass',
            'Staatliche Behörden',
            'Reisepass beantragen',
          ]
        "
      />
      <ul
        v-if="isSearch"
        class="autocomplete-result-list autocomplete-result-list--location"
      />
      <slot name="suffix" />
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
import { computed } from "vue";

const modelValue = defineModel();

type inputType = "text" | "password" | "search";

const props = withDefaults(
  defineProps<{
    errorMsg?: string;
    placeholder?: string;
    type?: inputType;
    mandatory?: boolean;
    label?: string;
    hint?: string;
  }>(),
  {
    mandatory: false,
    type: "text",
  }
);

const emit = defineEmits<{
  /**
   * Triggered when button is clicked.
   * @param e Input-Event
   * @param value value of text-box
   */
  (e: "input", value: string): void;
}>();

const slots = defineSlots<{
  /**
   * Slot in front of the user input with divider.
   */
  prefix(): any;
  /**
   * Slot behind the user input.
   */
  suffix(): any;
}>();

const isErrorClass = computed(() => {
  return !props.errorMsg ? "" : "has-error";
});

const isSearch = computed(() => {
  return props.type === "search";
});
</script>
<style scoped></style>
