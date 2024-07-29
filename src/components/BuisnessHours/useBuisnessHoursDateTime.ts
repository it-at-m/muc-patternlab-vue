import { onMounted, onUnmounted, readonly, ref } from "vue";

const LOCALES = "de-DE";

export function useBuisnessHoursDateTime() {
  let intervalId: number;

  const currentDayInternal = ref<string>();
  const currentTimeInternal = ref<string>();

  const currentDay = readonly(currentDayInternal);
  const currentTime = readonly(currentTimeInternal);

  const updateDateTime = () => {
    const now = new Date();
    currentDayInternal.value = now.toLocaleDateString(LOCALES, {
      weekday: "short",
    });
    currentTimeInternal.value = `${now.getHours()}:${now.getMinutes()}`;
  };

  onMounted(() => {
    updateDateTime();
    intervalId = setInterval(updateDateTime, 60000); // 60000 Millisekunden = 1 Minute
  });

  onUnmounted(() => clearInterval(intervalId));

  return {
    currentDay,
    currentTime,
  };
}
