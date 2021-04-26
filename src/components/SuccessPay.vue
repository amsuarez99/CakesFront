<template>
  <div class="payForm">
    <div class="jumbotron">
      <h1 class="display-4 payHeader" style="font-weight: bold">Tu compra fue realizada con éxito!</h1>
    </div>
    <font-awesome-icon icon="check-circle"  size="10x" style="color: black" swap-opacity />
    <br>
    <div class="info">
      <h3>Identificador de orden: {{orderID}}</h3>
      <br>
      <p>Se ha enviado un correo con la informacion del pedido</p>
    </div>
    <br>
    <div>
      <p>
        We appreciate your business!
        If you have any questions, please email
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
    </div>
    <br>
    <button type="onSubmit" class="btn btn-primary" style="width: 15%; font-size: x-large" @click="onSubmit">Terminar</button>
  </div>
</template>

<script>
export default {
name: "SuccessPay",
  data(){
  return {
    orderID:String
  }
  },
  mounted() {
    this.orderID = this.$route.query.orderId;
  },
  methods:{
    onSubmit(){
      this.$store.commit('removeAllFromCart');
      console.log("BYE");
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.payForm{
  width: 100%;
  padding-bottom: 4rem;
}

.payHeader {
  padding: 4rem;
}

.circle {
  position: absolute;
  width: 490px;
  height: 469px;
  left: 872px;
  top: 876px;
}
.info {
  padding-top: 4rem;
  padding-bottom: 2rem;
}
</style>
