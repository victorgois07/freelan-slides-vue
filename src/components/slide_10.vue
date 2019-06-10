<template>
    <div id="divcontainerslide10" class="container">
      <article>
        <b class="b-10">A primeira opção</b> é aplicar a taxa de juros sobre $100 nos dois períodos.
Dessa forma, receberemos no futuro F=$100+0,15×$100+0,15×$100=$130.
A fórmula geral para dois períodos é
      </article>
      <div><b class="b-10">F = H × (1 + 2 <b class="op-x">×</b> i )</b></div>
      <article>
        Nesse primeiro caso, utilizamos a lógica dos chamados <b class="b-10">juros simples</b>.
      </article>
      <div id="btn-option-slide-9" class="row">
        <div class="col-6 container" @click="navigateToP">
          <div>Opção 1</div>
        </div>
        <div class="col-6 container">
          <div>Opção 2</div>
        </div>
      </div>
    </div>
</template>

<style>
  b.b-10 {
    color: #fff;
  }
  div#divcontainerslide10 b.op-x {
    color: #fff;
  }
  div#divcontainerslide10 {
    background-color: rgba(92, 212, 98, 1);
    border-radius: 10px;
    text-align: center;
    padding: 70px 120px 20px 120px;
    width: 955px;
    margin-bottom: 0;
    height: 515px;
  }
  div#divcontainerslide10 div {
    margin-top: 20px;
  }
  div#divcontainerslide10 div b.b-10 {
    font-size: 60px;
  }
  div#divcontainerslide10 article {
    padding: 0;
    color: black;
  }
</style>

<script>
export default {
  name: 'slide_10'
}
</script>
