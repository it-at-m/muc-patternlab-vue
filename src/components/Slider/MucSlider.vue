<template>
  <div
    class="m-component m-component-slider-comment"
    style="overflow: hidden"
  >
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <section
            class="m-slider m-slider--visible-preview"
            aria-label="Slider mit Elementen"
            data-m-slider-splide="m-slider-comment"
          >
            <button
              v-if="showBackArrow"
              aria-label="Vorheriges Element"
              class="previous-button is-control"
              @click="prevSlide"
            >
              <svg class="icon">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </button>
            <splide
              :options="mucSliderOptions"
              aria-label="Dies ist ein Karussell mit rotierenden Elementen. Verwenden Sie
              die Pfeiltaste links und rechts oder die Buttons um zu navigieren."
              ref="splide"
            >
              <slot />
            </splide>
            <button
              v-if="showNextArrow"
              aria-label="Nächstes Element"
              class="next-button is-control"
              @click="nextSlide"
            >
              <svg class="icon">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Splide } from "@splidejs/vue-splide";
import { computed, onMounted, ref, useTemplateRef } from "vue";

import { mucSliderOptions } from "./MucSliderOptions";

defineSlots<{
  /**
   * MucSliderItems can be put into this slot.
   */
  default(): unknown;
}>();

const emit = defineEmits<{
  /**
   * Triggered when an item is clicked.
   * @param id of the clicked item
   */
  changeSlide: [index: number];
}>();

const splide = useTemplateRef("splide");

/**
 * Index of the current silde
 */
const currentSlide = ref<number>(0);

/**
 * Length of the splide
 */
const splideLength = ref<number>(0);

/**
 * Set next slide
 */
const nextSlide = () => {
  if (splide.value) {
    splide.value.go(">");
  }
};

/**
 * Set previous slide
 */
const prevSlide = () => {
  if (splide.value) {
    splide.value.go("<");
  }
};

/**
 * Computed property set back button
 */
const showBackArrow = computed(() => currentSlide.value > 0);

/**
 * Computed property set next button
 */
const showNextArrow = computed(
  () => currentSlide.value < splideLength.value - 1
);

onMounted(() => {
  if (splide.value && splide.value.splide) {
    splideLength.value = splide.value.length;
    splide.value.splide.on("move", () => {
      if (splide.value && splide.value.splide) {
        currentSlide.value = splide.value.splide.index;
        emit("changeSlide", splide.value.splide.index);
      }
    });
  }
});
</script>

<style scoped>
.m-component-slider-comment {
  padding-right: 1.8rem;
  padding-left: 1.8rem;
}
</style>
