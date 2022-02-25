<template>
  <h1>Uhrzeit (Options API)</h1>
  <p>{{ currentTime.toLocaleString() }}</p>
</template>

<script>
export default {
  name: 'ClockOptionsApi',
  data: () => {
    return {
      currentTime: new Date(),
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = new Date();
    },
  },
  created() {
    this.intervalHandle = setInterval(this.updateCurrentTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalHandle);
  },
};
</script>
