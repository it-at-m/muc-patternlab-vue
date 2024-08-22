<template>
  <div :class="{ false: 'selected' }">
    {{ date }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { convertIndexToDate } from "./MucCalendarType";

const props = withDefaults(
  defineProps<{
    date: number;
    index: number;
    viewDate: Date;
    selectedDate: Date;
  }>(),
  {}
);

const convertedDate = computed(() =>
  convertIndexToDate(props.viewDate, props.date)
);

const isSelected = computed(() =>
  convertedDate.value == props.selectedDate ? "selected" : ""
);
</script>

<style scoped>
.selected {
  background: var(--color-brand-main-blue);
  color: white;
}
</style>
