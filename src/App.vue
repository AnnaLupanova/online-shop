<template>
  <div  id="app">

    <v-main-wrapper/>

  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper';


export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style>
@import './assets/style/style.scss';

#app {
  font-family: Avenir, Helvetica, Arial, Barlow,Montserrat sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}



</style>
