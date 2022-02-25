<template>
  <h1>Uhrzeit (Composition API)</h1>
  <p>{{ currentTime.toLocaleString() }}</p>
</template>

<script>
import { useCurrentTime } from '../composables/useCurrentTime';

export default {
  name: 'ClockCompositionApi',
  setup() {
    const { currentTime } = useCurrentTime(1000);

    return { currentTime };
  },
};
</script>
