<template>
  <button
    type="button"
    role="switch"
    class="m-toggle-switch"
    :class="{ 'm-toggle-switch--pressed': modelValue }"
    :aria-checked="modelValue"
    :aria-label="labelLeft || labelRight ? undefined : 'Toggle'"
    :disabled="disabled"
    @click="toggle"
  >
    <span
      v-if="labelLeft"
      class="m-toggle-switch__label"
      :class="{
        'm-toggle-switch__label--active': labelRight ? !modelValue : modelValue,
      }"
    >
      {{ labelLeft }}
    </span>
    <span class="m-toggle-switch__indicator">
      <span />
    </span>
    <span
      v-if="labelRight"
      class="m-toggle-switch__label"
      :class="{ 'm-toggle-switch__label--active': modelValue }"
    >
      {{ labelRight }}
    </span>
  </button>
</template>

<script setup lang="ts">
/**
 * State of the toggle switch.
 */
const modelValue = defineModel<boolean>({ default: false });

const { disabled = false } = defineProps<{
  /**
   * Optional label displayed to the left of the toggle switch.
   */
  labelLeft?: string;
  /**
   * Optional label displayed to the right of the toggle switch.
   * When set, the left label is highlighted while off and this one while on.
   */
  labelRight?: string;
  /**
   * Disables the toggle switch.
   */
  disabled?: boolean;
}>();

/**
 * Switches the state of the toggle.
 */
const toggle = () => {
  modelValue.value = !modelValue.value;
};
</script>
