<template>
  <div
    class="m-form-group"
    ref="selectComponent"
  >
    <label
      v-if="label"
      :for="'select-' + id"
      class="m-label"
      tabindex="0"
    >
      {{ label }}
    </label>
    <p
      v-if="hint"
      class="m-hint"
      :id="'select-hint-' + id"
      tabindex="0"
    >
      {{ hint }}
    </p>
    <div
      ref="selectComponentWrapper"
      @click="openDropdown"
    >
      <select
        ref="elementRef"
        :id="'select-' + id"
        :aria-describedby="hint ? 'select-hint-' + id : undefined"
        class="m-select"
        :multiple="multiple"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Choices from "choices.js";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

import { ChoiceType, ItemAsObject, MucSelectItemTypes } from "./MucSelectTypes";

const selectComponentWrapper = ref<HTMLDivElement>();
const elementRef = ref<HTMLSelectElement>();
const choicesInstance = ref<Choices>();
const dropdownIsOpen = ref<boolean>(false);

/**
 * Exposed selected value / values
 */
const selectedValues = defineModel<MucSelectItemTypes | MucSelectItemTypes[]>(
  "modelValue",
  {
    default: [],
  }
);

const {
  items,
  multiple = false,
  noItemFoundMessage = "No items found.",
  itemTitle = "title",
  placeholder,
} = defineProps<{
  /**
   * Unique identifier for the select. Required property used to associate the select with its label and hint text for accessibility.
   */
  id: string;
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

  /**
   * Optional placeholder shown on the input
   */
  placeholder?: string;
}>();

/**
 * Creates an array with the displayed labels.
 */
const displayedLabels = computed(() => {
  const displayedItems: string[] = [];
  items.forEach((item) => {
    if (typeof item === "string") {
      displayedItems.push(item);
    } else {
      displayedItems.push(item[itemTitle] as string);
    }
  });
  return displayedItems;
});

watch(
  () => [
    displayedLabels.value,
    multiple,
    noItemFoundMessage,
    itemTitle,
    placeholder,
  ],
  () => {
    if (choicesInstance.value) {
      choicesInstance.value.destroy();
      createChoicesInstance();
    }
  }
);

/**
 * Creates a new instance of Choices in which the current configuration is set.
 * Must be executed for every change, as some of the values cannot be changed on the existing instance.
 */
const createChoicesInstance = () => {
  choicesInstance.value = new Choices(elementRef.value, {
    allowHTML: true,
    itemSelectText: "",
    noResultsText: noItemFoundMessage,
    placeholder: !!placeholder,
    placeholderValue: placeholder,
    removeItemButton: multiple,
    searchFields: ["label"],
    fuseOptions: {
      includeScore: false,
      threshold: 0.0,
      distance: 100,
      minMatchCharLength: 1,
      ignoreLocation: true,
      ignoreFieldNorm: true,
      isCaseSensitive: false,
    },
  });
  addChoices();
  setDefaultSelectedValue();
  choicesInstance.value.passedElement.element.addEventListener(
    "change",
    updateSelectedValues
  );
};

/**
 * Replaces the selection options in the existing instance of Choices.
 */
const addChoices = () => {
  if (choicesInstance.value) {
    choicesInstance.value.clearStore();
    const newChoices: ChoiceType[] = [];
    displayedLabels.value.forEach((item, index) => {
      newChoices.push({
        value: index.toString(),
        label: item,
        selected: false,
        disabled: false,
      });
    });
    choicesInstance.value.setChoices(newChoices);
  }
};

/**
 * Updates the modelValue when the selected option changes.
 */
const updateSelectedValues = () => {
  if (choicesInstance.value) {
    const values = choicesInstance.value.getValue(true);
    if (Array.isArray(values)) {
      const selectedItems: MucSelectItemTypes[] = [];
      values.forEach((item) => selectedItems.push(items[parseInt(item)]));
      selectedValues.value = selectedItems;
    } else {
      selectedValues.value = items[parseInt(values)];
    }
  }
};

watch(
  () => selectedValues.value,
  () => {
    setDefaultSelectedValue();
  }
);

/**
 * Sets the preselected option in the current instance of Choices.
 */
const setDefaultSelectedValue = () => {
  if (choicesInstance.value) {
    if (selectedValues.value && selectedValues.value.length != 0) {
      if (Array.isArray(selectedValues.value)) {
        const selectedItems: string[] = [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        selectedValues.value.forEach((value: any) =>
          selectedItems.push(
            items
              .findIndex((item) => {
                if (typeof item === "string") {
                  return item == value;
                } else {
                  return item[itemTitle] == value[itemTitle];
                }
              })
              .toString()
          )
        );
        choicesInstance.value.setChoiceByValue(selectedItems);
      } else {
        const itemId = items.findIndex((item) => {
          if (typeof item === "string") {
            return item == selectedValues.value;
          } else {
            const value = selectedValues.value as ItemAsObject;
            return item[itemTitle] == value[itemTitle];
          }
        });
        choicesInstance.value.setChoiceByValue(itemId.toString());
      }
    } else {
      choicesInstance.value.setChoiceByValue("");
    }
  }
};

/**
 * Workaround to open dropdown after click
 */
const openDropdown = (event: Event) => {
  event.stopPropagation();
  const dropdown =
    selectComponentWrapper.value?.parentElement?.querySelector<HTMLElement>(
      ".choices__list.choices__list--dropdown"
    );
  const dropdown_input =
    selectComponentWrapper.value?.parentElement?.querySelector<HTMLElement>(
      ".choices__input.choices__input--cloned"
    );

  if (dropdownIsOpen.value) {
    if (dropdown && dropdown.classList.contains("is-active")) {
      dropdown.classList.remove("is-active");
      dropdown.setAttribute("aria-expanded", "false");
      dropdownIsOpen.value = false;
    }
  } else {
    if (dropdown && !dropdown.classList.contains("is-active")) {
      dropdown.classList.add("is-active");
      dropdown.setAttribute("aria-expanded", "true");

      if (dropdown_input) {
        dropdown_input.focus();
      }
      dropdownIsOpen.value = true;
    }
  }
};

onMounted(() => {
  if (elementRef.value) {
    createChoicesInstance();
  }
});

onBeforeUnmount(() => {
  if (choicesInstance.value) {
    choicesInstance.value.destroy();
  }
});
</script>

<style>
.choices {
  overflow: visible !important;
}
</style>
