<template>
  <div
    class="card"
    @click="emit('click', $event)"
  >
    <div class="card-content">
      <div class="card-header">
        <slot name="headerPrefix" />
        <div>
          <div
            v-if="tagline"
            class="card-tagline"
          >
            {{ tagline }}
          </div>
          <div>
            <h3>{{ title }}</h3>
          </div>
        </div>
      </div>

      <div class="muc-divider" />

      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  /**
   * Triggered when card is clicked.
   * @param e Click-Event
   */
  (e: "click", click: Event): void;
}>();

defineProps<{
  title: string;
  tagline: string;
}>();

defineSlots<{
  /**
   * Icon shown above the callout. Defaults to icons matching the type.
   */
  headerPrefix(): any;
  /**
   * Content beneath the heading shown as text.
   */
  content(): any;
}>();
</script>

<style scoped>
.card {
  cursor: pointer;
  border: solid 1px var(--color-neutrals-blue);
  border-bottom: solid 5px var(--color-brand-main-blue);
  transition: background-color ease-in 150ms;
}

.card:hover {
  background-color: #f1f1f1;
}

.card-content {
  padding: 32px 24px;
}

.card-header {
  display: flex;
}

.card-tagline {
  font-size: 16px;
  font-family:
    Open Sans,
    sans-serif;
  color: #005a9f;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;

  padding-bottom: 4px;
}

.muc-divider {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
