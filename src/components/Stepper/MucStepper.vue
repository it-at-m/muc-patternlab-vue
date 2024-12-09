<template>
  <div class="m-component m-component-form-progress">
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <ol class="m-form-steps">
            <template
              v-for="item in stepItems"
              :key="item.id"
            >
              <MucStepperItem
                :item="item"
                :is-active="isActive(item.id)"
                :is-done="isDone(item.id)"
                :disabled="disabled(item.id)"
                v-on:click="handleChange"
              />
            </template>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import MucStepperItem from "./MucStepperItem.vue";
import { StepperItem } from "./MucStepperTypes";

const {
  stepItems,
  activeItem,
  disablePreviousSteps = false,
} = defineProps<{
  /**
   * List of items displayed in the stepper
   */
  stepItems: StepperItem[];

  /**
   * Id of the current step item
   */
  activeItem: string;

  /**
   * Disables the previous steps
   */
  disablePreviousSteps?: boolean;
}>();

const emit = defineEmits<{
  /**
   * Triggered when an item is clicked.
   * @param e Click-Event
   * @param id
   */
  (e: "changeStep", id: string): void;
}>();

watch(
  () => activeItem,
  () => {
    indexOfActivItem.value = getIndexOfItem(activeItem);
  }
);

/**
 * Returns the index of an item in the array
 * @param id id of the item
 * @return index of the item
 */
const getIndexOfItem = (id: string) => {
  return stepItems.findIndex((item) => item.id === id);
};

/**
 * Index of activ item
 */
const indexOfActivItem = ref<number>(getIndexOfItem(activeItem));

/**
 * Checks if an item is the activ item
 * @param id id of the item
 * @return if item is an active item
 */
const isActive = (id: string) => id === activeItem;

/**
 * Checks if an item is done
 * @param id id of the item
 * @return if item is done
 */
const isDone = (id: string) => getIndexOfItem(id) < indexOfActivItem.value;

/**
 * Checks if an item is disabled
 * @param id id of the item
 * @return if item is disabled
 */
const disabled = (id: string) =>
  disablePreviousSteps && !isActive(id) && isDone(id);

/**
 * Handles a click on an item
 * @param id id of the item
 */
const handleChange = (id: string) => {
  emit("changeStep", id);
};
</script>

<style scoped></style>
