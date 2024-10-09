<template>
  <div
    v-if="isCurrMonth || showAdjacentMonths"
    @click="clicked"
    :class="{
      'disabled-tile': !mucCalData?.allowedDates(date),
      'off-month': !isCurrMonth,
      selected: isSelected,
      'selected-range': isInRange,
    }"
  >
    {{ date.getDate() }}
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";

import {
  isDateAfterOther,
  isEqualDates,
  isMucDateRange,
  MucCalendarKey,
} from "./MucCalendarType";

const props = withDefaults(
  defineProps<{
    /**
     * Date of for this tile to be displayed
     */
    date: Date;

    /**
     * Determines if this date should be shown or not, depending on the month - defaults to false
     */
    showAdjacentMonths?: boolean;

    disabled?: boolean;
  }>(),
  {
    showAdjacentMonths: false,
    disabled: false,
  }
);

/**
 * Injection of data needed for styling calculations
 */
const mucCalData = inject(MucCalendarKey);

const emit = defineEmits<{
  /**
   * Event emited after selecting a day
   */
  click: [date: Date];
}>();

/**
 * Determines if the day-tile is selected or not depending on the current variant
 */
// eslint-disable-next-line vue/return-in-computed-property
const isSelected = computed(() => {
  if (mucCalData?.selectedDate.value === null) {
    return false;
  }

  // variant single
  if (mucCalData?.selectedDate.value instanceof Date) {
    return isEqualDates(mucCalData?.selectedDate.value, props.date);
  }

  //variant multiple
  if (Array.isArray(mucCalData?.selectedDate.value)) {
    return mucCalData?.selectedDate.value.some((selected) =>
      isEqualDates(selected, props.date)
    );
  }

  //variant range
  if (isMucDateRange(mucCalData!.selectedDate.value)) {
    const { from, to } = mucCalData!.selectedDate.value;
    return (
      (from && isEqualDates(from, props.date)) ||
      (to && isEqualDates(to, props.date))
    );
  }
});

/**
 * Determines if this day-tile is inside the range of selected dates on type variant
 */
const isInRange = computed(() => {
  if (
    mucCalData?.variant.value === "range" &&
    isMucDateRange(mucCalData!.selectedDate.value)
  ) {
    return (
      mucCalData?.selectedDate.value.from !== null &&
      mucCalData?.selectedDate.value.to !== null &&
      isDateAfterOther(props.date, mucCalData!.selectedDate.value.from) &&
      isDateAfterOther(mucCalData!.selectedDate.value.to, props.date)
    );
  }

  return false;
});

/**
 * Is this day-tile in the current month or in the adjacent months
 */
const isCurrMonth = computed(
  () => props.date.getMonth() === mucCalData?.viewDate.value.getMonth()
);

/**
 * Action upon selecting a day - triggers emit
 */
const clicked = () => emit("click", props.date);
</script>

<style scoped>
.selected {
  background: var(--color-brand-main-blue);
  color: white;
}

.disabled-tile {
  filter: grayscale(80%);
  color: lightgray;
}

.selected-range {
  background: var(--color-neutrals-blue-xlight);
}
.off-month {
  color: var(--color-neutrals-blue);
}
</style>
