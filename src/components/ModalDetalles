<template>
<div class="box-details">
  <div class="modal fade" id="modDetalles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content primary-pink">
        <div class="modal-header">
          <h5 class="modal-title">Detalles {{item.productName}}</h5>
        </div>
        <div class="modal-body">
              <img v-bind:src="item.productImage" width="80px" class="align-self-center" alt="...">
              <div class="media-body">
                <h5 class="mt-2">
                  {{item.description}}
                </h5>

                <p class="mt-0">
                  ${{item.productPrice}} mxn
                </p>
                <p class="mt-0">
                  Cantidad: {{item.productQuantity}}
                </p>
              </div>

        </div>
        <div class="modal-footer d-flex">
          <button type="button" class="button" @click="closeModal">Cerrar Detalles</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "ModalDetalles",
  methods: {
    closeModal() {
      window.$('#modDetalles').modal('hide');

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
