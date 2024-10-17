<template>
  <div class="m-component m-component-form-progress">
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <h2 class="visually-hidden">Schritt {{ indexOfActivItem + 1 }} von {{ stepItems.length }}: Projektinformationen</h2>
          <ol class="m-form-steps">
            <template v-for="item in stepItems" :key="item.id">
              <MucStepperItem
                  :item="item"
                  :is-active="isActive(item.id)"
                  :is-done="isDone(item.id)"
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

const indexOfActivItem = ref<number>(0);

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
   * Triggered when step item is clicked.
   * @param e Click-Event
   */
  (e: "changeStep"): void;
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

const isActive = (id: string) => id === activeItem;

const isDone = (id: string) => getIndexOfItem(id) < indexOfActivItem.value;


</script>

<style scoped>

</style>
