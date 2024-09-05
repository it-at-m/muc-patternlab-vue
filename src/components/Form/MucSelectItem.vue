<template>
  <span>
    {{ itemText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ItemAsObject } from "./MucSelect.vue";

const props = defineProps<{
  item: string | ItemAsObject;
  variableWithText: string;
}>();

/**
 * Defines the displayed value
 */
const itemText = computed(() =>
  typeof props.item === "string"
    ? props.item
    : props.item[props.variableWithText].toString()
);
</script>
