<template>
  <div id="app" class="container-fluir">
    <div id="nav">
      <router-link :to="_translationPrevious"><img src="@/assets/btn-previous.png" alt=""></router-link>
      <router-link :to="_translationNext"><img src="@/assets/btn-next.png" alt=""></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    _translationNext () {
      return (Number(this.$route.params.id) + 1) >= 11 ? `/${10}` : `/${Number(this.$route.params.id) + 1}`
    },
    _translationPrevious () {
      return (Number(this.$route.params.id) - 1) <= 0 ? `/${1}` : `/${Number(this.$route.params.id) - 1}`
    }
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0
  }
  div#app {
    height: 100%;
  }
  .home.d-flex.align-items-center {
    height: 100%;
  }
  body {
    background-repeat: no-repeat;
    background-position: 310px -520px;
    background-color: rgb(25, 52, 51);
  }
  div#nav {
    position: absolute;
    z-index: 9;
    right: 5%;
    top: 10%;
  }
  div#nav a:first-child {
    margin-right: 20px;
  }
  div#nav a:last-child {
    margin-left: 20px;
  }
  div#nav a img {
    width: 25px;
  }
</style>
