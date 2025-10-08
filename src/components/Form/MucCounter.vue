<template>
  <div class="grid">
    <div class="grid-item">
      <div class="content-centered">
        <muc-button
          v-on:click="clickedMinus"
          variant="secondary"
          :disabled="disableMinus"
          :aria-label="
            'Anzahl ' + label + ' reduzieren auf ' + (modelValue - 1)
          "
          :class="{ 'counter-btn--disabled': disableMinus }"
        >
          <template #default>
            <muc-icon icon="minus" />
          </template>
        </muc-button>
      </div>
      <p>
        <strong
          class="content-centered"
          style="color: var(--color-brand-main-blue)"
        >
          <span class="visually-hidden">
            Aktuell ausgewählte Anzahl für {{ label }} ist</span
          >
          {{ modelValue }}
        </strong>
      </p>
      <div class="content-centered">
        <muc-button
          v-on:click="clickedPlus"
          variant="secondary"
          :disabled="disablePlus"
          :aria-label="'Anzahl ' + label + ' erhöhen auf ' + (modelValue + 1)"
          :class="{ 'counter-btn--disabled': disablePlus }"
        >
          <template #default>
            <muc-icon icon="plus" />
          </template>
        </muc-button>
      </div>
    </div>
    <div class="grid-item content-centered-justify-left">
      <p v-if="link">
        <label>
          <muc-link
            tabindex="0"
            :label="label"
            :href="link"
          ></muc-link>
        </label>
      </p>

      <p v-else>
        <label>
          {{ label }}
        </label>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import { MucButton } from "../Button";
import { MucIcon } from "../Icon";
import { MucLink } from "../Link";

/**
 * Input value from the counter component.
 */
const modelValue = defineModel<number>({ default: 0 });

const {
  min,
  max,
  disabled = false,
} = defineProps<{
  /**
   * Label shown after the counter
   */
  label: string;

  /**
   * Optional minimum of counter
   */
  min?: number;

  /**
   * Optional maximum of counter
   */
  max?: number;

  /**
   * Optional link for label
   */
  link?: string;

  /**
   * Optionally disables the counter buttons
   */
  disabled?: boolean;
}>();

watch(
  () => min,
  () => {
    if (min && modelValue.value < min) {
      modelValue.value = min;
    }
  }
);
watch(
  () => max,
  () => {
    if (max && modelValue.value > max) {
      modelValue.value = max;
    }
  }
);

/**
 * Function increases the value of modelValue by 1
 */
const clickedPlus = () => modelValue.value++;
/**
 * Function decreases the value of modelValue by 1
 */
const clickedMinus = () => modelValue.value--;

/**
 * Computed property if this plus button should be disabled
 */
const disablePlus = computed(
  () => (!!max && !(modelValue.value < max)) || disabled
);

/**
 * Computed property if this minus button should be disabled
 */
const disableMinus = computed(
  () =>
    modelValue.value == 0 || (!!min && !(modelValue.value > min)) || disabled
);
</script>

<style scoped>
.content-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.content-centered-justify-left {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
}

.counter-btn--disabled {
  background-color: transparent;
  border-color: var(--mde-color-neutral-grey-x-light);
  color: var(--mde-color-neutral-grey-x-light);
}

.grid {
  display: grid;
  grid-template-columns: 175px minmax(500px, 1fr) repeat(
      auto-fill,
      minmax(175px, 1fr)
    );
}

.grid-item {
  display: flex;
  justify-content: space-between;
}

.grid-item > * {
  margin: 0 8px;
}

/* Desktop and tablet view */
@media (min-width: 768px) {
  .grid-item:nth-child(1) {
    order: 1;
  }
  .grid-item:nth-child(2) {
    order: 2;
  }
}

/* Mobile view */
@media (max-width: 767px) {
  .grid-item:nth-child(1) {
    order: 2;
  }
  .grid-item:nth-child(2) {
    order: 1;
  }
  .content-centered-justify-left {
    padding-bottom: 0.8rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
