<template>
<div class="v-header">
  <div class="main">
    <div class="header">
      <div class="logo">

      </div>
      <div class="column">
        <router-link :to="{name:'home'}">
          <p>Home</p>
        </router-link>
      </div>
      <div class="column dropdown">
        <router-link :to="{name:'catalog'}">
          <a href=""><p>Catalog</p></a>
        </router-link>

          <div class="dropdown-content">
            <router-link :to="{name:'running'}">
             <p>Running</p>
            </router-link>



            <router-link :to="{name:'fitness'}">
              <p>Fitness</p>
            </router-link>


            <router-link :to="{name:'football'}">
              <p>Football</p>
            </router-link>
      </div>

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
.main .logo{
  background: url("../assets/style/logo.png") center/cover;
  height: 4.688em;
  width: 14.688em;
  margin: 0 18.75em 0 4.25em;
}
</style>