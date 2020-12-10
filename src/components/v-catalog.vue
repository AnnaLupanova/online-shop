<template>
  <div class="main">
    <v-header/>
    <div class="v-catalog">

      <div class="filters">
        <v-select
            :options="categories"
            @select="sortByCategaries"
            :selected="selected"
        />
        <span class="selectPrice">Select price</span>
        <div class="range-value">
          <p class="valueRange">Min: {{minPrice}}$</p>
          <p class="valueRange">Max: {{maxPrice}}$</p>
        </div>
        <div class="range-slaider">

          <input
              type="range"
              min="0"
              max="10000"
              step="10"
              v-model.number="minPrice"
              @change="setRangeSliders"
          >
          <input
              type="range"
              min="0"
              max="10000"
              step="10"
              v-model.number="maxPrice"
              @change="setRangeSliders"
          >
        </div>


      </div>



      <div class="v-catalog__list">
        <v-catalog-item
            v-for="product in filterPtoducts"
            :key="product.article"
            v-bind:product_data="product"
            @addToCart="addToCart"
            @productClick="productClick"
        />
      </div>




    </div>
    <v-footer/>
  </div>

</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from './v-select'
import vHeader from './v-header'
import vFooter from './v-footer'
import axios from 'axios'



export default {
  name: "v-catalog",
  components: {
    vCatalogItem, vSelect, vHeader, vFooter
  },
  data() {
    return {
      categories: [
        {name: 'All', value: 'All'},
        {name: 'Male', value: 'M'},
        {name: 'Female', value: 'F'}

      ],
      selected: 'Select',
      sortedProducts: [],
      minPrice:0,
      maxPrice:10000

    }


  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
        'PRODUCTS_RUNNING'
    ]),
    filterPtoducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }


  },

  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'

    ]),
    addToCart(data) {

      axios.post('http://localhost:8080/basket', {
        article: data.article
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    },
    productClick(artile){

      this.$router.push({name:'product',query:{'product':artile}})
    },
    sortByCategaries(category) {
      let vm=this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item){
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected === category.name;
          return e.category === category.name
        })
        vm.selected=category.name;
      }
    },
    setRangeSliders(){
      if (this.minPrice > this.maxPrice){
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategaries();
    },

  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((responce) => {
          if (responce.data) {
            this.sortByCategaries()
          }
        });
  }
}


</script>

<style lang="scss">
@import '../assets/style/style.scss';

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

.v-catalog {
  margin-top: 10px;
  display: flex;


  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    width: 75%;

  }
  .filters{
    display: flex;
    flex-direction: column ;
    padding-left: 15px;

    .selectPrice{
      font: 400 1.375em 'Montserrat', sans-serif;
      text-transform: uppercase;
      padding-top: 119px;
      padding-bottom: 14px;
    }
  }
  .range-slaider{
    width: 200px;
    margin: 48px 20px 0;
    text-align: center;
    position: relative;

  }
  .range-value{
margin: 10px auto;

    display: flex;

  }
  .range-value p{
    border: 1px solid #aeaeae;
    font: 400 1em 'Montserrat', sans-serif;
    margin-right: 23px;
    padding: 5px;
  }
  .range-value p:last-of-type{
    margin-right: 0;
  }
  .range-slaider svg, .range-slaider input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;

  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0.5px 0.5px 0.5px #000000, 0px 0px 1px #0d0d0d;
    background: #2EE59D;
    border-radius: 1.3px;

  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;

    height: 26px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background:#2EE59D;
  }


}



</style>