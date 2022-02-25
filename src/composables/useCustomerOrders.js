import { ref, onMounted, computed, watch, readonly } from 'vue';

export const useCustomerOrders = (customerId) => {
  const orders = ref([]);

  const getOrders = () => {
    console.log('get orders');
    orders.value = ['Bestellung 1', 'Bestellung 2', 'Bestellung 3'];
  };

  onMounted(getOrders);

  const orderCount = computed(() => orders.value.length);

  watch(customerId, getOrders);

  return {
    orders: readonly(orders),
    orderCount,
    getOrders,
  };
};
