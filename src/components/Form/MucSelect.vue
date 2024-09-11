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
          <MucSelectItem
            :item="option"
            :item-label="itemTitle"
          />
        </li>
        <li
          v-if="noItemsFound"
          class="option"
        >
          {{ noItemFoundMessage }}
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
import MucSelectItem from "./MucSelectItem.vue";
import { ItemAsObject, MucSelectItemTypes } from "./MucSelectTypes";

/**
 * Ref ot the component
 */
const selectComponentRef = ref();

/**
 * Exposed selected value / values
 */
const selectedValues = defineModel<MucSelectItemTypes | MucSelectItemTypes[]>(
  "modelValue",
  {
    default: [],
  }
);

/**
 * If list of items is shown
 */
const showItems = ref<boolean>(false);

/**
 * Last interacted item - selected or deselected
 */
const lastClickedItem = ref<MucSelectItemTypes>();

/**
 * If no items found after filtering
 */
const noItemsFound = ref<boolean>(false);

/**
 * Index of currently actively hovered item or selected item
 */
const activeItem = ref<MucSelectItemTypes>();

const props = withDefaults(
  defineProps<{
    /**
     * List of items to be available
     */
    items: MucSelectItemTypes[];

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

    /**
     * Optional message shown no item is found after filtering
     */
    noItemFoundMessage?: string;

    /**
     * Property that contains the value to be displayed in the list when a list of objects is used
     */
    itemTitle?: string;
  }>(),
  {
    multiple: false,
    noItemFoundMessage: "No items found.",
    itemTitle: "title",
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
  searchValue.value = "";
};

/**
 * Closes the list after clicking outside the component
 */
useOnClickOutside(selectComponentRef, () => {
  showItems.value = false;
  searchValue.value = outputTransformed.value;
});

/**
 * Actions upon clicking an item
 * @param clickedValue clicked item value
 */
const clicked = (clickedValue: MucSelectItemTypes) => {
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
const updateMVSingle = (newValue: MucSelectItemTypes) => {
  if (Array.isArray(selectedValues.value))
    selectedValues.value = selectedValues.value.join(" ");

  if (
    typeof selectedValues.value !== "string" &&
    typeof newValue !== "string"
  ) {
    selectedValues.value =
      selectedValues.value[props.itemTitle] === newValue[props.itemTitle]
        ? ""
        : newValue;
  } else {
    selectedValues.value = selectedValues.value === newValue ? "" : newValue;
  }
};

/**
 * Update the modelValue with the given. Performs conversion to array if necessary.
 * @param newValue the new value
 */
const updateMVMultiple = (newValue: MucSelectItemTypes) => {
  if (!Array.isArray(selectedValues.value))
    selectedValues.value = [selectedValues.value];

  if (Array.isArray(selectedValues.value)) {
    if (typeof newValue === "string") {
      selectedValues.value = selectedValues.value
        .map((item: string) => item)
        .includes(newValue)
        ? selectedValues.value.filter((val: string) => val !== newValue)
        : [...selectedValues.value, newValue];
    } else {
      selectedValues.value = selectedValues.value
        .map((item: ItemAsObject) => item[props.itemTitle])
        .includes(newValue[props.itemTitle])
        ? selectedValues.value.filter(
            (val: ItemAsObject) =>
              val[props.itemTitle] !== newValue[props.itemTitle]
          )
        : [...selectedValues.value, newValue];
    }
  }
};

/**
 * Converts the displayed text depending on the selection mode
 */
const outputTransformed = computed(() => {
  if (typeof selectedValues.value === "string") {
    return selectedValues.value;
  } else if (!Array.isArray(selectedValues.value)) {
    return selectedValues.value[props.itemTitle].toString();
  } else if (
    selectedValues.value.every((item: any) => typeof item === "string")
  ) {
    return selectedValues.value.join(props.multiple ? ", " : " ");
  } else {
    return selectedValues.value
      .map((item) => item[props.itemTitle].toString())
      .join(props.multiple ? ", " : " ");
  }
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
  noItemsFound.value = false;
  const filteredItems = props.items.every(
    (item: any) => typeof item === "string"
  )
    ? props.items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    : props.items.filter((item: any) =>
        item[props.itemTitle]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  if (filteredItems.length === 0) {
    noItemsFound.value = true;
  }
  return filteredItems;
};

/**
 * Apply active class to hovered item
 * @param value of item
 */
const isActiveClass = (value: MucSelectItemTypes) =>
  value === activeItem.value ? "active" : "";

/**
 * Apply selected class to selected items
 * @param value of item
 */
const isSelectedClass = (value: MucSelectItemTypes) => {
  if (typeof value === "string")
    return selectedValues.value.includes(value) ? "selected" : "";

  if (Array.isArray(selectedValues.value)) {
    return selectedValues.value
      .map((item) => item[props.itemTitle])
      .includes(value[props.itemTitle])
      ? "selected"
      : "";
  }
  if (typeof selectedValues.value !== "string") {
    return selectedValues.value[props.itemTitle] === value[props.itemTitle]
      ? "selected"
      : "";
  }
};

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
  props.multiple && !noItemsFound.value
    ? "m-input-wrapper--multiselect multiselect"
    : "m-input-wrapper--select"
);
</script>

<style scoped>
.display-listbox {
  display: block !important;
}
</style>
