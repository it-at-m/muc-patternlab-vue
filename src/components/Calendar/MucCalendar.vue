<template>
  <div>
    <div class="container-wrapper">
      <div class="caption">
        <muc-button
          @click="clickedPrev"
          variant="ghost"
          icon="chevron-left"
        />
        <muc-button
          class="header"
          variant="ghost"
          @click="broaderView"
        >
          <h3>{{ computedCaption }}</h3>
        </muc-button>
        <muc-button
          @click="clickedNext"
          variant="ghost"
          icon="chevron-right"
        />
      </div>
      <div style="min-height: 313px">
        <Transition
          :name="viewTransition"
          class="full-size"
        >
          <muc-calendar-year
            class="full-size"
            v-if="view === 'year'"
            :view-date="viewDate"
            @clicked="clickedMonth"
          />
        </Transition>
        <Transition
          :name="viewTransition"
          class="full-size"
        >
          <muc-calendar-month
            class="full-size"
            v-if="view === 'month'"
            :view-date="viewDate"
            @clicked="clickedMonth"
          />
        </Transition>
        <Transition
          :name="viewTransition"
          class="full-size"
        >
          <muc-calendar-date
            class="full-size"
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
import MucCalendarDate from "./MucCalendarDate.vue";
import MucCalendarMonth from "./MucCalendarMonth.vue";
import {
  CalendarTypes,
  isDateAfterOther,
  isEqualDates,
  isMucDateRange,
  MucCalendarKey,
  MucCalendarSelected,
} from "./MucCalendarType";
import MucCalendarYear from "./MucCalendarYear.vue";

type ViewType = "day" | "month" | "year";

const props = withDefaults(
  defineProps<{
    viewMonth?: Date;
    showAdjacentMonths?: boolean;
    variant?: CalendarTypes;
    disabled?: boolean;
  }>(),
  {
    showAdjacentMonths: false,
    variant: "single",
    disabled: false,
  }
);

/**
 * Determines the current shown month and year
 */
const viewDate = ref<Date>(
  props.viewMonth ||
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
);

const view = ref<ViewType>("day");

const viewTransition = ref<"view-broad" | "view-detail">();

/**
 * Currently selected date by the user
 */
const selectedDate = defineModel<MucCalendarSelected>("modelValue", {
  default: null,
});

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

// No modulo needed here!
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
    console.log("mventered - null");
  } else if (selectedDate.value instanceof Date) {
    selectedDate.value = [selectedDate.value];
    console.log("mventered - date");
  } else if (isMucDateRange(selectedDate.value)) {
    selectedDate.value = [
      selectedDate.value.from,
      selectedDate.value.to,
    ].filter((date) => date !== null);
    console.log("mventered - range");
  }

  selectedDate.value = selectedDate.value.includes(newValue)
    ? selectedDate.value.filter((val: Date) => val !== newValue)
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
  if (props.disabled) return;
  switch (props.variant) {
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

// TODO rename method
const clickedMonth = (date: Date) => {
  viewTransition.value = "view-detail";
  viewDate.value = new Date(date.getFullYear(), date.getMonth());
  detailedView();
};
// TODO caption better with header or muc-button?
const broaderView = () => {
  viewTransition.value = "view-broad";
  if (view.value === "day") view.value = "month";
  else if (view.value === "month") view.value = "year";
};

const detailedView = () => {
  if (view.value === "year") view.value = "month";
  else if (view.value === "month") view.value = "day";
};

provide(MucCalendarKey, {
  viewDate,
  selectedDate,
  variant: readonly(toRef(props.variant)),
  showAdjacentMonths: readonly(toRef(props.showAdjacentMonths)),
});
</script>

<style scoped>
/*animation - backwards is not working here because of interchanging of the animations*/

@keyframes appear-broad {
  0% {
    transform: scale(1.7);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes disappear-broad {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;

    transform: scale(0.7);
  }
}

@keyframes appear-detail {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes disappear-detail {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;

    transform: scale(1.7);
  }
}

.view-detail-enter-active {
  position: absolute;
  animation: appear-detail 0.3s ease-in;
}

.view-detail-leave-active {
  position: absolute;
  animation: disappear-detail 0.2s ease-in;
}

.view-broad-enter-active {
  position: absolute;
  animation: appear-broad 0.3s ease-in;
}

.view-broad-leave-active {
  position: absolute;
  animation: disappear-broad 0.2s ease-in;
}

/*animation*/

.full-size {
  width: 100%;
}

.container-wrapper {
  border: 1px solid var(--color-neutrals-blue);
  min-width: 330px;
  max-width: 900px;
  justify-content: center;
}

.caption {
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
</style>
