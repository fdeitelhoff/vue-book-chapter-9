<script setup>
import { ref } from 'vue';

const props = defineProps({
  customerId: Number,
});

const setupVariable = ref('Composition Api mit script setup!');

function onClick() {
  console.log('on click:', setupVariable);
}
</script>

<template>
  <div>ID: {{ customerId }}</div>
  <button @click="onClick">Klick mich!</button>
</template>
