<template>
  <div id="divcontainerslide3" class="container">
    <div id="divRow2" class="linha-vertical"></div>
    <div id="container-text-slide-3" class="container d-flex align-items-center">
      <article id="article-slide-3">
        O primeiro passo seria projetar custos e receitas, incluindo despesas com desenvolvimento. OK, temos agora um fluxo de valores para cada projeto, mas... <b class="b-3">Como comparar projetos com fluxos diferentes?</b> Parece ser necessário reduzir esse fluxo a um único valor, pois seria mais fácil comparar doisnúmeros. <b class="b-3">Como traduzir em um único número uma série devalores que acontecem em momento distintos?</b> A intuição diria que devemos dar um peso menor para valores que acontecem no futuro, descontando, assim, o passar do tempo...
      </article>
    </div>
    <div id="divRow3" ref="divRow3" :style="rowBotton" class="linha-vertical"></div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');
  .linha-vertical {
    border-left: 3px solid rgb(92, 212, 98);
    position: absolute;
    left: 50%;
  }
  div#divRow2 {
    top: 0;
    height: 55vh;
  }
  b.b-3 {
    font-weight: normal;
    color: rgb(92,212,98);
  }
  div#divcontainerslide3 {
    padding: 0 70px;
    background-color: rgb(25, 52, 51);
  }
  article#article-slide-3 {
    font-family: 'Times New Roman', Times, serif;
    border: 3px solid rgb(92, 212, 98);
    text-align: center;
    margin: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 23px;
    width: 100%;
    padding: 60px 50px;
    cursor: pointer;
    line-height: 43px;
  }
  .home.d-flex.align-items-end {
    height: 100%;
    padding-bottom: 40px;
  }
</style>

<script>
export default {
  name: 'slide_3',
  data () {
    return {
      rowBotton: `height: 40px`
    }
  }
}
</script>
