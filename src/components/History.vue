<template>
  <div>
    <button type="button" @click="undo" :disabled="!canUndo">Undo</button>
    <button type="button" @click="redo" :disabled="!canRedo">Redo</button>
  </div>
  <div>
    <textarea v-model="description" />
  </div>
  <div>
    {{ history }}
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRefHistory } from '@vueuse/core';

export default {
  name: 'History',
  setup() {
    const description = ref('Eine Beschreibung...');

    const { history, undo, redo, canUndo, canRedo } =
      useRefHistory(description);

    return {
      description,
      history,
      undo,
      redo,
      canRedo,
      canUndo,
    };
  },
};
</script>
