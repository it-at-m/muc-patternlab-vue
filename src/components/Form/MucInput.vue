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
        list="datalist-input"
        class="m-input autocomplete-input"
        :type="type"
        v-model="modelValue"
        aria-describedby="text-input-hint"
        :placeholder="placeholder"
        data-combobox='["Schülersammelliste für eine schulische Reise", "Vorläufiger Reisepass", "Verkaufsstelle Familienpass", "Staatliche Behörden", "Reisepass beantragen"]'
        required
      />
      <ul
        id="search-input"
        v-if="isSearch"
        class="autocomplete-result-list autocomplete-result-list--location"
      >
        <li
          class="autocomplete-result"
          v-for="option in datalist"
          :key="option"
        >
          {{ option }}
        </li>
      </ul>
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
    datalist?: string[];
  }>(),
  {
    mandatory: false,
    type: "text",
    datalist: () => ["choco", "vanilla", "choconut"],
  }
);

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
