<template>
  <button
    @click="handleClick"
    :aria-disabled="disabled"
    class="m-button"
    :class="[buttonVariantClass, iconAnimatedClass, disabledClass]"
  >
    <span>
      <muc-icon
        v-if="icon && iconShownLeft"
        :icon="icon"
        class="m-button__icon set-right-margin"
        :class="{ 'no-left-margin': !iconAnimated }"
      />
      <slot />
      <muc-icon
        v-if="icon && !iconShownLeft"
        :icon="icon"
        class="m-button__icon"
        :class="{ 'no-left-margin': !slots.default }"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

import { MucIcon } from "../Icon";

type buttonType = "primary" | "secondary" | "ghost";

const slots = useSlots();

const {
  variant = "primary",
  disabled = false,
  iconAnimated = false,
  iconShownLeft = false,
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
   * Whether the Icon should be animated on hover (slide-right) or not.
   *
   * Default is `false`
   */
  iconAnimated?: boolean;
  /**
   * Whether the Icon should be shown on the left side of the button (slide-right) or not.
   *
   * Default is `false`
   */
  iconShownLeft?: boolean;
}>();

defineSlots<{
  /**
   * Display content inside the button.
   */
  default(): any;
}>();

const emit = defineEmits<{
  /**
   * Triggered when button is clicked.
   * @param e Click-Event
   */
  (e: "click"): void;
}>();

const buttonVariantClass = computed(() => {
  switch (variant) {
    case "secondary":
      return "m-button--secondary";
    case "ghost":
      return "m-button--ghost";
    default:
      return "m-button--primary";
  }
});

const iconAnimatedClass = computed(() => {
  if (iconAnimated && iconShownLeft) {
    return "m-button--animated-left";
  } else if (iconAnimated) {
    return "m-button--animated-right";
  } else {
    return "";
  }
});

/**
 * Emit a click event if not in disabled state.
 */
const handleClick = () => {
  if (!disabled) emit("click");
};

/**
 * Ensure that the disabled button style is applied when it is in the 'disabled' state.
 */
const disabledClass = computed(() => (disabled ? "disabled" : ""));
</script>

<style scoped>
.no-left-margin {
  margin-left: 0;
}

.set-right-margin {
  margin-right: 0.75rem;
}

[aria-disabled="true"] {
  pointer-events: none;
}
</style>
