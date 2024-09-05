<template>
  <div
    v-if="isCurrMonth || showAdjacentMonths"
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
import { computed, inject } from "vue";

import {
  isDateAfterOther,
  isEqualDates,
  isMucDateRange,
  MucCalendarKey,
} from "./MucCalendarType";

const props = withDefaults(
  defineProps<{
    date: Date;
    showAdjacentMonths?: boolean;
  }>(),
  {
    showAdjacentMonths: false,
  }
);

const mucCalData = inject(MucCalendarKey);

const emit = defineEmits<{
  click: [date: Date];
}>();

// eslint-disable-next-line vue/return-in-computed-property
const isSelected = computed(() => {
  if (mucCalData?.selectedDate.value === null) {
    return false;
  }

  if (mucCalData?.selectedDate.value instanceof Date) {
    return isEqualDates(mucCalData?.selectedDate.value, props.date);
  }
  if (Array.isArray(mucCalData?.selectedDate.value)) {
    return mucCalData?.selectedDate.value.some((selected) =>
      isEqualDates(selected, props.date)
    );
  }
  if (isMucDateRange(mucCalData!.selectedDate.value)) {
    const { from, to } = mucCalData!.selectedDate.value;
    return (
      (from && isEqualDates(from, props.date)) ||
      (to && isEqualDates(to, props.date))
    );
  }
});

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

const isCurrMonth = computed(
  () => props.date.getMonth() === mucCalData?.viewDate.value.getMonth()
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
