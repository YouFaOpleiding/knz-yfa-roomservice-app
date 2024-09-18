<template>
  <div v-for="item in productsFiltered" class="product-list" :key="item.id">
    <product :item="item" @add-item="addItem" />
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: []
    }
  },
  created() {
    fetch('https://files.yourfutureacademy.net/cursus/vue3/json/products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },
  computed: {
    productsFiltered() {
      if (this.filter === 'Alles') return this.products
      return this.products.filter(elem => elem.type === this.filter)
    }
  },
  methods: {
    addItem(item) {
      this.$emit('addItem', item)
    }
  },
  props: ['filter'],
  emits: ['addItem']
}
</script>
