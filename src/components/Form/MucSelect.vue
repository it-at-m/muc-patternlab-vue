<template>
  <div
    class="m-form-group"
    ref="selectComponentRef"
  >
    <label class="m-label">
      {{ label }}
    </label>
    <div
      class="m-input-wrapper"
      :class="selectType"
    >
      <input
        type="text"
        class="m-input m-combobox m-combobox--single"
        v-model="searchValue"
        @click="openItemList"
      />
      <span
        class="m-input__trigger"
        @click="toggleItemList"
      >
        <svg
          aria-hidden="true"
          class="icon"
        >
          <use xlink:href="#icon-chevron-down"></use>
        </svg>
        <span class="visually-hidden">Auswahlliste öffnen</span>
      </span>
      <ul
        class="listbox"
        :class="displayOptions"
        @mouseleave="emptyActiveItem"
      >
        <li
          v-for="(option, index) in displayedItems"
          :key="index"
          class="option"
          @mouseenter="activeItem = option"
          :class="[isActiveClass(option), isSelectedClass(option)]"
          @click="clicked(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
    <p
      v-if="!!hint"
      class="m-hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import useOnClickOutside from "../../composables/useOnClickOutside";

/**
 * Ref ot the component
 */
const selectComponentRef = ref();

/**
 * Exposed selected value / values
 */
const selectedValues = defineModel<string | string[]>("modelValue", {
  default: [],
});

/**
 * If list of items is shown
 */
const showItems = ref<boolean>(false);

/**
 * Last interacted item - selected or deselected
 */
const lastClickedItem = ref<string>();

/**
 * Index of currently actively hovered item or selected item
 */
const activeItem = ref<string>();

const props = withDefaults(
  defineProps<{
    /**
     * List of items to be available
     */
    items: string[];

    /**
     * Optional label shown above the input
     */
    label?: string;

    /**
     * Optional hint shown below the input
     */
    hint?: string;

    /**
     * Allow multiple selectable items
     */
    multiple?: boolean;
  }>(),
  {
    multiple: false,
  }
);

/**
 * Toggles the list of items and sets the previously selected item as active
 */
const toggleItemList = () => {
  showItems.value = !showItems.value;
  activeItem.value = lastClickedItem.value;
};

/**
 * Opens the list of items and sets the previously selected item as active
 */
const openItemList = () => {
  showItems.value = true;
  activeItem.value = lastClickedItem.value;
};

/**
 * Closes the list after clicking outside the component
 */
useOnClickOutside(selectComponentRef, () => {
  showItems.value = false;
});

/**
 * Actions upon clicking an item
 * @param clickedValue clicked item value
 */
const clicked = (clickedValue: string) => {
  lastClickedItem.value = clickedValue;

  props.multiple
    ? updateMVMultiple(clickedValue)
    : updateMVSingle(clickedValue);

  if (!props.multiple) showItems.value = false;
};

/**
 * Update the modelValue with the given. Performs conversion to string if necessary.
 * @param newValue the new value
 */
const updateMVSingle = (newValue: string) => {
  if (typeof selectedValues.value === "object")
    selectedValues.value = selectedValues.value.join(" ");

  selectedValues.value = selectedValues.value === newValue ? "" : newValue;
};

/**
 * Update the modelValue with the given. Performs conversion to array if necessary.
 * @param newValue the new value
 */
const updateMVMultiple = (newValue: string) => {
  if (typeof selectedValues.value === "string")
    selectedValues.value = [selectedValues.value];

  selectedValues.value = selectedValues.value.includes(newValue)
    ? selectedValues.value.filter((val: string) => val !== newValue)
    : [...selectedValues.value, newValue];
};

/**
 * Converts the displayed text depending on the selection mode
 */
const outputTransformed = computed(() => {
  if (typeof selectedValues.value === "string") return selectedValues.value;
  return selectedValues.value.join(props.multiple ? ", " : " ");
});

watch(outputTransformed, (newOutput) => {
  searchValue.value = newOutput;
});

/**
 * Current search value
 */
const searchValue = ref<string>(outputTransformed.value);

/**
 * Determines whether all or only the searched elements are displayed
 */
const displayedItems = computed(() =>
  searchValue.value == outputTransformed.value
    ? props.items
    : updateDisplayedItems(searchValue.value)
);

/**
 * Filters the list of elements after entering the search string
 * @param search the search string
 * @return list of searched items
 */
const updateDisplayedItems = (search: string) => {
  return props.items.filter((item) => item.includes(search));
};

/**
 * Apply active class to hovered item
 * @param value of item
 */
const isActiveClass = (value: string) =>
  value === activeItem.value ? "active" : "";

/**
 * Apply selected class to selected items
 * @param value of item
 */
const isSelectedClass = (value: string) =>
  selectedValues.value.includes(value) ? "selected" : "";

/**
 * Resets the currently activeItem
 */
const emptyActiveItem = () => (activeItem.value = "");

/**
 * Display the list of item by changing the css-display property
 */
const displayOptions = computed(() =>
  showItems.value ? "display-listbox" : ""
);

/**
 * Switches between the selection modes according to multiple. Checkboxes are shown on the multiple select
 */
const selectType = computed(() =>
  props.multiple
    ? "m-input-wrapper--multiselect multiselect"
    : "m-input-wrapper--select"
);
</script>

<style scoped>
.display-listbox {
  display: block !important;
}
</style>
