<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="m-button"
    :class="[buttonVariantClass, iconAnimatedClass]"
  >
    <span>
      <slot />
      <muc-icon
        v-if="icon"
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
} = defineProps<{
  /**
   * The variant prop gives you easy access to several different button styles.
   *
   * Available are `primary`, `secondary` and `ghost`.
   */
  variant?: buttonType;
  /**
   * Let`s you indicate that the button is not currently interactive or clickable.
   */
  disabled?: boolean;
  /**
   * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
   */
  icon?: string;
  /**
   * Wether the Icon should be animated on hover (slide-right) or not.
   *
   * Default is `false`
   */
  iconAnimated?: boolean;
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

const iconAnimatedClass = computed(() =>
  iconAnimated ? "m-button--animated-right" : ""
);

const handleClick = () => {
  emit("click");
};
</script>

<style scoped>
.no-left-margin {
  margin-left: 0;
}
</style>
