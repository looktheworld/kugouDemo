<template>
  <div id="app">
    <header-nav/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav"
export default {
  name: 'App',
  components:{
    "header-nav":HeaderNav
  }
}
</script>

<style>
</style>
