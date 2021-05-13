<template>
  <div class="circle secondary-pink"></div>
  <div class="container-fluid pt-5 my-4">
    <div class="mx-auto w-75">
      <h1 class="display-6 mb-4">Catálogo de <b>Pasteles</b></h1>
      <p class="p-3 text-md-center">Encuentra una gran variedad de sabores hechos especiales para ti. Consiente a tu persona favorita con su pastel favorito hecho 100% casero.</p>
    </div>
  </div>
  <div class="banner">
    <img class="banner-img drop-shadow" src="img/banner-pasteles.png" alt="">
  </div>

  <!-- Products -->
  <h2 class="my-4">Encuentra tu favorito</h2>
  <div class="my-5 d-flex flex-wrap justify-content-around">
    <CardComponent v-for="(product, index) in products" :product="product" :key="index"></CardComponent>
  </div>

  <!-- Modal -->
  <MiniCart/>
</template>

<script>
import Constants from '../helpers/delivery-methods'
import CardComponent from '@/components/Card'
import MiniCart from '@/components/MiniCart'
export default {
  name: 'CakeCatalog',
  components: {
    CardComponent,
    MiniCart
  },
  mounted() {
    this.fetchPasteles()
  },
  methods:{
    async fetchPasteles(){
      await this.$http.get(Constants.API + "pastel").then((response) => {
        this.products = response.data.map((p) => {
          p.product.fotos = p.product.fotos.map((f) => {
            return f.foto
          })
          return p.product
        })
      }).catch((error) => {
        console.log(error)
        this.products = []
      })
    }
  },
  data() {
    return {
      products: []
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
  width: 15rem;
  height: 15rem;
  background-color: #4E4E4E;
}

@media screen and (max-width: 545px) {
  p {
    font-size: 0.8rem;
  }
}

.banner {
  position: relative;
  z-index: -9999;
}

.banner-img {
  width: 100%;
}
</style>
