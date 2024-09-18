<template>
  <navbar :cart="cart" @set-filter="setFilter" @remove-item="removeItem" />
  <router-view :cart="cart" :filter="selectie" @add-item="addItem" @remove-item="removeItem" />
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'RoomserviceApp',
  data() {
    return {
      cart: [],
      selectie: 'Alles'
    }
  },
  components: {
    Navbar
  },
  methods: {
    addItem(item) {
      let inserted = false

      this.cart.forEach(elem => {
        if (item.titel === elem.content.titel) {
          elem.count++
          inserted = true
        }
      })

      if (!inserted) this.cart.push({ content: item, count: 1 })
    },
    removeItem(item) {
      let wipe = -1
      let i = 0

      for (i = 0; i < this.cart.length; i++) {
        if (item == this.cart[i].content) {
          this.cart[i].count--
          if (this.cart[i].count < 1.0) wipe = i
        }
      }

      if (wipe >= 0) this.cart.splice(wipe, 1)
    },
    setFilter(string) {
      this.selectie = string
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

:root {
  --blue: #0077b5;
  --light-blue: #2995d3;
  --light-blue-border: #72b8e0b7;
  --orange: #e68523;
}

img {
  width: 80px;
  height: 80px;
}

h1 {
  background-color: var(--blue) !important;
}

.btn-primary {
  background-color: var(--blue) !important;
  border: 2px solid var(--blue) !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: var(--light-blue) !important;
  border: 2px solid var(--light-blue-border) !important;
}

.btn-primary:active {
  background-color: var(--light-blue) !important;
  border: 2px solid var(--light-blue-border) !important;
}

option {
  background-color: gray;
}
</style>
