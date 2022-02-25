import { computed } from 'vue';

export const useOrdersQuery = (orders, query) => {
  const filteredOrders = computed(() => {
    return orders.value.filter((order) => {
      return order.includes(query.value);
    });
  });

  return {
    filteredOrders,
  };
};
