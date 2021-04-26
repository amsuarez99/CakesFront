<template>
<div class="mini-cart">
  <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
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
                  Quantity: {{item.productQuantity}}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick=" window.$('#miniCart').modal('toggle');">Continue shopping</button>
          <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "MiniCart",
  methods: {
  checkout(){
    window.$('#miniCart').modal('hide');
    this.$router.push('/checkout');
  },
    removeItem(){

    }
  }
}
</script>

<style scoped>
.media-body{
  width: 65%;
}
</style>
