<template>
  <div id="app">
   <base-slots v-slot='slotProps'>{{ slotProps.text }}</base-slots>
  </div>
</template>

<script>
import BaseData from './components/BaseData';
import BaseSlots from './components/BaseSlots';

export default {
  name: 'App',
  components: {
    BaseData,
    BaseSlots,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
