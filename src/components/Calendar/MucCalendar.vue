<template>
  <div>
    <div class="container-wrapper">
      <div class="calendar-caption">
        <muc-button
          @click="clickedPrev"
          :aria-label="ariaLabelPrev"
          :disabled="disablePrev"
          variant="ghost"
          icon="chevron-left"
        />
        <muc-button
          class="header"
          variant="ghost"
          @click="disableViewChange ? null : broaderView()"
        >
          <h3>{{ computedCaption }}</h3>
        </muc-button>
        <muc-button
          @click="clickedNext"
          :aria-label="ariaLabelNext"
          :disabled="disableNext"
          variant="ghost"
          icon="chevron-right"
        />
      </div>
      <div class="container-view-size">
        <Transition
          class="transition"
          :css="!noAnimation"
          :name="viewTransition"
        >
          <muc-calendar-year
            v-if="view === 'year'"
            :view-date="viewDate"
            @clicked="clickedBroaderSelection"
          />
        </Transition>
        <Transition
          class="transition"
          :css="!noAnimation"
          :name="viewTransition"
        >
          <muc-calendar-month
            v-if="view === 'month'"
            :view-date="viewDate"
            @clicked="clickedBroaderSelection"
          />
        </Transition>
        <Transition
          class="transition"
          :css="!noAnimation"
          :name="viewTransition"
        >
          <muc-calendar-day
            v-if="view === 'day'"
            :variant="variant"
            :disabled="disabled"
            :show-adjacent-months="showAdjacentMonths"
            :selected-date="selectedDate"
            :view-date="viewDate"
            @clicked="clickedDate"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly, ref, toRef } from "vue";

import { MucButton } from "../Button";
import MucCalendarDay from "./MucCalendarDay.vue";
import MucCalendarMonth from "./MucCalendarMonth.vue";
import {
  AllowedDateFunction,
  CalendarTypes,
  isDateAfterOther,
  isEqualDates,
  isMucDateRange,
  MucCalendarKey,
  MucCalendarSelected,
  ViewType,
} from "./MucCalendarType";
import MucCalendarYear from "./MucCalendarYear.vue";

const {
  viewMonth,
  min,
  max,
  showAdjacentMonths = false,
  variant = "single",
  disabled = false,
  disableViewChange = false,
  noAnimation = false,
  allowedDates = () => true,
} = defineProps<{
  /**
   * Initial date to be displayed on the selection screen
   */
  viewMonth?: Date;

  /**
   * Earliest selectable date
   */
  min?: Date;

  /**
   * Latest selectable date
   */
  max?: Date;

  /**
   * Select if adjacent (before and after) month should be shown in the selection of the day. Defaults to false
   */
  showAdjacentMonths?: boolean;

  /**
   * Select the selection type for the user - single, multiple or range. Defaults to single
   */
  variant?: CalendarTypes;

  /**
   * Disable the selection of dates by the user. Defaults to false
   */
  disabled?: boolean;

  /**
   * Disables the change of the calendar view. Only show month view. Defaults to false
   */
  disableViewChange?: boolean;

  /**
   * Disables the animation
   */
  noAnimation?: boolean;

  /**
   * Function to determine if a date should be disabled or not
   */
  allowedDates?: AllowedDateFunction;
}>();

/**
 * Returns viewMonth as date
 * @returns {Date} Returns viewMonth as date
 */
const viewMonthDate = computed(() => {
  if (!viewMonth) return undefined;
  return viewMonth instanceof Date ? viewMonth : new Date(viewMonth);
});

/**
 * Returns min as date
 * @returns {Date} Returns min as date
 */
const minDate = computed(() => {
  if (!min) return undefined;
  return min instanceof Date ? min : new Date(min);
});

/**
 * Returns max as date
 * @returns {Date} Returns max as date
 */
const maxDate = computed(() => {
  if (!max) return undefined;
  return max instanceof Date ? max : new Date(max);
});

/**
 * Determines the current shown month and year
 */
const viewDate = ref<Date>(
  viewMonthDate.value ||
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
);

/**
 * Current shown view - days, months or years
 */
const view = ref<ViewType>("day");

/**
 * Current shown animation - zooming in or out
 */
const viewTransition = ref<"view-broad" | "view-detail">();

/**
 * Currently selected date / dates by the user. Defaults to null (nothing selected)
 */
const selectedDate = defineModel<MucCalendarSelected>("modelValue", {
  default: null,
});

/**
 * Modulo for calculating the start and end of a decade in which a year is located
 */
const DECADE_MODULO = 10;

/**
 * Caption above the user selection view - changes depending on the current view.
 */
