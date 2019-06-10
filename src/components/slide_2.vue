<template>
  <div id="divcontainerslide-2" class="container">
    <h1 id="h1-slide-2">Como definimos se um projeto é <b>rentável</b>?</h1>
    <div id="container-text-slide-2" class="container d-flex align-items-center"><article id="article-slide-2" @click="navigateTo">primeiro passo</article></div>
    <div id="divRow" :style="row" class="linha-vertical"></div>
  </div>
</template>

<style>
  @font-face {
    font-family: Typori;
    src: url('../assets/Typori-Regular.ttf');
  }
  .linha-vertical {
    border-left: 3px solid rgb(92, 212, 98);
    position: absolute;
    left: 50%;
  }
  article#article-slide-2 {
    border: 3px solid rgb(92, 212, 98);
    text-align: center;
    margin: 0;
    border-radius: 10px;
    font-family: Typori;
    color: rgb(92, 212, 98);
    font-size: 12px;
    height: 75px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
  }
  h1#h1-slide-2 {
    white-space: normal;
    padding: 0 180px;
    text-align: center;
    line-height: 1;
  }
  b {
    font-weight: normal;
    color: yellow;
  }
  div#container-text-slide-2 {
    padding: 0 35%;
    background-color: rgb(25, 52, 51);
  }
</style>

<script>
export default {
  name: 'slide_2',
  data () {
    return {
      row: `height: 103px`
    }
  },
  methods: {
    navigateTo: function () {
      this.$router.push('/3')
    }
  }
}
</script>
