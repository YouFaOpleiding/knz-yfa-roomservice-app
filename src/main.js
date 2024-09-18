import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus, faShoppingCart, faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

import Curr from '@/components/Curr'
import Product from '@/components/Product'

library.add(faCartPlus, faShoppingCart, faSquareMinus, faSquarePlus)

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .component('curr', Curr)
  .component('product', Product)
  .mount('#app')
