<template>
  <div id="app">
    <CompositionApi :customerId="12" />
    <CompositionApiScriptSetup :customerId="12" />
    <ClockOptionsApi />
    <ClockCompositionApi />
    <Orders :customerId="12" />
    <History />
  </div>
</template>

<script>
import CompositionApi from './components/CompositionApi.vue';
import CompositionApiScriptSetup from './components/CompositionApiScriptSetup.vue';
import ClockOptionsApi from './components/ClockOptionsApi.vue';
import ClockCompositionApi from './components/ClockCompositionApi.vue';
import Orders from './components/Orders.vue';
import History from './components/History.vue';

export default {
  name: 'App',
  components: {
    CompositionApi,
    CompositionApiScriptSetup,
    ClockOptionsApi,
    ClockCompositionApi,
    Orders,
    History,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
