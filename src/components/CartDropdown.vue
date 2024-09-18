<template>
  <div class="cart-dropdown">
    <h1 class="text-center text-white text-uppercase mt-2 p-1">Winkelwagen</h1>
    <div class="list-group-item">
      <div v-if="isCartEmpty" class="text-center">Uw winkelwagen is leeg!</div>
      <div
        v-else
        class="d-flex flex-column justify-content-center align-items-center container"
        style="min-width: 300px"
      >
        <div class="d-flex flex-row justify-content-between w-100 mb-1 border-bottom">
          <p class="fw-bold p-2 me-auto text-start">Product Titel</p>
          <p class="fw-bold p-2 text-center">Prijs</p>
          <p class="p-2 mx-1">&nbsp;</p>
        </div>
        <div
          v-for="item in cart"
          :key="item.content.id"
          class="d-flex flex-row justify-content-between w-100 border-top"
        >
          <p class="p-2 me-auto mb-0 text-start">{{ getItemCountString(item) + item.content.titel }}</p>
          <p class="p-2 mb-0 text-end"><curr :value="getItemSumtotal(item)" /></p>
          <div @click="removeItem(item.content)" class="btn btn-primary px-1 py-0 my-auto">
            <fa icon="square-minus" />
          </div>
        </div>
        <router-link class="btn btn-primary" to="/checkout">Checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartDropdown',
  computed: {
    isCartEmpty() {
      return this.cart.length === 0
    }
  },
  methods: {
    getItemCountString(item) {
      if (item.count === 1) return ''
      else return '' + item.count + 'x '
    },
    getItemSumtotal(item) {
      if (item.count === 1) return item.content.prijs
      else return item.count * item.content.prijs
    },
    removeItem(item) {
      this.$emit('removeItem', item)
    }
  },
  props: ['cart'],
  emits: ['removeItem']
}
</script>

<style></style>
