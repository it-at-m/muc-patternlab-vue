<template>
  <div class="m-component">
    <div class="container">
      <div class="m-component__grid">
        <div class="m-component__column">
          <section
            class="m-slider m-slider--visible-preview"
            aria-label="Slider mit Elementen"
            data-m-slider-splide="m-slider-comment"
          >
            <p class="visually-hidden">
              Dies ist ein Karussell mit rotierenden Elementen. Verwenden Sie
              die Pfeiltaste links und rechts oder die Buttons um zu navigieren.
            </p>
            <button
              class="previous-button is-control"
              @click="prevSlide"
            >
              <svg class="icon">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
              <span class="visually-hidden">Vorheriger Slide</span>
            </button>
            <Splide
              :options="sliderOptions"
              aria-label="My Favorite Images"
              ref="splide"
            >
              <slot />
            </Splide>
            <button
              class="next-button is-control"
              @click="nextSlide"
            >
              <svg class="icon">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
              <span class="visually-hidden">Nächster Slide</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Options } from "@splidejs/splide";

import { Splide } from "@splidejs/vue-splide";
import { onMounted, ref } from "vue";

defineSlots<{
  /**
   * MucSliderItems can be put into this slot.
   */
  default(): any;
}>();

const emit = defineEmits<{
  /**
   * Triggered when an item is clicked.
   * @param id of the clicked item
   */
  changeSlide: [index: number];
}>();

const splide = ref();

const nextSlide = () => {
  if (splide.value) {
    splide.value.go(">");
  }
};

const prevSlide = () => {
  if (splide.value) {
    splide.value.go("<");
  }
};

onMounted(() => {
  if (splide.value && splide.value.splide) {
    splide.value.splide.on("move", () => {
      emit("changeSlide", splide.value.splide.index);
    });
  }
});

const sliderOptions: Options = {
  autoplay: false,
  keyboard: true,
  slideFocus: true,
  lazyLoad: false,
  arrows: false,
  perMove: 1,
  gap: "0",
  type: "slide",
  perPage: 1,
  pagination: false,
  speed: 350,
  mediaQuery: "min",
  breakpoints: {
    1: {
      perPage: 1,
      gap: "1.5rem",
    },
    768: {
      perPage: 1,
      gap: "1.5rem",
    },
    1200: {
      perPage: 1,
      gap: "2rem",
    },
  },
};
</script>
