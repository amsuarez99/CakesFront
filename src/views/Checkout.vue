<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="myForm">
          <h2>Introduce tus datos</h2>
          <form @submit.prevent="onSubmit" class="mt-3">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre"
                v-model="name"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="tel"
                class="form-control"
                id="telefono"
                placeholder="Telefono"
                v-model="phone"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Correo"
                v-model="email"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Direccion"
                v-model="address"
              />
            </div>
            <br />
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="cart mt-4">
          <h2 class="py-4">Mis Productos</h2>
          <div class="cart-content">
            <ul>
              <li
                v-for="(item, index) in $store.state.cart"
                :key="index"
                class="d-block d-flex product secondary-pink"
              >
                <!-- <img v-bind:src="item.productImage" width="35%" style="width: 40%;display: inline-block;" class="align-self-center" alt="..."> -->
                <img v-bind:src="item.productImage" class="product-image" />
                <div class="product-content">
                  <h5 class="mt-2">
                    {{ item.productName }}
                    <p
                      class="float-right m-lg-auto-2 delete"
                      @click="$store.commit('removeFromCart', item)"
                    >
                      &times;
                    </p>
                  </h5>
                  <p class="mt-0">${{ item.productPrice }} mxn</p>
                  <p class="mt-0">Quantity: {{ item.productQuantity }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="precio">
    <h4 class="mb-3">Total Price : {{ $store.getters.totalPrice }}</h4>
    <h4 class="mb-3">Total price con impuestos: {{ $store.getters.totalPriceWithTax }}</h4>
    <ButtonComponent class="mb-3" text="Checkout" @click="pay"></ButtonComponent>
  </div>
</template>
<script>
var stripe = window.Stripe(
  "pk_test_51IkDS2A1JkC9eFwK4k3AAssy29KSprhfWNxx8vOW0lBfFe6svjt8ktaqkFYEAcFn6WzGSeDw27pci0iV5XqIEU7i00LQKemw9i"
);
import Constants from "../helpers/delivery-methods";
import ButtonComponent from "../components/Button"
export default {
  name: "Home",
  data() {
    return {
      sessionId: "",
      name: null,
      phone: null,
      email: null,
      address: null,
    };
  },
  components: {
    ButtonComponent
  },
  methods: {
    pay() {
      // data = {id:10, id:3}
      console.log(this.$store.state.cart);
      let test = false;
      let local = test ? "http://localhost:8080/api/" : Constants.API;
      let data = this.$store.state.cart.map((item) => ({
        [item.id]: item.productQuantity,
      }));
      data = Object.assign({}, ...data);
      console.log(data);

      this.$http
        .post(local + "orders/checkoutSession", {
          products: data,
          shippingAddress: this.address,
          specification: "s",
          clientName: this.name,
          clientPhone: this.phone,
          clientEmail: this.email,
        })
        .then((response) => {
          console.log(response.data);
          this.sessionId = response.data;
          stripe
            .redirectToCheckout({
              sessionId: this.sessionId.id,
            })
            .then(function (result) {
              alert(result.paymentStatus);
              result.success;
              if (result.error) {
                alert(result.error.message);
              }
            })
            .catch(function (error) {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      if (this.name == "") {
        alert("Falta el nombre");
      } else {
        console.log("Ya");
      }
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.delete {
  display: inline;
  float: right;
  cursor: pointer;
}

.media-body {
  width: 65%;
}

.myForm {
  width: 52%;
  margin: 0 auto;
  padding-top: 2rem;
}

.product-image {
  width: 5rem;
  height: 5rem;
  display: inline-block;
  align-self: center;
}

.cart {
  border: 0.5rem dashed lightcoral;
}

.product-content {
  flex-grow: 1;
}

.product {
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
