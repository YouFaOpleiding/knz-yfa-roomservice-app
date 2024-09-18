<template>
  <div class="product container w-50 mt-5">
    <h1 class="p-1 text-white">{{ item.id + ') ' + item.titel }}</h1>
    <img :src="item.image" alt="" />
    <p>{{ item.beschrijving }}</p>
    <div class="d-flex flex-row justify-content-center align-items-center">
      <p class="fw-bold pe-2 m-0"><curr :value="item.prijs" /></p>
      <div @click="addItem(item)" class="btn btn-primary">
        <fa icon="cart-plus" class="fa-plus fa-xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    addItem(item) {
      this.$emit('addItem', item)
    }
  },
  props: ['item'],
  emits: ['addItem']
}
</script>
