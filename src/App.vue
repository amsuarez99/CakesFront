<template>
  <div id="nav" class="drop-shadow p-2">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/catalogo">Catálogo</router-link>
  </div>
  <router-view class="pt-4"/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #D6D6D6;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.text-md-left {
  text-align: left;
}

.text-md-center {
  text-align: center;
}

.text-md-justify {
  text-align: justify;
}

@media screen and (max-width: 767px) {
  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-justify {
    text-align: justify;
  }
} 

.drop-shadow {
  filter: drop-shadow(0px 3px 4px rgb(0,0,0,0.8));
}
</style>
