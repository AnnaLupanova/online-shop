<template>
  <div class="v-cart-item">
    <img class="v-cart-item__img" :src="require('../images/'+ cart_item_data.image)" alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart_item_data__quantity">
      <p>Quantity: </p>
        <span class="quantity_btn" @click="decrement">-</span>
      {{cart_item_data.quantity}}
      <span class="quantity_btn" @click="increment">+</span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>


export default {
name: "v-cart-item",
  props:{
  cart_item_data:{
    type:Object,
    default(){
      return[]
    }
  }
  },
  methods:{

  decrement(){
    this.$emit('decrement')
  },
    increment(){
      this.$emit('increment')
    },

    deleteFromCart(){
      this.$emit('deleteFromCart')
    }

  },



}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: 16px;
  &__img{
    width: 200px;
  }
 .quantity_btn{
   cursor: pointer;
 }
}

</style>