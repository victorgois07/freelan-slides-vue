<template>
    <div id="divcontainerslide9" class="container">
      <article>
        <b class="b-10">A primeira opção</b> é aplicar a taxa de juros sobre $100 nos dois períodos.
Dessa forma, receberemos no futuro F=$100+0,15×$100+0,15×$100=$130.
A fórmula geral para dois períodos é
      </article>
      <div>F = H × (1 + 2xi )</div>
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
</style>

<script>
export default {
  name: 'slide_10'
}
</script>
