<template>
  <div id="nav" >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/modificaclienti">ModificaClienti</router-link> |
    <router-link to="/modificaprezzoprodotti">ModificaPrezzoProdotti</router-link> |
    <router-link to="/register">Sign Up</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/loginps">LoginPS</router-link>
  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
    }
  },
  computed : {

  }
}
</script>