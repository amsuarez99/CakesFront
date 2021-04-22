<template>
  <a class="btn mr-4 drop-shadow bg-brown" v-bind:href="href" role="button">{{text}}</a>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    href: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  width: 15rem;
  border-radius: 5rem;
  padding: 1rem;
  color: lightgray;
  font-weight: 500;
} 
</style>
