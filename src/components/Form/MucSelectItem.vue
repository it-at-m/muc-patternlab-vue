<template>
  <span>
    {{ itemText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucSelectItemTypes } from "./MucSelectTypes";

const { item, itemLabel } = defineProps<{
  /**
   * Individual item to display inside the MucSelect component
   */
  item: MucSelectItemTypes;
  /**
   * A key of the `item` object, only required
   */
  itemLabel?: string;
}>();

/**
 * Defines the displayed value
 */
const itemText = computed(() =>
  typeof item === "string" ? item : item[itemLabel!].toString()
);
</script>
