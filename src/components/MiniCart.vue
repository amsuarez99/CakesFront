<template>
<div class="box-details">
  <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content primary-pink">
        <div class="modal-header">
          <h5 class="modal-title">Caja Personalizada</h5>
          <button type="button" @click="closeModal" class="close" data-dismiss="modal" aria-label="Close">
              &times;
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li v-for="(item,index) in $store.state.cart" :key="index" class="media">
                <img v-bind:src="item.productImage" width="80px" class="align-self-center" alt="...">
              <div class="media-body">
                <h5 class="mt-2">
                  {{item.productName}}
                  <p class="float-right m-lg-auto-2" style="display: inline;float:right;" @click="$store.commit('removeFromCart', item)">&times;</p>
                </h5>

                <p class="mt-0">
                  ${{item.productPrice}} mxn
                </p>
                <p class="mt-0">
                  Cantidad: {{item.productQuantity}}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer d-flex">
          <button type="button" class="button" @click="closeModal">Continuar comprando</button>
          <button type="button" class="button secondary-pink" @click="checkout">Terminar Compra</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "BoxDetails",
  methods: {
    checkout(){
      this.closeModal();
      this.$emit("closeModal");
      this.$router.push('/checkout');
    },
    closeModal() {
      window.$('#miniCart').modal('hide');

    },
  },
}
</script>

<style scoped>
.media-body{
  width: 65%;
}

.close {
  font-weight: bolder;
  font-size: 1.5rem;
  border: none;
  background-color: inherit;
  color: #292929;
}

.modal-content {
  border-radius: 1rem;
  color: black;
}

.modal-header {
  border-bottom: none;
}

.modal-body {
  border-top: 2px dashed lightcoral;
  border-bottom: 2px dashed lightcoral;
}

.button {
  font-size: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  border-width: 0px;
}
</style>
