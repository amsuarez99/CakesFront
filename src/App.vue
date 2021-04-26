<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/desayunos">Desayunos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pasteles">Pasteles</router-link>
          </li>
        </ul>
        <form  class="form-inline my-2 my-lg-0">
          <a class="btn btn-outline-success my-2 my-sm-0" onclick="window.$('#miniCart').modal('show');">Cart</a>
        </form>
      </div>
    </nav>
  <router-view class="pt-5"/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.media{
  flex-flow: row;
  display: flex;
}
.align-self-center{
  flex: 1;
  margin: 1rem;
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
  height: 1rem;
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
