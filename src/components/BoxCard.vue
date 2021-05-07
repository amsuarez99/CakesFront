<template>
  <div class="card-employee d-flex flex-column" :class="{selected: isSelected}" @click="toggle">
    <carousel :perPage="1" class="story-carousel vs-carousel__wrapper" :hideArrowsOnBound="true">
      <slide v-for="(image,index) in product.fotos" :key="{index}" style="height: 200px;" class="card-img-top vs-carousel__wrapper">
        <img :src="image" class="card-img-top" :alt="product.name" >
      </slide>
    </carousel>

    <div class="content d-flex flex-column">
      <p>{{product.name}}</p>
      <p>{{product.description}}</p>
      <p class="mb-0">${{product.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxCard',
  props: {
    product: Object
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods:{
    getImage(images){
      return images[0]
    },
    toggle() {
      this.isSelected = !this.isSelected;
      this.isSelected ? this.$emit("add") :
                   this.$emit("delete");
    }
  },

}
</script>

<style scoped>
  .card-employee {
      position: relative;
      width: 30%;
      background-color: rgba(255, 255, 255, 0.5);
      margin-bottom: 1em;
      border-radius: 1em;
      z-index: 2;
  }

  .card-employee {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  .card-employee:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .selected {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      border: 0.3rem solid #4a4a4a;
  }

  .content {
      font-size: 0.8em;
      padding: 1.3rem 1rem;
      flex: auto;
  }

  .content p {
    padding: 0.1rem 0.8rem;
    text-align: left;
  }

  .content p:first-child {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .content p:nth-child(2) {
    line-height: 1.4rem;
  }

  .content p:last-child {
    margin-top: auto;
    font-weight: 450;
  }

  button {
    background-color: red;
  }

  .vs-carousel__wrapper {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .story-carousel {
    height: 200px;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
  }
</style>
