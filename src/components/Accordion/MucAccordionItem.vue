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
        <span
          v-if="showHeaderMetaIcon || showHeaderMetaText"
          class="m-accordion__section-meta"
        >
          <span
            v-if="showHeaderMetaIcon"
            class="m-accordion__meta-icon"
          >
            <slot name="headerMetaIcon" />
          </span>
          <slot name="headerMetaText" />
        </span>
        <muc-icon
          class="m-accordion__indicator"
          icon="chevron-down"
        />
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
import {
  computed,
  ComputedRef,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
  watch,
} from "vue";

import { MucIcon } from "../Icon";

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
   * Icon shown in the header meta section.
   */
  headerMetaIcon(): unknown;

  /**
   * Text shown in the header meta section.
   */
  headerMetaText(): unknown;

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

const slots = useSlots();

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
    if (!activeItems.includes(id) && !collapsed.value && section.value) {
      collapsed.value = true;
      section.value.style.height =
        section.value.scrollHeight + calculateMargin() + "px";
      collapsing.value = true;
      setTimeout(() => {
        if (section.value) {
          section.value.style.height = "0";
        }
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
      section.value.style.height =
        section.value.scrollHeight + calculateMargin() + "px";
      collapsing.value = true;
      emit("close", id);
      setTimeout(() => {
        if (section.value) {
          section.value.style.height = "0";
        }
      }, 0);
    } else {
      section.value.style.height = "0";
      collapsing.value = true;
      emit("open", id);
      setTimeout(() => {
        if (section.value) {
          section.value.style.height = section.value.scrollHeight + "px";
        }
      }, 0);
    }
  }
};

/**
 * Calculation of the margin of 1.5em to improve the animation
 */
const calculateMargin = () => {
  if (section.value) {
    const computedStyle = window.getComputedStyle(section.value);
    const fontSize = parseFloat(computedStyle.fontSize);
    return 1.5 * fontSize;
  } else {
    return 0;
  }
};

/**
 * Handles the end of the collapsing transition.
 */
const handleTransitionEnd = () => {
  collapsing.value = false;
  if (section.value) {
    section.value.style.height = "";
  }
};

const showHeaderMetaIcon: ComputedRef<boolean> = computed(
  () => !!slots["headerMetaIcon"]
);

const showHeaderMetaText: ComputedRef<boolean> = computed(
  () => !!slots["headerMetaText"]
);

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
