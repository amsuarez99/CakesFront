<template>
  <div class="circle"></div>
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
            <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
          </div>
          <div class="col-md">
            <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
          </div>
        </div>
      </div>
  </div>

  <CardComponent v-for="(product, index) in products" :key"index" :product="product"></CardComponent>
</template>

<script>
import ButtonComponent from '@/components/Button';
import CardComponent from '@/components/Card'
export default {
  name: 'Catalog',
  components: {
    ButtonComponent,
    CardComponent
  },
  data() {
    return {
      products: [ 
        {
          name: 'product1',
          description: 'lorem ipsum',
          price: 499
        },
        {
          name: 'product2',
          description: 'lorem ipsum',
          price: 499
        },
        {
          name: 'product2',
          description: 'lorem ipsum',
          price: 499
        },
      ]
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
  height: 150%;
  background-color: #A8A8A8;
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
