<template>
  <div id="divcontainerslide9" class="container">
    <article>
      Assuma agora que a taxa de juros é de i=15% ao mês.
Suponha que aceitamos ceder os mesmos H=$100 em troca dos juros,
mas agora por dois meses.
    </article>
    <h1>Quanto vamos receber no futuro?</h1>
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
  div#divcontainerslide9 {
    background-color: rgba(92, 212, 98, 1);
    border-radius: 10px;
    text-align: center;
    padding: 70px 90px 20px 90px;
    width: 150vh;
    margin-bottom: -40px;
  }
  div#divcontainerslide9 h1 {
    color: #fff;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 100px;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  div#divcontainerslide9 article {
    padding: 0 110px;
    margin: 0;
  }
  div#btn-option-slide-9 div.col-6 {
    padding-left: 12vh;
    font-family: Typori;
    font-weight: normal;
    font-size: 12px;
    cursor: pointer;
  }
  div#btn-option-slide-9 div.col-6 div {
    border: 3px solid #000;
    border-radius: 5px;
    width: 40vh;
    padding: 20px;
  }
</style>

<script>
export default {
  name: 'slide_9',
  methods: {
    navigateToP: function () {
      this.$router.push('/10')
    }
  }
}
</script>
