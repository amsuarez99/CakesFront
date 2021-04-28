<template>
  <a class="btn mr-4 drop-shadow" role="button" @click="addToCart">Añadir al carrito</a>
</template>

<script>
import 'bootstrap';
//import store from '../store';
export default {
  name: "add-to-cart",
  props: {
    productId: String,
    name: String,
    price: String,
    image: String
  },
  methods:{
    addToCart(){
      console.log( this.$store.state.cart);
      window.$('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item);
    }
  },
  data(){
    return{
     item : {
       productName: this.name,
       id: this.productId,
       productPrice: this.price,
       productQuantity: 1,
       productImage: this.image
     }
    }
  }
}
</script>

<style scoped>
a {
  width: 15rem;
  border-radius: 5rem;
  padding: 1rem;
  color: black;
  font-weight: 500;
  border-color: hsla(28,54%,29%, 1) !important;
  margin: 1em auto;
  transition: 0.3s;
} 

a:hover {
  background-color:  hsla(28,54%,29%, 1) !important;
  color: white;
}
</style>
