<template>
  <div class="m-form-group">
    <label class="m-label">
      {{ label }}
    </label>
    <div class="m-input-wrapper m-input-wrapper--select">
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
        @mouseleave="activeIndex = -1"
      >
        <li
          v-for="(option, index) in props.items"
          :key="index"
          class="option"
          @mouseenter="activeIndex = index"
          :class="isActiveClass(index)"
          @click="clicked(index, option)"
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
const activeIndex = ref<number>();

/**
 * Index of currently selected item
 */
const selectedIndex = ref<number>();

const props = defineProps<{
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
}>();

/**
 * Toggles the list of items and sets the previously selected item as active
 */
const toggleItemList = () => {
  showItems.value = !showItems.value;
  activeIndex.value = selectedIndex.value;
};

/**
 * Actions upon clicking an item
 * @param index clicked index
 * @param option clicked item value
 */
const clicked = (index: number, option: string) => {
  selectedIndex.value = index;
  selectedItem.value = selectedItem.value === option ? "" : option;
  showItems.value = false;
};

/**
 * Apply active class to hovered item
 * @param index of item
 */
const isActiveClass = (index: number) =>
  index === activeIndex.value ? "active" : "";

/**
 * Display the list of item by changing the css-display property
 */
const displayOptions = computed(() =>
  showItems.value ? "display-listbox" : ""
);
</script>

<style scoped>
.display-listbox {
  display: block !important;
}
</style>
