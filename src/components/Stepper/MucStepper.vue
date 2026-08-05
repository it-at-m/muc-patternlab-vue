<template>
  <div class="m-component m-component-form-progress">
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <h2 class="m-form-steps__heading visually-hidden">
            <span class="m-form-steps__heading-counter">
              Schritt
              <span class="m-form-steps__current-step">{{
                activePosition
              }}</span>
              <span class="m-form-steps__total-steps"
                >von {{ stepItems.length }}:</span
              >
            </span>
            <span class="m-form-steps__heading-text">{{ activeLabel }}</span>
          </h2>
          <ol class="m-form-steps">
            <muc-stepper-item
              v-for="item in stepItems"
              :key="item.id"
              :item="item"
              :is-active="isActive(item.id)"
              :is-done="isDone(item.id)"
              :disabled="disabled(item.id)"
              @click="handleChange"
            />
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

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
   * @param id of the clicked item
   */
  changeStep: [id: string];
}>();

/**
 * Returns the index of an item in the array
 * @param id id of the item
 * @return index of the item
 */
const getIndexOfItem = (id: string) => {
  return stepItems.findIndex((item) => item.id === id);
};

/**
 * Index of active item (recomputed when stepItems or activeItem change)
 */
const indexOfActivItem = computed(() => getIndexOfItem(activeItem));

const activePosition = computed(() =>
  indexOfActivItem.value >= 0 ? indexOfActivItem.value + 1 : 1
);

const activeLabel = computed(
  () => stepItems.find((item) => item.id === activeItem)?.label ?? ""
);

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
