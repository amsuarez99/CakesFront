<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="myForm">
          <h2>Introduce tus datos</h2>
          <form @submit.prevent="onSubmit" class="mt-3">
            <div class="form-group">
              <input style="padding: 0.5rem"
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre"
                v-model="name"
              />
            </div>
            <br />
            <div class="form-group">
              <input style="padding: 0.5rem"
                type="tel"
                class="form-control"
                id="telefono"
                placeholder="Telefono"
                v-model="phone"
              />
            </div>
            <br />
            <div class="form-group">
              <input style="padding: 0.5rem"
                type="email"
                class="form-control"
                id="email"
                placeholder="Correo"
                v-model="email"
              />
            </div>
            <br />
            <div class="form-group">
              <input style="padding: 0.5rem"
                type="text"
                class="form-control"
                id="address"
                placeholder="Dirección"
                v-model="address"
              />
            </div>
            <br />
            <textarea style="padding: 0.5rem" class="form-control" id="specification" placeholder="Especificaciones (Opcional)" type="text" name="Text1" cols="40" rows="5" v-model="specification"></textarea>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="myForm">
          <h2>Quién lo recibirá</h2>
          <form @submit.prevent="onSubmit" class="mt-3">
            <div class="form-group">
              <input style="padding: 0.5rem"
                type="text"
                class="form-control"
                id="addresse"
                placeholder="Dirección"
                v-model="addresse"
              />
            </div>
            <br />
            <textarea style="padding: 0.5rem" class="form-control" name="dedication" id="dedication" placeholder="Dedicatoria" cols="40" rows="5" v-model="dedication"></textarea>
          </form>
        </div>
      </div>
        <div class="cart my-4">
          <h2 class="py-4">Caja personalizada</h2>
          <div class="cart-content">
            <ul>
              <li
                v-for="(item, index) in $store.state.box"
                :key="index"
                class="d-block d-flex product secondary-pink"
              >
                <img v-bind:src="item.fotos[0]" class="product-image" :alt="item.name"/>
                <div class="product-content">
                  <h5 class="mt-2">
                    {{ item.name }}
                    <p
                      class="float-right m-lg-auto-2 delete"
                      @click="$store.commit('deleteFromBox', item)"
                    >
                      &times;
                    </p>
                  </h5>
                  <p class="mt-0">${{ item.price }} mxn</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
  <div class="precio">
    <h4 class="mb-3">Subtotal: ${{ $store.getters.boxPrice }}</h4>
    <h4 class="mb-3">Total + IVA: ${{ $store.getters.boxPriceWithTax }}</h4>
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
  name: "BoxCheckout",
  data() {
    return {
      sessionId: "",
      name: null,
      phone: null,
      email: null,
      address: null,
      dedication: "",
      addresse: "",
      specification: "",
    };
  },
  components: {
    ButtonComponent
  },
  methods: {
    pay() {
      if(!this.name || !this.phone || !this.email || !this.address || !this.dedication || !this.addresse){
        alert("Por favor completa la información requerida para seguir con el pago");
      }else{
      let test = false;
      let local = test ? "http://localhost:8080/api/" : Constants.API;
      let data = this.$store.state.box.map((item) => ({
        [item.id]: 1,
      }));
      data = Object.assign({}, ...data);
      let box = this.$store.state.box.map(element => {
        return element.id;
      });

      this.$http
        .post(local + "orders/checkoutSession", {
          products: data,
          shippingAddress: this.address,
          specification: this.specification,
          clientName: this.name,
          clientPhone: this.phone,
          clientEmail: this.email,
          box: {
            productsInBox: box,
            dedication: this.dedication,
            addresse: this.addresse
          }
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
      }
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
  width: 90%;
  margin: 0 auto;
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
