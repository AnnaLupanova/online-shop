<template>
<div class="v-catalog-item" >
  <img class="v-catalog-item__img" :src=" require('../images/'+ product_data.image)" alt="img" @click="productClick">
  <p class="v-catalog-item__name">{{ product_data.name }}</p>
  <p class="v-catalog-item__price">Price:{{  product_data.price }} $</p>
  <button class="btn" @click="addToCart">Buy</button>
</div>
</template>

<script>

export default {
name: "v-catalog-item",
  props:{
    product_data:{
    type: Object,
      default(){
      return{}
      }
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart',this.product_data)
    },
    productClick(){
      this.$emit('productClick',this.product_data.article)
    }
  },
  mounted() {
    this.$set(this.product_data,'quantity',1)
  }

}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
.v-catalog-item {
  width: 23%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: 27px;
 margin-right: 45px;


  .v-catalog-item__name {
    font: 400 15px Montserrat, sans-serif;
    text-transform: uppercase;

  }

  .v-catalog-item__img {
    width: 200px;
  }

  .v-catalog-item__price {
    font: 400 18px Montserrat, sans-serif;
    text-transform: uppercase;
  }
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

}
.v-catalog-item:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in;
}

</style>