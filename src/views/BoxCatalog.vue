<template>
  <div class="circle secondary-pink"></div>
  <div class="masthead container-fluid pt-5 my-4">
    <!-- Masthead -->
      <div class="mx-auto w-75">
        <h1 class="display-6 mb-4">Catálogo de <b>Desayunos</b></h1>
        <p class="p-3 text-md-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, dolores accusantium sed eaque provident eos blanditiis beatae. Odio nihil perspiciatis quia. Praesentium ipsa, dicta explicabo quam molestiae eveniet debitis.</p>
      </div>
      <div class="w-75 mx-auto">
        <span class="logo drop-shadow mx-auto rounded-circle mb-5"></span>
        <div class="d-flex row justify-content-md-center mb-5">
          <div class="col-md mb-3 mb-md-0">
            <ButtonComponent href="#" text="Arma tu desayuno"></ButtonComponent>
          </div>
          <div class="col-md">
            <ButtonComponent href="#" text="Los más vendidos"></ButtonComponent>
          </div>
        </div>
      </div>
  </div>

  <!-- Products -->
  <h2 class="mb-4">Platillo Salado</h2>
  <div class="my-5 d-flex flex-wrap justify-content-around">
    <CardComponent v-for="(salado, index) in products.salados" :product="salado" :key="index"></CardComponent>
  </div>
  <h2 class="mb-4">Platillo Dulce</h2>
  <div class="my-5 d-flex flex-wrap justify-content-around">
    <CardComponent v-for="(pastel, index) in products.pasteles" :product="pastel" :key="index"></CardComponent>
  </div>
  <h2 class="mb-4">Productos Misceláneos</h2>
  <div class="my-5 d-flex flex-wrap justify-content-around">
    <CardComponent v-for="(miscelaneo, index) in products.miscelaneos" :product="miscelaneo" :key="index"></CardComponent>
  </div>
</template>

<script>
import Constants from '../helpers/delivery-methods'
import ButtonComponent from '@/components/Button';
import CardComponent from '@/components/Card'
export default {
  name: 'BoxCatalog',
  components: {
    ButtonComponent,
    CardComponent
  },
  mounted () {
    this.$http
      .get(Constants.API + 'pastel')
      .then(response => {
        this.products.pasteles = response.data.map(product => {
          product.product.fotos = product.product.fotos.map(foto => {
            return foto.foto
          })
          console.log(product.product)
          return product.product
        })
      })
      .catch(error => {
        console.log(error)
      })
    this.$http
      .get(Constants.API + 'salado')
      .then(response => {
        this.products.salados = response.data.map(product => {
          console.log(product.product)
          if(!product.product.fotos) {
            product.product.fotos = []
          } else {
            product.product.fotos = product.product.fotos.map(foto => foto.foto)
          }
          return product.product
        })
      })
      .catch(error => {
        console.log(error)
      })
    this.$http
      .get(Constants.API + 'miscelaneo')
      .then(response => {
        this.products.miscelaneos = response.data.map(product => {
          product.product.fotos = product.product.fotos.map(foto => {
            return foto.foto
          })
          console.log(product.product)
          return product.product
        })
      })
      .catch(error => {
        console.log(error)
      })
  },
  data() {
    return {
      products: {
        salados: [],
        pasteles: [],
        miscelaneos: []
      }
    }
  },
}
</script>

<style scoped>
.circle {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: circle(60% at top);
}

b {
  font-weight: 1000;
}

.logo {
  display: block;
  width: 15rem;
  height: 15rem;
  background-color: #4E4E4E;
}

@media screen and (max-width: 545px) {
  p {
    font-size: 0.8rem;
  }
}
</style>
