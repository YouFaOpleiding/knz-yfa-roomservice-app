<template>
  <div id="nav" class="navbar d-flex align-items-start position-absolute w-100 p-3 pe-none">
    <select
      v-model="selectie"
      class="btn btn-primary btn-sm px-4 py-2 mt-5 text-white text-capitalize pe-auto"
    >
      <option class="text-capitalize">Alles</option>
      <option class="text-capitalize">gerechten</option>
      <option class="text-capitalize">snacks</option>
      <option class="text-capitalize">dranken</option>
    </select>
    <div class="d-flex align-items-end flex-column mt-5 pe-auto">
      <!-- button :style="switchColor" -->
      <button
        @click="toggleCart()"
        id="cartDropdown"
        class="btn btn-primary btn-sm p-2 d-flex justify-content-center align-items-center"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <fa icon="shopping-cart" class="fa-xl me-5" />
        <div class="text-white fw-bold">
          <span v-if="isCartEmpty">{{ cartTotal }}</span>
          <curr v-else :value="cartTotal" />
        </div>
      </button>
      <div v-if="displayCart" class="list-group w-100 d-flex flex-column" aria-labelledby="cartDropdown">
        <cart-dropdown :cart="cart" @remove-item="removeItem" />
      </div>
    </div>
  </div>
</template>

<script>
import CartDropdown from './CartDropdown'

export default {
  name: 'Navbar',
  data() {
    return {
      displayCart: false,
      filter: 'Alles'
      // switchColor: {
      //   backgroundColor: 'auto',
      //   border: 'transparent'
      // }
    }
  },
  components: {
    CartDropdown
  },
  computed: {
    selectie: {
      get() {
        return this.filter
      },
      set(value) {
        this.filter = value
        this.$emit('setFilter', this.filter)
      }
    },
    cartTotal() {
      let totalSum = 0.0
      this.cart.forEach(item => {
        totalSum += item.count * item.content.prijs
      })
      return totalSum > 0 ? totalSum : 'Wagen is leeg'
    },
    isCartEmpty() {
      return this.cart.length === 0
    }
  },
  methods: {
    toggleCart() {
      this.displayCart = !this.displayCart
    },
    removeItem(item) {
      this.$emit('removeItem', item)
    }
  },
  props: ['cart'],
  emits: ['setFilter', 'removeItem']
}
</script>
