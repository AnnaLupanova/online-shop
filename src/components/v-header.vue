<template>
<div class="v-header">
  <div class="main">
    <div class="header">
      <div class="logo">

      </div>
      <div class="column">
        <router-link :to="{name:'home'}">
          <a href=""><p>Home</p></a>
        </router-link>
      </div>
      <div class="column">
        <router-link :to="{name:'catalog'}">
          <a href=""><p>Catalog</p></a>
        </router-link>
      </div>
      <div class="column">
        <router-link :to="{name:'running'}">
          <a href=""><p>Running</p></a>
        </router-link>

      </div>
      <div class="column">
        <router-link :to="{name:'fitness'}">
          <a href=""><p>Fitness</p></a>
        </router-link>

      </div>
      <div class="column">
        <router-link :to="{name:'football'}">
          <a href=""><p>Football</p></a>
        </router-link>

      </div>

      <div class="column">
        <router-link :to="{name:'delivery'}">
          <a href=""><p>Delivery</p></a>
        </router-link>
      </div>
      <router-link :to="{name:'cart',params:{cart_data: CART}}">
        <div class="column cart">
          <a href=""> <i class="fas fa-shopping-cart"></i></a>
          <div
              v-if="CART.length"
              class="v-catalog_to_cart">{{ CART.length }}
          </div>
        </div>
      </router-link>


    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
name: "v-header",
  computed:{
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style >
@import '../assets/style/style.scss';

</style>