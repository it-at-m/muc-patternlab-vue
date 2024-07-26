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

import { BusinessHourType } from "./BusinessHourType";

const LOCALES = "de-DE";

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
  props.closed
    ? "m-business-hours-tile--has-closed"
    : "m-business-hours-tile--is-open"
);

/**
 * Computes the short name of today's day.
 *
 * @returns {string} The short name of today's day (e.g., "Mo", "Di").
 */
const todaysDayShortName = computed(() => {
  const today = new Date();
  return today.toLocaleDateString(LOCALES, { weekday: "short" });
});

const isOpen = computed(() => {
  return false;
});
</script>

<style scoped></style>
