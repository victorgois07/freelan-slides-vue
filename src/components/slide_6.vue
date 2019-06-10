<template>
  <div id="divcontainerslide6" class="container">
    <article id="article-slide-6">
      Em geral, eles são representados por meio da taxa de juros. Considere o seguinte exemplo: Suponha que aceitamos ceder <b class="b-3">H = $100</b> hoje, por um determinado tempo, em
troca de <b class="b-3">J = $15</b>.
Nesse caso, receberemos <b class="b-3">F = $115</b> no futuro.
    </article>
    <div id="container-text-slide-2">
      <article id="article-slide-2" @click="navigateTo7">A taxa de juros será de?</article>
    </div>
  </div>
</template>

<style>
  div#divcontainerslide6 {
    padding-left: 40px;
  }
  article#article-slide-6 {
    padding: 0 115vh 0 0;
    text-align: left;
  }
  div#divcontainerslide6 div#container-text-slide-2 {
    padding-left: 0;
    padding-right: 110vh;
    margin-top: 90px;
    background-color: transparent;
  }
</style>

<script>
export default {
  name: 'slide_6',
  methods: {
    navigateTo7: function () {
      this.$router.push('/7')
    }
  }
}
</script>
