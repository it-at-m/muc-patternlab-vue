<template>
  <div
    v-if="isCurrMonth || showAdjacentMonths"
    @click="clicked"
    @keyup.enter="clicked"
    :class="{
      'disabled-tile': isDisabled,
      'off-month': !isCurrMonth,
      selected: isSelected,
      'selected-range': isInRange,
    }"
    :tabindex="!isDisabled ? '0' : '-1'"
    role="button"
    :aria-label="`${date.getDate()} auswählen`"
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

const { date, showAdjacentMonths = false } = defineProps<{
  /**
   * Date of for this tile to be displayed
   */
  date: Date;

  /**
   * Determines if this date should be shown or not, depending on the month - defaults to false
   */
  showAdjacentMonths?: boolean;
}>();

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
    return isEqualDates(mucCalData?.selectedDate.value, date);
  }

  //variant multiple
  if (Array.isArray(mucCalData?.selectedDate.value)) {
    return mucCalData?.selectedDate.value.some((selected) =>
      isEqualDates(selected, date)
    );
  }

  //variant range
  if (isMucDateRange(mucCalData!.selectedDate.value)) {
    const { from, to } = mucCalData!.selectedDate.value;
    return (from && isEqualDates(from, date)) || (to && isEqualDates(to, date));
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
      isDateAfterOther(date, mucCalData!.selectedDate.value.from) &&
      isDateAfterOther(mucCalData!.selectedDate.value.to, date)
    );
  }

  return false;
});

/**
 * Determines if this day-tile is disabled
 */
const isDisabled = computed(() => {
  const isAllowed = mucCalData?.allowedDates(date)
    ? mucCalData.allowedDates(date)
    : false;

  const isEarlierThanMin =
    mucCalData?.minDate.value !== undefined &&
    date.getTime() < mucCalData.minDate.value.getTime();

  const isLaterThanMax =
    mucCalData?.maxDate.value !== undefined &&
    date.getTime() > mucCalData.maxDate.value.getTime();

  return !isAllowed || isEarlierThanMin || isLaterThanMax;
});

/**
 * Is this day-tile in the current month or in the adjacent months
 */
const isCurrMonth = computed(
  () => date.getMonth() === mucCalData?.viewDate.value.getMonth()
);

/**
 * Action upon selecting a day - triggers emit
 */
const clicked = () => {
  if (!isDisabled.value) {
    emit("click", date);
  }
};
</script>

<style scoped>
@import "MucCalendar.css";

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
