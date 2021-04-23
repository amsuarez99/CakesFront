<template>
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
      <b>{{product.price}}</b>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    product: Object
  },
}
</script>

<style scoped>
</style>
