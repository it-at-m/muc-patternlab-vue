<template>
  <div class="m-component m-component-form-progress">
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <ol class="m-form-steps">
            <template v-for="item in stepItems" :key="item.id">
              <MucStepperItem
                  :item="item"
                  :is-active="isActive(item.id)"
                  :is-done="isDone(item.id)"
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

import {StepperItem} from "./MucStepperTypes";
import { ref, watch } from "vue";
import MucStepperItem from "./MucStepperItem.vue";

const {
  stepItems,
  activeItem,
} = defineProps<{
  /**
   * List of items displayed in the stepper
   */
  stepItems: StepperItem[];

  /**
   * Id of the current step item
   */
  activeItem: string;

}>();

const emit = defineEmits<{
  /**
   * Triggered when step is clicked.
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

const getIndexOfItem = (id: string) => {
  return stepItems.findIndex(item => item.id === id);
};

const indexOfActivItem = ref<number>(getIndexOfItem(activeItem));

const isActive = (id: string) => id === activeItem;

const isDone = (id: string) => getIndexOfItem(id) < indexOfActivItem.value;

const handleChange = (id: string) => {
  emit("changeStep", id);
};

</script>

<style scoped>

</style>
