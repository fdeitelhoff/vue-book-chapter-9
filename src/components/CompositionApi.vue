<template>
  <div>ID: {{ customerId }}</div>
  <div>Konstante: {{ CONSTANT }}</div>

  <button @click="getOrders">Get Orders</button>
  <div>{{ orders }}</div>
</template>

<script>
import { ref } from 'vue';

const CONSTANT = 123;

export default {
  name: 'CompositionApi',
  props: {
    customerId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    console.log(props);

    const orders = ref(['Artikel 1']);
    const getOrders = () => {
      console.log('get orders');
      orders.value = ['Bestellung 1', 'Bestellung 2', 'Bestellung 3'];
    };

    return {
      CONSTANT,
      orders,
      getOrders,
    };
  },
};
</script>
