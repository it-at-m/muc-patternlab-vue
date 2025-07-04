import { onBeforeUnmount, onMounted } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useOnClickOutside(component: any, callback: unknown) {
  if (!component) return;
  const listener = (event: Event) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value)
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}
