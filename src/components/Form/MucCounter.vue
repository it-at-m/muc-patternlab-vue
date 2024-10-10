<template>
  <div class="wrapper">
    <MucButton
      v-on:click="clickedMinus"
      variant="secondary"
      :disabled="disableMinus"
      :aria-label="'Anzahl ' + label + ' reduzieren auf ' + (modelValue - 1)"
    >
      <template #default><muc-icon icon="minus" /></template>
    </MucButton>
    <p tabindex="0">
      <strong
        class="centered-text"
        style="color: var(--color-brand-main-blue)"
      >
        <span class="visually-hidden">
          Aktuell ausgewählte Anzahl für {{ label }} ist</span
        >
        {{ modelValue }}
      </strong>
    </p>
    <MucButton
      v-on:click="clickedPlus"
      variant="secondary"
      :disabled="disablePlus"
      :aria-label="'Anzahl ' + label + ' erhöhen auf ' + (modelValue + 1)"
    >
      <template #default><muc-icon icon="plus" /></template>
    </MucButton>
    <p v-if="link">
      <label class="centered-text">
        <muc-link
          tabindex="0"
          :label="label"
          :href="link"
        ></muc-link>
      </label>
    </p>

    <p v-else>
      <label class="centered-text">
        {{ label }}
      </label>
    </p>
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
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 0 8px;
}

.centered-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
