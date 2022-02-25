import { ref, onBeforeUnmount, readonly } from 'vue';

export const useCurrentTime = (refreshInterval) => {
  const currentTime = ref(new Date());

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  const intervalHandle = setInterval(updateCurrentTime, refreshInterval);
  onBeforeUnmount(() => clearInterval(intervalHandle.value));

  return { currentTime: readonly(currentTime) };
};
