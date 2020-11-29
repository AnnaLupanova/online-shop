<template>
  <div class="v-select ">
    <span class="help">To select by category click here</span>
    <p
        class="title"
        @click="optionsVisible = !optionsVisible"
    >{{selected}} <i class="fas fa-sort arrow"></i> </p>
    <div
        class="options"
        v-if="optionsVisible "
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>




  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected:{
      type:String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      optionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select',option);
      this.optionsVisible = false;
    }
  }

}
</script>

<style>
@import '../assets/style/style.scss';
@import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';
@import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap';

.v-select p {
  margin: 0;
  font: 400 1.375em 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
}
 .help{
   font: 400 12px 'Montserrat', sans-serif;
   color: #aeaeae;
 }

.options {
  border: 1px solid #aeaeae;
  position: absolute;
  top: 46px;
  right: 0;
  width: 198px;
}

.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  margin: 35px 30px 0 18px;
}

.title {
  border: 1px solid #aeaeae;
  margin-top: 5px;
  position: relative;
}
.title i{
  position: absolute;
  right: 9px;
  top: 2px;
}
.options p:hover{
  background: #e7e7e7;
}
</style>