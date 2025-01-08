import type { Options } from "@splidejs/splide";

export const sliderOptions: Options = {
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
  drag: true,
  swipe: true,
  swipeThreshold: 50,
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
