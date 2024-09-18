<template>
  <div class="checkout text-center">
    <h1 class="text-white p-1">Checkout</h1>
    <div class="col-8 mx-auto">
      <table class="table table-hover m-0 text-start">
        <caption class="text-end h3">
          <strong>Total:&nbsp;</strong>
          <curr :value="cartTotal" />
        </caption>
        <thead class="align-bottom">
          <tr>
            <th scope="col" class="col-1"></th>
            <th scope="col">Item</th>
            <th scope="col" class="col-1 text-center">#</th>
            <th scope="col" class="col-2 text-end">Price</th>
            <th scope="col" class="col-2 text-end">Total</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="item in cart" :key="item.content.id">
            <td>
              <div class="btn-group" role="group" aria-label="More or Fewer of this Item">
                <button @click="addItem(item.content)" class="btn btn-success px-3 py-2">
                  <fa icon="square-plus" size="lg" />
                </button>
                <button @click="removeItem(item.content)" class="btn btn-outline-success px-3 py-2">
                  <fa icon="square-minus" size="lg" />
                </button>
              </div>
            </td>
            <th scope="row">{{ item.content.titel }}</th>
            <td class="text-center">x{{ item.count }}</td>
            <td class="text-end">
              <curr :value="item.content.prijs"></curr>
            </td>
            <td class="text-end">
              <curr :value="getItemSumtotal(item)"></curr>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link class="btn btn-primary btn-sm" to="/">Continue Shopping</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {}
  },
  computed: {
    cartTotal() {
      let totalSum = 0.0

      this.cart.forEach(item => {
        totalSum += item.count * item.content.prijs
      })

      return totalSum
    }
  },
  methods: {
    getItemSumtotal(item) {
      if (item.count === 1) return item.content.prijs
      else return item.count * item.content.prijs
    },
    addItem(item) {
      this.$emit('addItem', item)
    },
    removeItem(item) {
      this.$emit('removeItem', item)
    }
  },
  props: [
    'cart' /*,
    'filter'*/
  ],
  emits: ['addItem', 'removeItem']
}
</script>

<style lang="scss">
:root {
  --white: #ffff;
  --green: #198754;
  --negate: #fff0;
}

.btn-success:hover,
.btn-success:focus {
  background-color: var(--negate) !important;
  color: var(--green) !important;
}

.btn-success:hover,
.btn-outline-success:hover,
.btn-success:focus,
.btn-outline-success:focus {
  border: 1px solid var(--white) !important;
}
</style>
