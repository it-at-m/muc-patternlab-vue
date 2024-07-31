<template>
  <div
    class="m-business-hours-tile"
    :class="hasOpenClass"
  >
    <div class="m-business-hours-tile__weekday">
      {{ businessHours.weekDay }}
    </div>
    <div class="m-business-hours-tile__hours">
      <div v-if="businessHours.openingHours.length === 0">geschlossen</div>
      <div
        v-else
        v-for="time in businessHours.openingHours"
        :key="time.from"
      >
        {{ time.from }} - {{ time.to }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { BusinessHourType, isOpen } from "./BusinessHourType";
import { useBuisnessHoursDateTime } from "./useBuisnessHoursDateTime";

const { currentDay, currentTime } = useBuisnessHoursDateTime();

const props = withDefaults(
  defineProps<{
    closed?: boolean;
    businessHours: BusinessHourType;
  }>(),
  {
    closed: false,
  }
);

const hasOpenClass = computed(() =>
  isOpen(props.businessHours, currentDay.value, currentTime.value)
    ? "m-business-hours-tile--is-open"
    : "m-business-hours-tile--has-closed"
);
</script>

<style scoped></style>
