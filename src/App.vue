<template>
  <div id="nav" class="drop-shadow p-2 secondary-pink">
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

  color: white;
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
.primary-pink {
  background-color:hsla(341,78%,87%, 1); 
}

.secondary-pink {
  background-color: hsla(359,38%,71%, 1) !important;
}

.bg-brown {
  background-color: hsla(28,54%,29%, 1) !important;
}

.bg-gold {
  background-color: hsla(48,100%,49%, 1) !important;
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
  filter: drop-shadow(0px 3px 4px rgb(0,0,0,0.3));
}
</style>
