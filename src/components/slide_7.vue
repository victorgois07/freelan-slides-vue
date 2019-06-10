<template>
  <div id="divcontainerslide8" class="container">
    <div class="row">
      <article id="article-slide-6">
      Em geral, eles são representados por meio da taxa de juros. Considere o seguinte exemplo: Suponha que aceitamos ceder <b class="b-3">H = $100</b> hoje, por um determinado tempo, em
troca de <b class="b-3">J = $15</b>.
Nesse caso, receberemos <b class="b-3">F = $115</b> no futuro.
    </article>
    <div id="div-calc-slide-8">
      i = <div class="frac">
        <span><b class="b-3">$15</b></span>
        <span class="symbol">/</span>
        <span class="bottom"><b class="b-3">$100</b></span>
      </div> = 15%
    </div>
    <div id="divRow8" class="linha-vertical"></div>
    </div>
    <div id="container-text-slide-2" col="col-12">
      <article id="article-slide-2">A taxa de juros será de?</article>
    </div>
  </div>
</template>

<style>
  div#divcontainerslide8 {
    padding-left: 40px;
  }
  div#divcontainerslide8 div#container-text-slide-2 {
    padding: 0 130vh 0 0;
    margin-left: -20px;
    margin-top: 90px;
    background-color: transparent;
    opacity: 0.5;
  }
  div#divcontainerslide8 div#container-text-slide-2 article#article-slide-2 {
    width: 30vh;
  }
  div#divcontainerslide8 article#article-slide-6 {
    width: 50%;
    padding: 0 10vh 0 0;
    margin: 0;
  }
  div#div-calc-slide-8 {
    width: 40vh;
    height: 40vh;
    border-radius: 100%;
    padding: 115px 0 0 20px;
    margin-left: 40px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
    color: #fff;
    border: 3px solid rgb(92, 212, 98);
    text-align: center;
    background-color: rgb(25, 52, 51);
  }
  div#divRow8 {
    left: 127vh;
    top: 61vh;
    height: 39vh;
  }
  .frac {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      letter-spacing: 0.001em;
      text-align: center;
  }
  .frac > span {
      display: block;
      padding: 0.1em;
  }
  .frac span.bottom {
      border-top: 3px solid #fff;
  }
  .frac span.symbol {
      display: none;
  }
</style>

<script>
export default {
  name: 'slide_4'
}
</script>
