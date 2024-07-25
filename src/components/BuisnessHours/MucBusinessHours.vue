<template>
  <div class="m-business-hours-toggle">
    <h3 class="m-business-hours-toggle__title visually-hidden">
      Öffnungszeiten
    </h3>
    <button
      v-if="toggleable"
      @click="toggleCollapsable"
      class="m-business-hours-toggle__trigger is-open"
      :class="collapsedClass"
      type="button"
      data-bs-toggle="collapse"
      :aria-expanded="!collapsed"
    >
      <muc-icon
        :icon="icon"
        additional-classes="icon--before"
      />
      <div v-if="todaysBusinessHours">
        <span> {{ todaysBusinessHours.weekDay }} geöffnet </span>
        <span
          v-for="(time, index) in todaysBusinessHours.openingHours"
          :key="index"
        >
          {{ time.from }} bis {{ time.to }}
          <span v-if="index < todaysBusinessHours.openingHours.length - 1">
            und
          </span>
        </span>
      </div>
      <muc-icon
        icon="chevron-down"
        additional-classes="icon--after"
      />
    </button>
    <div
      class="m-business-hours-toggle__content"
      :class="collapseClass"
    >
      <ul class="ml-0">
        <li
          v-for="day in businessHours"
          :key="day.weekDay"
          :class="highlightBusinessDay(day)"
        >
          <span class="weekday">{{ day.weekDay }}</span>
          <span class="hours">
            <div v-if="day.openingHours.length === 0">geschlossen</div>
            <div
              v-else
              v-for="time in day.openingHours"
              :key="time.from"
            >
              {{ time.from }} - {{ time.to }}
            </div>
          </span>
        </li>
      </ul>
      <div
        v-if="slots['hint']"
        class="hint"
      >
        <slot name="hint" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucIcon } from "../Icon";
import { BusinessHourType } from "./BusinessHourType";

const LOCALES = "de-DE";

const props = withDefaults(
  defineProps<{
    /**
     * This array includes all the opening hours for all days of the week.
     */
    businessHours: BusinessHourType[];

    /**
     * Lets you choose between the toggleable and fixed state of the component.
     * In the fixed state, no toggle button will be shown.
     */
    toggleable?: boolean;

    /**
     * Choose an icon for the toggle button. The default if none is given is the time icon.
     */
    icon?: string;
  }>(),
  {
    icon: "time",
    toggleable: false,
  }
);

let collapsed = ref(props.toggleable);

const slots = defineSlots<{
  /**
   * Display a hint beneath all the opening hours.
   */
  hint(): any;
}>();

/**
 * Toggles the collapsed state of the business hours section.
 */
const toggleCollapsable = () => {
  collapsed.value = !collapsed.value;
};

/**
 * Computes the CSS class for the collapse state.
 *
 * @returns {string} The CSS class for the collapse state.
 */
const collapseClass = computed(() => (collapsed.value ? "collapse" : ""));

/**
 * Computes the CSS class for the collapsed state.
 *
 * @returns {string} The CSS class for the collapsed state.
 */
const collapsedClass = computed(() => (collapsed.value ? "collapsed" : ""));

/**
 * Computes the short name of today's day.
 *
 * @returns {string} The short name of today's day (e.g., "Mo", "Di").
 */
const todaysDayShortName = computed(() => {
  const today = new Date();
  return today.toLocaleDateString(LOCALES, { weekday: "short" });
});

/**
 * Highlights the business day based on whether it has opening hours and if it is today's day.
 *
 * @param {BusinessHourType} businessHour - The business hour object to check.
 * @returns {string} The CSS class indicating if the business is open or closed.
 */
const highlightBusinessDay = (businessHour: BusinessHourType) => {
  if (businessHour.openingHours.length === 0) return "is-closed";
  if (businessHour.weekDay === todaysDayShortName.value) return "is-open";
};

/**
 * Computes today's business hours from the provided business hours.
 *
 * @returns {BusinessHourType | undefined} The business hours for today, if available.
 */
const todaysBusinessHours = computed(() =>
  props.businessHours.find((curr) => curr.weekDay === todaysDayShortName.value)
);
</script>

<style scoped></style>
