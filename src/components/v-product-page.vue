<template>
<div class="v-product-page">
  <v-header/>
  <img class="v-catalog-item__img" :src=" require('../images/'+ product.image)" alt="img">
  <p>product name : {{product.name}}</p>
  <p>Article:{{product.article}}</p>
  <p>Price: {{product.price}}</p>
  <button class="btn" @click="addToCart">Buy</button>
  <v-footer/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import vHeader from './v-header'
import vFooter from './v-footer'
export default {
name: "v-product-page",
  components:{
  vHeader,vFooter
  },
  props:{

  },
  computed:{
  ...mapGetters([
      'PRODUCTS'
  ]),
    product(){
    let result = {};
    let vm =this;
    this.PRODUCTS.map(function (item){
      if (item.article === vm.$route.query.product){
        result = item;
      }
    })
      return result;
    }
  },
  methods:{
  ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
  ]),
    addToCart() {
      this.ADD_TO_CART(this.product)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style>
@import '../assets/style/style.scss';
.btn {
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 5px 66px 0px;
  padding: 10px 17px;
  border-radius: 45px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0,0,0,.1);
  transition: .3s;
}
.btn:hover {
  background: #2EE59D;
  box-shadow: 0 15px 20px rgba(46,229,157,.4);
  color: white;
  transform: translateY(-7px);
}
</style>