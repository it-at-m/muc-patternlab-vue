<template>
  <div
    v-if="isCurrMonth || !onlyCurrMonth"
    @click="clicked"
    :class="{
      'off-month': !isCurrMonth,
      selected: isSelected,
    }"
  >
    {{ date.getDate() }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  CalendarTypes,
  isEqualDates,
  MucCalendarSelected,
} from "./MucCalendarType";

const props = withDefaults(
  defineProps<{
    date: Date;
    viewDate: Date;
    selectedDate: MucCalendarSelected;
    variant: CalendarTypes;
    onlyCurrMonth?: boolean;
  }>(),
  {
    onlyCurrMonth: false,
  }
);

const emit = defineEmits<{
  click: [date: Date];
}>();

const isSelected = computed(() => {
  if (props.selectedDate === null) return false;
  switch (props.variant) {
    case "single":
      return isEqualDates(props.selectedDate, props.date);
    case "multiple":
      return;
  }
});

const isCurrMonth = computed(
  () => props.date.getMonth() === props.viewDate.getMonth()
);

const clicked = () => emit("click", props.date);
</script>

<style scoped>
.selected {
  background: var(--color-brand-main-blue);
  color: white;
}

.off-month {
  color: var(--color-neutrals-blue);
}
</style>
