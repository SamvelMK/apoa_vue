<template>
  <div id="app">
    <Header msg="APOA-Questionnaire"/>
    <Tests/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Tests from './components/Tests.vue'
  
export default {
  name: 'App',
  components: {
    Header,
    Tests
  }
}
</script>

<style>

</style>
