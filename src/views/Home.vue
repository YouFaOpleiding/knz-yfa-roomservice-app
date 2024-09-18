<template>
  <div class="home">
    <h1 class="text-center text-white p-1">Maak uw keuze uit ons assortiment: {{ headerUpdate }}</h1>
    <product-list :filter="filter" @add-item="addItem" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    ProductList
  },
  computed: {
    headerUpdate() {
      return this.filter.charAt(0).toUpperCase() + this.filter.slice(1)
    }
  },
  methods: {
    addItem(item) {
      this.$emit('addItem', item)
    },
    removeItem(item) {
      this.$emit('removeItem', item)
    }
  },
  props: ['cart', 'filter'],
  emits: ['addItem', 'removeItem']
}
</script>
