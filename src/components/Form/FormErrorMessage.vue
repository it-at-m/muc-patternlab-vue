<script setup lang="ts">
import { MucIcon } from "../Icon";
</script>

<template>
  <p
    class="m-error-message"
    role="alert"
    aria-live="polite"
  >
    <muc-icon
      class="icon icon--before"
      icon="warning--filled"
    />
    <span class="visually-hidden">Fehler:</span> <slot></slot>
  </p>
</template>
