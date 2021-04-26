<template>
  <div class="circle secondary-pink"></div>
  <div class="masthead container-fluid pt-5 my-4">
    <!-- Masthead -->
      <div class="mx-auto w-75">
        <h1 class="display-6 mb-4">Catálogo de <b>Pasteles</b></h1>
        <p class="p-3 text-md-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, dolores accusantium sed eaque provident eos blanditiis beatae. Odio nihil perspiciatis quia. Praesentium ipsa, dicta explicabo quam molestiae eveniet debitis.</p>
      </div>
      <span class="logo mx-auto drop-shadow mx-auto rounded-circle mb-5"></span>
  </div>

  <!-- Products -->
  <h2 class="mb-4">Encuentra tu favorito</h2>
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
