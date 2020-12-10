<template>

<div class="main">
  <v-header/>
  <div class="v-cart">

   <!-- <p v-if="!cart_data.length">There are no products in cart...</p>-->
    <div class="v-car_cart"
         v-for="product in this.$store.state.cart_products"
         :key="product.article"
         v-bind:cart_item_data="product"
    ></div>
    <v-cart-item
        v-for="(item,index) in this.$store.state.cart_products"
        :key="item.name"
        :cart_item_data="item"

        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"


    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }}</p>
    </div>

  </div>
</div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from'vuex'
import {mapGetters} from 'vuex'
import vHeader from './v-header'
//import axios from "axios";

export default {
name: "v-cart",
  components:{
    vCartItem, vHeader
  },

  computed:{
  cartTotalCost(){
    let result = []
        if(this.$store.state.cart_products.length){
      for (let item of this.$store.state.cart_products){
        result.push(item.price*item.quantity) ;

      }
      result = result.reduce(function (sum,el){
        return (sum+el);
      })
      return result
    }else{
      return 0;
    }


  },
    ...mapGetters([
        'CART','CART_PRODUCT'
      ])

  },
  methods:{
  ...mapActions([
    'DELETE_FROM_CART','INCREMENT_CART','DECREMENT_CART','GET_CART_PRODUCT'
  ]),

    increment(index){
    this.INCREMENT_CART(index)
    },
    decrement(index){
    this.DECREMENT_CART(index)
    },
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
  mounted() {
  this.GET_CART_PRODUCT();

  }
}

</script>

<style lang="scss">
@import '../assets/style/style.scss';
.v-cart{

  &__total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*3;
    display: flex;
    background: #2EE59D;
    justify-content: center;
  }
  .total__name{
    margin-right: 16px;

  }
}
.main .header .column.cart {
  position: relative;
}
.v-catalog_to_cart{
  position: absolute;
  top: 0;
  right: 36px;
  color: black;
  font-size: 18px;
}

</style>