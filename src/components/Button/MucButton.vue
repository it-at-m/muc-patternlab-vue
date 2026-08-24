<template>
  <button
    @click="handleClick($event)"
    :aria-disabled="disabled"
    class="m-button"
    :type="type"
    :class="{
      'm-button--secondary': variant === 'secondary',
      'm-button--ghost': variant === 'ghost',
      'm-button--primary': variant !== 'secondary' && variant !== 'ghost',
      'm-button--animated-right': iconAnimated,
      'm-button--animated-left': iconAnimated && iconShownLeft,
      disabled: disabled,
      copied: animateIconSpin,
    }"
  >
    <slot v-if="!iconShownLeft" />
    <muc-icon
      v-if="icon"
      :icon="icon"
      class="m-button__icon"
      :class="{
        'm-button__icon--after': !iconShownLeft && !iconOnly,
        'm-button__icon--before': iconShownLeft && !iconOnly,
        'no-left-margin': iconOnly,
      }"
    />
    <slot v-if="iconShownLeft" />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { MucIcon } from "../Icon";

type buttonType = "primary" | "secondary" | "ghost";

const {
  variant = "primary",
  disabled = false,
  iconAnimated = false,
  iconShownLeft = false,
  spinIconOnClick = false,
  type = undefined,
} = defineProps<{
  /**
   * The variant prop gives you easy access to several different button styles.
   *
   * Available are `primary`, `secondary` and `ghost`.
   */
  variant?: buttonType;
  /**
   * Lets you indicate that the button is not currently interactive or clickable.
   */
  disabled?: boolean;
  /**
   * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
   */
  icon?: string;
  /**
   * If the button should only contain an icon this must be set to true.
   */
  iconOnly?: boolean;
  /**
   * Whether the Icon should be animated on hover (slide-right) or not.
   *
   * Default is `false`
   */
  iconAnimated?: boolean;
  /**
   * Wether the Icon should spin when the button is clicked (used e.g. when building a "copy"-Button)
   *
   * Default is 'false';
   */
  spinIconOnClick?: boolean;
  /**
   * Whether the Icon should be shown on the left side of the button (slide-right) or not.
   *
   * Default is `false`
   */
  iconShownLeft?: boolean;
  /**
   * Type of the button according to https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-button-element
   */
  type?: "submit" | "button" | "reset" | undefined;
}>();

defineSlots<{
  /**
   * Display content inside the button.
   */
  default(): unknown;
}>();

const emit = defineEmits<
  /**
   * Triggered when button is clicked.
   * @param e Click-Event
   */
  (e: "click", value: Event) => void
>();

const animateIconSpin = ref(false);

/**
 * Emit a click event if not in disabled state.
 */
const handleClick = (event: Event) => {
  if (spinIconOnClick) {
    animateIconSpin.value = true;
    setTimeout(() => {
      animateIconSpin.value = false;
    }, 1000);
  }
  if (!disabled) emit("click", event);
};
</script>

<style scoped>
.no-left-margin {
  margin-left: 0;
}

.set-right-margin {
  margin-right: 0.75rem;
}

.set-left-margin {
  margin-left: 0.75rem;
}

.copied .m-button__icon {
  animation: rotate 1s ease-in-out;
}

.m-button--ghost {
  padding-right: 0;
}

[aria-disabled="true"] {
  pointer-events: none;
}
</style>