const computedCaption = computed(() => {
  switch (view.value) {
    case "day":
      return viewDate.value.toLocaleDateString("de-De", {
        month: "long",
        year: "numeric",
      });
    case "month":
      return viewDate.value.toLocaleDateString("de-De", {
        year: "numeric",
      });
    case "year": {
      const firstYear =
        viewDate.value.getFullYear() - (viewDate.value.getFullYear() % 10);
      return `${firstYear} - ${firstYear + 11}`;
    }
    default:
      return "";
  }
});

/**
 * Iterates to the previous month, year or selection of years depending on the current view.
 */
const clickedPrev = () => {
  switch (view.value) {
    case "day":
      viewDate.value = new Date(
        viewDate.value.setMonth(viewDate.value.getMonth() - 1)
      );
      break;
    case "month":
      viewDate.value = new Date(
        viewDate.value.setFullYear(viewDate.value.getFullYear() - 1)
      );
      break;
    case "year":
      viewDate.value = new Date(
        viewDate.value.setFullYear(viewDate.value.getFullYear() - 12)
      );
  }
};

/**
 * Iterates to the next month, year or selection of years depending on the current view.
 */
const clickedNext = () => {
  switch (view.value) {
    case "day":
      viewDate.value = new Date(
        viewDate.value.setMonth(viewDate.value.getMonth() + 1)
      );
      break;
    case "month":
      viewDate.value = new Date(
        viewDate.value.setFullYear(viewDate.value.getFullYear() + 1)
      );
      break;
    case "year":
      viewDate.value = new Date(
        viewDate.value.setFullYear(viewDate.value.getFullYear() + 12)
      );
  }
};

/**
 * Aria label on previous button - changes depending on the current view.
 */
const ariaLabelPrev = computed(() => {
  switch (view.value) {
    case "day":
      return "Vorheriger Monat";
    case "month":
      return "Vorheriges Jahr";
    case "year": {
      return "Vorherige Jahre";
    }
    default:
      return "";
  }
});

/**
 * Aria label on next button - changes depending on the current view.
 */
const ariaLabelNext = computed(() => {
  switch (view.value) {
    case "day":
      return "Nächster Monat";
    case "month":
      return "Nächstes Jahr";
    case "year":
      return "Weitere Jahre";
    default:
      return "";
  }
});

/**
 * Determines if this previous button is disabled.
 */
const disablePrev = computed(() => {
  if (minDate.value) {
    switch (view.value) {
      case "day":
        return (
          viewDate.value.getFullYear() < minDate.value.getFullYear() ||
          (viewDate.value.getFullYear() === minDate.value.getFullYear() &&
            viewDate.value.getMonth() <= minDate.value.getMonth())
        );
      case "month":
        return viewDate.value.getFullYear() <= minDate.value.getFullYear();
      case "year": {
        return (
          viewDate.value.getFullYear() -
            (viewDate.value.getFullYear() % DECADE_MODULO) <=
          minDate.value.getFullYear()
        );
      }
      default:
        return false;
    }
  }
  return false;
});

/**
 * Determines if this next button is disabled.
 */
const disableNext = computed(() => {
  if (maxDate.value) {
    switch (view.value) {
      case "day":
        return (
          viewDate.value.getFullYear() > maxDate.value.getFullYear() ||
          (viewDate.value.getFullYear() === maxDate.value.getFullYear() &&
            viewDate.value.getMonth() >= maxDate.value.getMonth())
        );
      case "month":
        return viewDate.value.getFullYear() >= maxDate.value.getFullYear();
      case "year":
        return (
          viewDate.value.getFullYear() -
            (viewDate.value.getFullYear() % DECADE_MODULO) +
            10 >=
          maxDate.value.getFullYear()
        );
      default:
        return false;
    }
  }
  return false;
});

/**
 * If a different type as single was previously chosen - the datatype will be converted to a single date.
 * The newly selected date will be compared to the current selected date and either deleted or set.
 * @param newValue is the newly selected date.
 */
const updateMVSingle = (newValue: Date) => {
  console.log(isMucDateRange(selectedDate.value));
  if (Array.isArray(selectedDate.value) || isMucDateRange(selectedDate.value)) {
    selectedDate.value = Object.values(selectedDate.value)[0];
  }

  selectedDate.value =
    selectedDate.value === null ||
    !isEqualDates(selectedDate.value as Date, newValue)
      ? newValue
      : null;
};

/**
 * If a different type as single was previously chosen - the datatype will be converted to a list of dates.
 * The newly selected date will be compared to the current selected dates and either deleted from or appended to the list.
 * @param newValue is the newly selected date.
 */
const updateMVMultiple = (newValue: Date) => {
  if (selectedDate.value === null) {
    selectedDate.value = [];
  } else if (selectedDate.value instanceof Date) {
    selectedDate.value = [selectedDate.value];
  } else if (isMucDateRange(selectedDate.value)) {
    selectedDate.value = [
      selectedDate.value.from,
      selectedDate.value.to,
    ].filter((date) => date !== null);
  }

  selectedDate.value = selectedDate.value.some(
    (date) => date.getTime() === newValue.getTime()
  )
    ? selectedDate.value.filter(
        (val: Date) => val.getTime() !== newValue.getTime()
      )
    : [...selectedDate.value, newValue];
};

