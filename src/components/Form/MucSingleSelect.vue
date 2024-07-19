<template>
  <div class="m-form-group">
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
        :value="selectedItem"
        @click="toggleItemList"
        readonly
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
        @mouseleave="activeItem = ''"
      >
        <li
          v-for="(option, index) in props.items"
          :key="index"
          class="option"
          @mouseenter="activeItem = option"
          :class="isActiveClass(option)"
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
import { computed, ref } from "vue";

/**
 * Selected item exposed as modelvalue
 */
const selectedItem = defineModel<string>("modelValue");

/**
 * If list of items is shown
 */
const showItems = ref<boolean>(false);

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
  activeItem.value = selectedItem.value;
};

/**
 * Actions upon clicking an item
 * @param index clicked index
 * @param option clicked item value
 */
const clicked = (option: string) => {
  selectedItem.value = selectedItem.value === option ? "" : option;
  showItems.value = false;
};

/**
 * Apply active class to hovered item
 * @param index of item
 */
const isActiveClass = (index: string) =>
  index === activeItem.value ? "active" : "";

/**
 * Display the list of item by changing the css-display property
 */
const displayOptions = computed(() =>
  showItems.value ? "display-listbox" : ""
);

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
