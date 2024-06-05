<template>
  <div class="m-form-group">
    <fieldset class="m-checkbox-group">
      <legend class="m-checkbox-group__legend">
        <h3 class="m-checkbox-group__heading">
          {{ heading }}
        </h3>
      </legend>
      <div
        v-if="isCollapsable"
        class="m-checkboxes m-checkboxes--collapse"
      >
        <slot name="checkboxes" />
        <div
          class="m-checkboxes__collapse__container"
          :class="isCollapsed"
          id="collapsed-checkboxes"
        >
          <slot name="collapsableCheckboxes" />
        </div>
        <muc-button
          variant="ghost"
          @click="toggleCollapse"
          :aria-expanded="!collapsed"
        >
          <span>Mehr </span>
          <svg
            aria-hidden="true"
            class="icon icon--after"
          >
            <use :href="'#icon-chevron-' + buttonIcon"></use>
          </svg>
        </muc-button>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";

const collapsed = ref(true);

withDefaults(
  defineProps<{
    heading: string;
    isCollapsable: boolean;
  }>(),
  {
    isCollapsable: false,
  }
);

defineSlots<{
  checkboxes(): any;

  collapsableCheckboxes(): any;
}>();

const isCollapsed = computed(() => (collapsed.value ? "collapse" : ""));

const buttonIcon = computed(() => (collapsed.value ? "down" : "up"));

const toggleCollapse = () => (collapsed.value = !collapsed.value);
</script>

<style scoped></style>
