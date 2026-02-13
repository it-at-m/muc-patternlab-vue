<template>
  <div class="m-component m-component-accordion">
    <div class="container">
      <div :class="{ 'm-component__grid': detailPageMargin }">
        <!-- A general CSS class should be provided for the narrower content width. Until then, content-width is used. -->
        <div
          :class="detailPageMargin ? 'm-component__column' : 'content-width'"
        >
          <div
            v-if="header"
            class="m-component__head"
          >
            <h2 class="m-component__heading">{{ header }}</h2>
          </div>
          <div class="m-component__body">
            <div
              class="m-accordion"
              :id="id"
            >
              <slot
                name="default"
                :active-items="activeItems"
                :on-open="onOpen"
                :on-close="onClose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const {
  header,
  multiple = false,
  defaultItem = undefined,
} = defineProps<{
  /**
   * Id of accordion
   */
  id: string;
  /**
   * Heading of accordion
   */
  header?: string;
  /**
   * Multiple MucAccordionItems can be active at the same time
   */
  multiple?: boolean;
  /**
   * Id of default active item
   */
  defaultItem?: string;
  /**
   * Use margins of detail pages
   */
  detailPageMargin?: boolean;
}>();

defineSlots<{
  /**
   * MucAccordionItems can be put into this slot.
   */
  default(): unknown;
}>();

/**
 * List of active MucAccordionItems
 */
const activeItems = ref<string[]>(defaultItem ? [defaultItem] : []);

/**
 * On open set as active Item
 */
const onOpen = (id: string) => {
  if (multiple) {
    activeItems.value.push(id);
  } else {
    activeItems.value = [id];
  }
};

/**
 * On close delete from active Items
 */
const onClose = (id: string) => {
  activeItems.value = activeItems.value.filter((item) => item !== id);
};
</script>
<style scoped>
/* CSS for desktop */
@media (min-width: 768px) {
  .content-width {
    width: 66.67%;
  }
}
</style>
