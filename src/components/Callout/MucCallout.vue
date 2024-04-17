<template>
  <div class="m-callout" :class="calloutClass" :aria-label="typeAriaLabel">
    <div class="m-callout__inner">
      <div class="m-callout__icon">
        <slot name="icon">
          <!-- fallback icon -->
          <component :is="fallbackCalloutIcon" />
        </slot>
      </div>
      <div class="m-callout__body">
        <div class="m-callout__body__inner">
          <div class="m-callout__headline">
            <slot name="header" />
          </div>
          <div class="m-callout__content">
            <slot name="content" class="m-callout__content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconCheck from './icon-check.vue'
import IconWarning from './icon-warning.vue'
import IconInformation from './icon-information.vue'

type calloutType = 'info' | 'warning' | 'success' | 'error'

const props = withDefaults(
  defineProps<{
    type?: calloutType
  }>(),
  {
    type: 'info'
  }
)

const fallbackCalloutIcon = computed(() => {
  switch (props.type) {
    case 'error' || 'warning':
      return IconWarning
    case 'success':
      return IconCheck
    default:
      return IconInformation
  }
})

const calloutClass = computed(() => {
  switch (props.type) {
    case 'error':
      return 'm-callout--error'
    case 'warning':
      return 'm-callout--warning'
    case 'success':
      return 'm-callout--success'
    default:
      return 'm-callout--default'
  }
})

const typeAriaLabel = computed(() => {
  switch (props.type) {
    case 'success':
      return 'Erfolgreich'
    case 'warning':
      return 'Warnung'
    case 'error':
      return 'Error'
    default:
      return 'Information'
  }
})
</script>

<style scoped>
/* class below may look unused but they are used dynamically! Do NOT remove them!! */
.m-callout--success {
  background-color: #f1f6f3;
  border-color: #95b9a2;
}
/* class below may look unused but they are used dynamically! Do NOT remove them!! */

.m-callout--success .m-callout__icon {
  background-color: #3a7f53;
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 90, 159, 0.2);
}

/* class below may look unused but they are used dynamically! Do NOT remove them!! */
.m-callout--error {
  background-color: #f8f2f2;
  border-color: #c79a9b;
}

/* class below may look unused but they are used dynamically! Do NOT remove them!! */
.m-callout--error .m-callout__icon {
  background-color: #984447;
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 90, 159, 0.2);
}

div.m-callout {
  padding-bottom: 16px;
}
</style>
