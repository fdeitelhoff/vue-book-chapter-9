<template>
  <div>ID: {{ customerId }}</div>
  <div>Kundenname: {{ customerName }}</div>

  <div>
    <button @click="getOrders">Get Orders</button>
    <div>{{ orders }}</div>
    <div>Order Count: {{ orderCount }}</div>
    <div><input type="text" v-model="query" /></div>
    <div>{{ filteredOrders }}</div>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, computed, watch, watchEffect } from 'vue';
import { useCustomerOrders } from '../composables/useCustomerOrders';
import { useOrdersQuery } from '../composables/useOrdersQuery';

export default {
  name: 'Orders',
  props: {
    customerId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const customerName = ref('Musterfrau');
    const { customerId } = toRefs(props);
    const query = ref('1');

    // const orders = ref([]);
    // const getOrders = () => {
    //   console.log('get orders');
    //   orders.value = ['Bestellung 1', 'Bestellung 2', 'Bestellung 3'];
    // };

    // onMounted(getOrders);

    // const orderCount = computed(() => orders.value.length);

    // watch(customerId, getOrders);

    const { orders, getOrders, orderCount } = useCustomerOrders(customerId);
    const { filteredOrders } = useOrdersQuery(orders, query);

    return {
      customerId,
      customerName,
      orders,
      getOrders,
      orderCount,
      query,
      filteredOrders,
    };
  },
};
</script>
