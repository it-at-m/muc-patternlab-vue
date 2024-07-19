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
        @click="toggleOptions"
        readonly
      />
      <span
        class="m-input__trigger"
        @click="toggleOptions"
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
          v-for="(option, index) in testOptions"
          :key="index"
          class="option"
          @mouseenter="activeIndex = index"
          :class="[isSelectedClass(index), isActiveClass(index)]"
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

const selectedItem = defineModel<string>("modelValue");

const showItems = ref<boolean>(false);

const activeIndex = ref<number>();

const selectedIndex = ref<number>();

const props = defineProps<{
  items: string[];
  label?: string;
  hint?: string;
}>();

const toggleOptions = () => {
  showItems.value = !showItems.value;
  activeIndex.value = selectedIndex.value;
};

const clicked = (index: number, option: string) => {
  selectedIndex.value = index;
  selectedItem.value = selectedItem.value === option ? "" : option;
  showItems.value = false;
};

const isActiveClass = (index: number) =>
  index === activeIndex.value ? "active" : "";

const isSelectedClass = (index: number) =>
  index === selectedIndex.value ? "selected" : "";

const displayOptions = computed(() =>
  showItems.value ? "display-listbox" : ""
);

const testOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
];
</script>

<style scoped>
.display-listbox {
  display: block !important;
}
</style>
