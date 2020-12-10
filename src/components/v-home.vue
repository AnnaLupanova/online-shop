<template>
<div class="v-home">

  <div class="main">
    <v-header/>

      <div class="motivate">
        <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="300"
            style="text-shadow: 1px 1px 2px #333;">

          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="../images/slide_1.jpg"
                  alt="image slot"

              >
            </template>
              <p style="font-size: 20px; font-family:Montserrat, sans-serif; text-transform: uppercase;">Always make a total effort, even when the odds are against you.</p>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="../images/slide_2.jpg"
                  alt="image slot"
              >
            </template>

          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="../images/slide_3.jpg"
                  alt="image slot"
              >
            </template>
            <p style="font-size: 20px; font-family:Montserrat, sans-serif; text-transform: uppercase;">Make each day your masterpiece.</p>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="../images/slide_4.jpg"
                  alt="image slot"
              >
            </template>
            <p style="font-size: 20px; font-family:Montserrat, sans-serif; text-transform: uppercase;">It does not matter how slowly you go as long as you do not stop.</p>

          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="../images/123.jpg"
                  alt="image slot"
              >
            </template>
            <p style="font-size: 20px; font-family:Montserrat, sans-serif; text-transform: uppercase;">In order to succeed, we must first believe that we can.</p>

          </b-carousel-slide>

        </b-carousel>

      </div>

    <div class="gender">
      <div class="woman">
        <router-link :to="{name:'catalog'}">
        <div class="over">
          <div class="btnCl">
            <button><span>Women's</span></button>
          </div>
        </div>
        </router-link>
      </div>
      <div class="men">
        <router-link :to="{name:'catalog'}">
        <div class="over">
          <div class="btnCl">
            <button><span>Men's</span></button>
          </div>
        </div>
        </router-link>
      </div>
    </div>


    <div class="slaider">
      <div class="image">
        <div class="first">
          <router-link :to="{name:'running'}">
          <div class="overlay">
            <div class="icon">
              <i class="fas fa-running"></i>
            </div>
            <p>Running</p>
          </div>
          </router-link>
        </div>
        <div class="second">
          <router-link :to="{name:'fitness'}">
          <div class="overlay">
            <div class="icon">
              <i class="fas fa-dumbbell"></i>
            </div>
            <p>Fitness</p>

          </div>
          </router-link>
        </div>

        <div class="third">
          <router-link :to="{name:'football'}">
          <div class="overlay">
            <div class="icon">
              <i class="far fa-futbol"></i>
            </div>
            <p>Football</p>

          </div>
          </router-link>
        </div>

      </div>

    </div>

    <v-footer/>

  </div>
</div>

</template>

<script>
import {mapGetters} from "vuex"
import vHeader from './v-header'
import vFooter from './v-footer'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


export default {
name: "v-home",
  components:{
vHeader, vFooter
  },


  computed:{
    ...mapGetters([
      'CART'
    ])
  },

}
</script>

<style >
@import '../assets/style/style.scss';
@import "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";
@import "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap";

.img-fluid{
  height: 400px ;
  object-fit: cover;
  object-position: center;

}
.carousel-control-prev-icon, .carousel-control-next-icon {

display: none;
}



.slaider .image{
  display: flex;
  flex-direction: row;

}

.slaider .image{
  display: flex;
  flex-direction: row;
}
.slaider .image .first{
  background: url("../images/run1.jpg") center/cover;
  height: 16.375em;
  position: relative;
  width: 33.3%;
}
b-carousel-slide{
  height: 300px;
}
.slaider .image .second{
  background: url("../images/fitness.jpg") center/cover;
  height: 16.375em;
  position: relative;
  width: 33.3%;
  margin-right: 2px;
  margin-left: 2px;
}
.slaider .image .third{
  background: url("../images/football.jpg") center/cover;
  height: 16.375em;
  width: 33.3%;
  position: relative;

}
.slaider .image .first .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  right: 0;
  background: rgba(0,0,0,0.3);
}
.slaider .image .second .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  right: 0;
  background: rgba(0,0,0,0.15);
}
.slaider .image .third .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  right: 0;
  background: rgba(0,0,0,0.25);
}

.slaider .image .overlay .icon{
  text-align: center;
  padding-top: 4.438em;
}
.slaider .image .overlay p{
  color:#ffffff;
  font:500 2.875em 'Barlow', sans-serif;
  text-transform: uppercase;
  text-align: center;
}
.slaider .image .overlay .icon i{
  color:#ffffff;
  font-size: 3.2em;
}
.slaider .image .overlay:hover{

  background: rgba(0,0,0,0.6);
  cursor: pointer;
}

.main .gender {
  width: 100%;
  height: 25em;
  display: flex;
  flex-direction: row;
  padding: 2em 0;
  justify-content: center;
}

.main .gender .woman{
  background: url("../images/woman.png");
  height: 100%;
  width: 45%;
  background-size: cover;
  position: relative;
  margin-right: 0.95em;

}
.main .gender .woman .over{
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  background-color:rgba(0,0,0,0.3);
  text-align: center;
}

.main .gender .men{
  background: url("../images/man.png");
  height: 100%;
  width: 45%;
  background-size: cover;
  position: relative;
}
.gender .men .over{
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  right: 0;
  background-color:rgba(0,0,0,0.3);
  text-align: center;
}
.over .btnCl button{
  background-color: transparent;
  border: 3px  #ffffff solid ;
}
.gender .men .over:hover{
  background: rgba(0,0,0,0.6);
  cursor: pointer;
}
.gender .woman .over:hover{
  background: rgba(0,0,0,0.6);
  cursor: pointer;
}

.over .btnCl{
  margin-top: 155px;
}
.over .btnCl:hover{
  cursor: pointer;
}
.over .btnCl button span{
  font: 500 2.875em 'Barlow', sans-serif;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
}


</style>