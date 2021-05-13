<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <p class="navbar-brand mx-3 my-3" href="#">Cecy Ponce Cakes</p>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportContent">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pasteles">Pasteles</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/desayunos">Desayunos</router-link>
        </li>
        <li class="carrito" v-if="isDesayunosComponent">
          <a class="btn" onclick="window.$('#miniCart').modal('show');" >Carrito</a>
        </li>
      </ul>
      <form  class="form-inline my-2 my-lg-0">
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  computed: {
    isDesayunosComponent() {
      console.log(this.$route.name);
      return this.$route.name != 'BoxCatalog'
    }
  },
}
</script>

<style scoped>
.nav-item {
  width: 8rem;
  border-radius: 1rem;
  font-weight: 500;
  border-color: rgb(238, 236, 234) !important;
  margin: 0rem 1rem;
  transition: 0.3s;
}

.nav-item:hover {
  background-color: hsla(341,78%,87%, 1) !important;
  color: white !important;
}

.carrito:hover {
  color: hsla(341,78%,87%, 1) !important;
  background-color: white !important;
  border: 1px solid  black;
}

.carrito {
  width: 8rem;
  border-radius: 1rem;
  font-weight: 500;
  margin-left: auto;
  margin-right: 2rem;
  transition: 0.3s;
  background-color: hsla(341,78%,87%, 1) !important;
  color: white !important;
}

</style>
