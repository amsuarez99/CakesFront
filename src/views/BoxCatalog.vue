<template>
  <div class="circle secondary-pink"></div>
  <div class="container-fluid pt-5 my-4">
    <div class="mx-auto w-75">
      <h1 class="display-6 mb-4">Catálogo de <b>Desayunos</b></h1>
      <p class="p-3 text-md-center">Arma tu desayuno, puedes escoger entre una variedad de sabores combinando un desayuno salado y dulce a tu gusto. Disfruta de un desayuno gourmet personalizado.</p>
    </div>
  </div>
  <div class="banner">
    <img class="banner-img drop-shadow" src="img/banner-desayunos.png" alt="">
  </div>
  <ButtonComponent class="my-5" href="#" text="Arma tu desayuno" @click="boxDetails"></ButtonComponent>

  <!-- Products -->
  <h2 class="mb-4">Platillo Salado</h2>
  <div class="d-flex mb-4">
    <div class="chevron">
      <font-awesome-icon class="chevron-icon" :icon="['fas', 'chevron-left']" />
    </div>
    <div class="card-container">
      <BoxCard class="card" v-for="(salado, index) in products.salados" :product="salado" :key="index" @add="addToBox(salado)" @delete="deleteFromBox(salado)"/>
    </div>
    <div class="chevron">
      <font-awesome-icon class="chevron-icon" :icon="['fas', 'chevron-right']" />
    </div>
  </div>
  <h2 class="mb-4">Platillo Dulce</h2>
  <div class="d-flex mb-4">
    <div class="chevron">
      <font-awesome-icon class="chevron-icon" :icon="['fas', 'chevron-left']" />
    </div>
    <div class="card-container">
      <BoxCard class="card" v-for="(pastel, index) in products.pasteles" :product="pastel" :key="index" @add="addToBox(pastel)" @delete="deleteFromBox(pastel)"/>
    </div>
    <div class="chevron">
      <font-awesome-icon class="chevron-icon" :icon="['fas', 'chevron-right']" />
    </div>
  </div>

  <BoxDetails v-if="modalVisibility" @close="boxDetails"/>
</template>

<script>
import Constants from '../helpers/delivery-methods'
import ButtonComponent from '@/components/Button';
import BoxCard from '@/components/BoxCard';
import BoxDetails from '@/components/BoxDetails';

export default {
  name: 'BoxCatalog',
  components: {
    ButtonComponent,
    BoxCard,
    BoxDetails,
  },
  mounted () {
    this.$http
      .get(Constants.API + 'pastel')
      .then(response => {
        this.products.pasteles = response.data.map(product => {
          product.product.fotos = product.product.fotos.map(foto => {
            return foto.foto
          })
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
      },
      productsInBox: [],
      messages: [],
      modalVisibility: false,
    }
  },
  methods: {
    addToBox(product) {
      this.$store.commit('addToBox', product);
      this.boxDetails();
    },
    deleteFromBox(product) {
      this.$store.commit('deleteFromBox', product);
    },
    boxDetails() {
      if (!Array.isArray(this.$store.state.box) || !this.$store.state.box.length) {
        alert("Por favor, agrega productos al carrito");
      } else {
        this.modalVisibility = !this.modalVisibility;
      }
    }
  }

}
</script>

<style scoped>
.circle {
  position: absolute;
  z-index: -9999;
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
  width: 100vw;
  height: 15rem;
  background-color: #4E4E4E;
}

@media screen and (max-width: 545px) {
  p {
    font-size: 0.8rem;
  }
}

.notifications {
  position: top;
  bottom: 0;
  z-index: 1000;
}

.card {
  flex: 0 0 auto;
  margin-right: 3rem;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 2;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2rem;

}


.chevron {
  padding: 0 1rem;
}

.chevron-icon {
  position: relative;
  top: 50%
}

.banner {
  position: relative;
  z-index: -9999;
}

.banner-img {
  width: 100%;
}


</style>
