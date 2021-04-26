<template>
  <div class="add-to-cart">
    <button id="cartButton" class="btn btn-primary" @click="addToCart">Add to cart</button>
  </div>
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
#cartButton{
  align-self: flex-end;
  width: 40%;
}
</style>
