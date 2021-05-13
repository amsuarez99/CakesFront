<template>
  <div class="payForm">
    <div class="jumbotron">
      <h1 class="display-4 payHeader" style="font-weight: bold">Tu compra fue realizada con éxito!</h1>
    </div>
    <font-awesome-icon icon="check-circle" size="10x" style="color: black" swap-opacity />
    <div class="info">
      <h3>Identificador de orden: {{orderID}}</h3>
      <br>
      <p>Se ha enviado un correo con la informacion del pedido</p>
    </div>
    <ButtonComponent text="Terminar" @click="onSubmit"/>
  </div>
</template>

<script>
import ButtonComponent from '../components/Button'
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
      this.$store.commit('removeAllItems');
      this.$router.push('/');
    }
  },
  components: {
    ButtonComponent,
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

.info {
  padding-top: 4rem;
  padding-bottom: 2rem;
}
</style>
