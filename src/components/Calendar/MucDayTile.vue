<template>
  <div
    v-if="isCurrMonth || !onlyCurrMonth"
    @click="clicked"
    :class="{
      'off-month': !isCurrMonth,
      selected: isSelected,
      'selected-range': isInRange,
    }"
  >
    {{ date.getDate() }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  CalendarTypes,
  isDateAfterOther,
  isEqualDates,
  isMucDateRange,
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

// eslint-disable-next-line vue/return-in-computed-property
const isSelected = computed(() => {
  if (props.selectedDate === null) {
    return false;
  }

  if (props.selectedDate instanceof Date) {
    return isEqualDates(props.selectedDate, props.date);
  }
  if (Array.isArray(props.selectedDate)) {
    return props.selectedDate.some((selected) =>
      isEqualDates(selected, props.date)
    );
  }
  if (isMucDateRange(props.selectedDate)) {
    const { from, to } = props.selectedDate;
    return (
      (from && isEqualDates(from, props.date)) ||
      (to && isEqualDates(to, props.date))
    );
  }
});

const isInRange = computed(() => {
  if (props.variant === "range" && isMucDateRange(props.selectedDate)) {
    return (
      props.selectedDate.from !== null &&
      props.selectedDate.to !== null &&
      isDateAfterOther(props.date, props.selectedDate.from) &&
      isDateAfterOther(props.selectedDate.to, props.date)
    );
  }

  return false;
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

.selected-range {
  background: var(--color-neutrals-blue-xlight);
}
.off-month {
  color: var(--color-neutrals-blue);
}
</style>
