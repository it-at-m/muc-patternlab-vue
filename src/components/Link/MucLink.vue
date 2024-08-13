<template>
  <a
    :href="href"
    :target="target"
    class="m-link"
    :class="reversedUnderlineClass"
  >
    {{ label }}
    <slot name="icon">
      <muc-icon
        v-if="icon"
        :icon="icon"
        class="icon icon--after"
      />
    </slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucIcon } from "../Icon";

const props = withDefaults(
  defineProps<{
    label: string;
    href?: string;
    icon?: string;
    target?: string;
    noUnderline?: boolean;
  }>(),
  {
    noUnderline: false,
    href: "#",
    target: "_blank",
  }
);

const reversedUnderlineClass = computed(() =>
  props.noUnderline ? "m-link--reversed-underline" : ""
);
</script>

<style scoped></style>
