<template>
  <div class="checkout">
    <h1>This is an checkout page</h1>
    <div class="payForm">
      <div class="jumbotron">
        <br>
        <h1 class="display-4 payHeader" style="font-weight: bold">Introduce tus datos</h1>
      </div>
      <div class="myForm">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name">
          </div>
          <br>
          <div class="form-group">
            <input type="tel" class="form-control" id="telefono" placeholder="Telefono" v-model="phone">
          </div>
          <br>
          <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="Correo" v-model="email">
          </div>
          <br>
          <div class="form-group">
            <input type="text" class="form-control" id="address" placeholder="Direccion" v-model="address">
          </div>
          <br>
        </form>
      </div>
    </div>
    <div class="container mt-5 pt-5">
      <div class="row" style="background-color: #ff0000">
        <div class="col-md-8">
          <h4 class="py-4">Checkout Page</h4>
          <ul style="width: 100%;">
            <li v-for="(item,index) in $store.state.cart" :key="index" class="media" style="width: auto;">
              <div style="width:40%;">
                <img v-bind:src="item.productImage" width="35%" style="width: 40%;display: inline-block;" class="align-self-center" alt="...">
                </div>
                <div class="media-body">
                  <h5 class="mt-2">
                    {{item.productName}}
                    <p class="float-right m-lg-auto-2" style="display: inline;float:right;" @click="$store.commit('removeFromCart', item)">&times;</p>
                  </h5>
                <p class="mt-0">
                  ${{item.productPrice}} mxn
                </p>
                <p class="mt-0">
                  Quantity: {{item.productQuantity}}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 class="py-4">Total Price : {{$store.getters.totalPrice}}</h5>
          <h4>Total price con impuestos: {{$store.getters.totalPriceWithTax}}</h4>
          <button class="btn btn-primary" @click="pay">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var stripe = window.Stripe('pk_test_51IkDS2A1JkC9eFwK4k3AAssy29KSprhfWNxx8vOW0lBfFe6svjt8ktaqkFYEAcFn6WzGSeDw27pci0iV5XqIEU7i00LQKemw9i');
import Constants from '../helpers/delivery-methods'
export default {
  name: 'Home',
  data(){
    return {
      sessionId: '',
      name: null,
      phone:null,
      email:null,
      address:null,
    }
  },
  components: {
  },
  methods: {
    pay(){
      // data = {id:10, id:3}
      console.log(this.$store.state.cart)
      let test = true
      let local =  test ? "http://localhost:8080/api/" : Constants.API
      let data = this.$store.state.cart.map((item) => ({[item.id] : item.productQuantity}));
      data = Object.assign({}, ...data)
      console.log(data);

      this.$http.post(local + "orders/checkoutSession", {products: data, shippingAddress: this.address, specification: "s", clientName: this.name, clientPhone: this.phone, clientEmail: this.email}).then(response => {
        console.log(response.data);
        this.sessionId = response.data
        stripe.redirectToCheckout({
          sessionId: this.sessionId.id
        }).then(function (result){
          alert(result.paymentStatus);
          result.success
          if(result.error){
            alert(result.error.message);
          }
        }).catch(function(error) {
          console.error('Error:', error);
        });
      }).catch(error => {
        console.log(error);
      });

    },
  onSubmit(){
    if(this.name == ""){
      alert("Falta el nombre");
    }else{
      console.log("Ya");
    }
  }
  }
}

</script>
<style scoped>
.media-body{
  width: 65%;
}

.myForm {
  width: 40%;
  align-content: center;
  margin-left: 30%;
  margin-right: 30%;
  padding-top: 2rem;
}


</style>
