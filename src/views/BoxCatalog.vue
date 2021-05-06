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
    <BoxCard v-for="(salado, index) in products.salados" :product="salado" :key="index" @selected="addToBox"/>
  </div>
  <h2 class="mb-4">Platillo Dulce</h2>
  <div class="my-5 d-flex flex-wrap justify-content-around">
    <BoxCard v-for="(pastel, index) in products.pasteles" :product="pastel" :key="index" @selected="addToBox"/>
  </div>

  <NotificationCenter class="notifications" :messages="messages" @deleteNotification="deleteMessage"/>
</template>

<script>
import Constants from '../helpers/delivery-methods'
import ButtonComponent from '@/components/Button';
import BoxCard from '@/components/BoxCard'
import NotificationCenter from '@/components/NotificationCenter';

export default {
  name: 'BoxCatalog',
  components: {
    ButtonComponent,
    BoxCard,
    NotificationCenter
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
    }
  },
  methods: {
    addToBox(id, pName) {
      let product = this.productsInBox.find(pid => pid == id);
      if(product) {
        this.productsInBox.splice(product, 1);
      } else {
        this.productsInBox.push(id);
        this.notify(pName);
      }
      console.log(this.productsInBox);
    },
    notify(pName) {
      // Add message to messages
      let message = "Se agregó " + pName + " a la caja!";
      this.messages.push(message);
    },
    deleteMessage(message) {
      let found = this.messages.find(m => m == message);
      if(found) {
        this.messages.splice(found, 1);
      }
    }
  }

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

.notifications {
  position: sticky;
  bottom: 0;
  z-index: 1000;
}
</style>