/**
 * If a different type as single was previously chosen - the datatype will be converted to a date range.
 * The newly selected date will set as from or to depending on if to is already set.
 * @param newValue is the newly selected date.
 */
const updateMVRange = (newValue: Date) => {
  if (selectedDate.value === null || Array.isArray(selectedDate.value))
    selectedDate.value = { from: null, to: null };
  else if (selectedDate.value instanceof Date)
    selectedDate.value = { from: selectedDate.value, to: null };

  selectedDate.value =
    !selectedDate.value.from || selectedDate.value.to
      ? { from: newValue, to: null }
      : isDateAfterOther(selectedDate.value.from, newValue)
        ? { from: newValue, to: selectedDate.value.from }
        : { from: selectedDate.value.from, to: newValue };
};

/**
 * Handles a date click event based on the selected variant.
 * Depending on whether the variant is "single", "multiple", or "range", it calls the appropriate function to update the selected date(s).
 * @param date - The date that was clicked.
 */
const clickedDate = (date: Date) => {
  if (disabled) return;
  switch (variant) {
    case "single":
      updateMVSingle(date);
      break;
    case "multiple":
      updateMVMultiple(date);
      break;
    case "range":
      updateMVRange(date);
      break;
  }
};

/**
 * Clicked on a broader selection (month or year) to be set for the more detailed view.
 * Changes view afterward.
 * @param date date within in the clicked month or year
 */
const clickedBroaderSelection = (date: Date) => {
  viewTransition.value = "view-detail";
  viewDate.value = new Date(date.getFullYear(), date.getMonth());
  detailedView();
};

/**
 * Changes view to a broader view-type (month or year)
 */
const broaderView = () => {
  viewTransition.value = "view-broad";
  if (view.value === "day") view.value = "month";
  else if (view.value === "month") view.value = "year";
};

/**
 * Changes view to a detailed view-type (day or month)
 */
const detailedView = () => {
  if (view.value === "year") view.value = "month";
  else if (view.value === "month") view.value = "day";
};

/**
 * Providing data for the day selection tile - reduces amount of props
 */
provide(MucCalendarKey, {
  viewDate,
  minDate,
  maxDate,
  selectedDate,
  variant: readonly(toRef(() => variant)),
  showAdjacentMonths: readonly(toRef(() => showAdjacentMonths)),
  allowedDates: allowedDates,
});
</script>

<style>
.calendar-caption > .m-button--ghost.disabled {
  background-color: var(--color-neutrals-blue-xlight);
  border-color: var(--color-neutrals-blue-xlight);
}
</style>

<style scoped>
/*animation - backwards is not working here because of interchanging of the animations*/
@keyframes appear-broad {
  0% {
    transform: scale(calc(1 + var(--calendar-animation-scaling)));
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes disappear-broad {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(calc(1 - var(--calendar-animation-scaling)));
    opacity: 0;
  }
}

@keyframes appear-detail {
  0% {
    transform: scale(calc(1 - var(--calendar-animation-scaling)));
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes disappear-detail {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(calc(1 + var(--calendar-animation-scaling)));
    opacity: 0;
  }
}

.transition {
  position: absolute;
}

.view-detail-enter-active {
  animation: appear-detail var(--calendar-animation-duration)
    var(--calendar-animation-timing);
}

.view-detail-leave-active {
  animation: disappear-detail var(--calendar-animation-duration)
    var(--calendar-animation-timing);
}

.view-broad-enter-active {
  animation: appear-broad var(--calendar-animation-duration)
    var(--calendar-animation-timing);
}

.view-broad-leave-active {
  animation: disappear-broad var(--calendar-animation-duration)
    var(--calendar-animation-timing);
}

/*animation*/

.container-wrapper {
  --calendar-animation-scaling: 0.1;
  --calendar-animation-duration: 0.4s;
  --calendar-animation-timing: ease-in-out;

  border: 1px solid var(--color-neutrals-blue);
  min-width: 330px;
  max-width: 900px;
  justify-content: center;
}

.calendar-caption {
  padding: 5px;
  border-bottom: 1px solid var(--color-neutrals-blue);
  background-color: var(--color-neutrals-blue-xlight);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
}

.header {
  justify-content: center;
  display: flex;
  cursor: pointer;
}

.container-view-size {
  --cal-container-view-height: 313px;
  min-height: var(--cal-container-view-height);
  height: var(--cal-container-view-height);
  overflow: hidden;
  position: relative;
}
</style>
