import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus, faShoppingCart, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

import Curr from '@/components/Curr'
import Product from '@/components/Product'

library.add(faCartPlus)
library.add(faShoppingCart)
library.add(faSquareMinus)

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .component('curr', Curr)
  .component('product', Product)
  .mount('#app')
