<template>
  <div class="checkout">
    <h1 class="text-center text-white p-1">Checkout</h1>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {}
  },
  props: ['cart', 'filter'],
  emits: ['addItem']
}
</script>
