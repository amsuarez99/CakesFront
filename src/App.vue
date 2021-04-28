<template>
  <NavbarComponent/>
  <router-view/>
</template>

<script>
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.media{
  flex-flow: row;
  display: flex;
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

</style>
