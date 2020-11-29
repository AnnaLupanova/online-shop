<template>
<div class="v-home">

  <div class="main">
    <v-header/>
    <div class="motivate">
      <div class="text-motiv">
        <p>Will is what makes you win when your sanity tells you that you are defeated</p>
      </div>
    </div>
    <div class="gender">
      <div class="woman">
        <div class="over">
          <div class="btnCl">
            <button><span>Women's</span></button>
          </div>
        </div>
      </div>
      <div class="men">
        <div class="over">
          <div class="btnCl">
            <button><span>Men's</span></button>
          </div>
        </div>


      </div>
    </div>


    <div class="slaider">
      <div class="image">
        <div class="first">
          <div class="overlay">
            <div class="icon">
              <i class="fas fa-running"></i>
            </div>
            <p>Running</p>

          </div>
        </div>
        <div class="second">
          <div class="overlay">
            <div class="icon">
              <i class="fas fa-dumbbell"></i>
            </div>
            <p>Fitness</p>

          </div>
        </div>

        <div class="third">
          <div class="overlay">
            <div class="icon">
              <i class="far fa-futbol"></i>
            </div>
            <p>Football</p>

          </div>
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
  methods:{

  }
}
</script>

<style >
@import '../assets/style/style.scss';

.motivate{
  background: url("../images/123.jpg") center/cover;
  position: relative;
  height: 25em;
  width: 100%;
}
.motivate .text-motiv{
  position: absolute;
  background-color:rgba(255,255,255,0.6);
  width: 34em;
  height: 13em;
  right: 4em;
  top: 10.75em;

}
.motivate .text-motiv p{
  font: 600 2.3em 'Dosis', sans-serif;
  text-transform: uppercase;
  padding: 0.7em;
  text-align: center;
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