<template>
  <div id="divcontainerslide88" class="container">
    <div class="row">
      <div class="col-6">
        <div>Podemos escrever o valor no futuro <b class="b-3">F</b> como função do valor de hoje <b class="b-3">H</b> e da taxa de juros <b class="b-3">i</b></div>
        <div><b class="b-3">F</b> = <b class="b-3">H</b> × (1 + <b class="b-3">i</b> )</div>
        <div>Da mesma forma, podemos escrever o valor de hoje <b class="b-3">H</b> em função do valor futuro <b class="b-3">F</b> e da taxa de juros <b class="b-3">i</b>
</div>
      </div>
      <div id="div-calc-slide-8">
      <b class="b-3">H</b> = <div class="frac">
        <span><b class="b-3">F</b></span>
        <span class="symbol">/</span>
        <span class="bottom">(1 +<b class="b-3">i</b>)</span>
      </div>
    </div>
    <div id="divRow8" class="linha-vertical"></div>
    </div>
  </div>
</template>

<style>
  div#divcontainerslide88 {
    padding-left: 70px;
  }
  div#divcontainerslide88 div#divRow8 {
    left: 159.5vh;
    top: 0;
    height: 32vh;
  }
  div#divcontainerslide88 div#div-calc-slide-8 {
    margin: 130px 0 0 120px;
    padding: 80px 0 0 0;
  }
  div#divcontainerslide88 div.row div.col-6{
    font-family: "Times New Roman", Times, serif;
    font-size: 23px;
    color: #fff;
    padding-left: 300px;
    line-height: 46px;
    font-style: normal;
    font-weight: normal;
    padding: 0 0 0 90px;
  }
  div#divcontainerslide88 div.row div.col-6 div {
    margin-bottom: 70px;
  }
  div#divcontainerslide88 div.row div.col-6 div:nth-child(2) {
    font-size: 65px;
  }
</style>

<script>
export default {
  name: 'slide_8'
}
</script>
