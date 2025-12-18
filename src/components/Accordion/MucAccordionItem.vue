<template>
  <div class="m-accordion__section">
    <h3
      class="m-accordion__section-header"
      :id="'heading-' + id"
    >
      <button
        @click="toggleCollapsable"
        class="m-accordion__section-button"
        :class="{ collapsed: collapsed }"
        type="button"
        :aria-expanded="!collapsed"
        :aria-controls="'content-' + id"
      >
        {{ header }}
        <svg
          aria-hidden="true"
          focusable="false"
          class="icon"
        >
          <use
            v-if="collapsed"
            xlink:href="#icon-chevron-down"
          ></use>
          <use
            v-else
            xlink:href="#icon-chevron-up"
          ></use>
        </svg>
      </button>
    </h3>
    <section
      ref="section"
      :id="'content-' + id"
      class="m-accordion__section-content"
      :class="{
        collapse: !collapsing,
        collapsing: collapsing,
        show: !collapsed,
      }"
      :aria-labelledby="'heading-' + id"
    >
      <div class="m-textplus__content m-content">
        <p>
          <slot name="text" />
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const { id, activeItems = [] } = defineProps<{
  /**
   * Id of accordion item.
   */
  id: string;
  /**
   * Heading of accordion item.
   */
  header: string;

  /**
   * List of active accordion items.
   */
  activeItems?: string[];
}>();

defineSlots<{
  /**
   * Formatted text can be put into this slot.
   */
  text(): unknown;
}>();

const emit = defineEmits<{
  /**
   * Event emitted to show content of the accordion item.
   */
  open: [id: string];

  /**
   * Event emitted to hide content of the accordion item.
   */
  close: [id: string];
}>();

/**
 * HTMLElement of section.
 */
const section = ref<HTMLElement>();

/**
 * Displays accordion item content.
 */
const collapsed = ref<boolean>(true);

/**
 * Accordion item is collapsing.
 */
const collapsing = ref<boolean>(false);

watch(
  () => activeItems,
  () => {
    if (!activeItems.includes(id) && !collapsed.value) {
      collapsed.value = true;
      section.value.style.height = section.value.scrollHeight + "px";
      collapsing.value = true;
      setTimeout(() => {
        section.value.style.height = "0";
      }, 0);
    }
  }
);

/**
 * Toggles the collapsed state of the accordion item content.
 */
const toggleCollapsable = () => {
  if (section.value) {
    collapsed.value = !collapsed.value;
    if (collapsed.value) {
      section.value.style.height = section.value.scrollHeight + "px";
      collapsing.value = true;
      emit("close", id);
      setTimeout(() => {
        section.value.style.height = "0";
      }, 0);
    } else {
      section.value.style.height = "0";
      collapsing.value = true;
      emit("open", id);
      setTimeout(() => {
        section.value.style.height = section.value.scrollHeight + "px";
      }, 0);
    }
  }
};

/**
 * Handles the end of the collapsing transition.
 */
const handleTransitionEnd = () => {
  collapsing.value = false;
  section.value.style.height = "";
};

onMounted(() => {
  if (section.value) {
    section.value.addEventListener("transitionend", handleTransitionEnd);
    if (activeItems.includes(id)) {
      collapsed.value = false;
    }
  }
});

onBeforeUnmount(() => {
  if (section.value) {
    section.value.removeEventListener("transitionend", handleTransitionEnd);
  }
});
</script>
