<template>
<transition name="modal">
<div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container primary-pink">

          <div class="modal-header">
            <h5 class="mt-3 w-100 title">
              MI CAJA PERSONALIZADA
              <p class="d-inline remove" @click="hideModal">&times;</p>
            </h5>
          </div>

          <div class="modal-body">
            <ul>
              <li v-for="(item,index) in $store.state.box" :key="index" class="d-flex mb-2">
                <img :src="item.fotos[0]" class="media" :alt="item.name">
                <div class="media-body">
                  <h5 class="mt-2">
                    {{item.name}}
                    <p class="d-inline remove" @click="$store.commit('deleteFromBox', item)">&times;</p>
                  </h5>

                  <p class="mt-0">
                    ${{item.price}} mxn
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="modal-default-button secondary-pink" @click="hideModal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
name: "BoxDetails",
  data() {
    return {
      productsInBox: []
    }
  },
  methods: {
    checkout(){
      this.$emit("close");
      this.$router.push('/checkout');
    },
    hideModal() {
      this.$emit("close");
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-header {
  padding: 1rem;
  border-bottom: none;
}

.modal-body {
  padding: 1rem;
  border-top: 2px dashed lightcoral;
  border-bottom: 2px dashed lightcoral;
}

.modal-footer {
  border-top: none;
}

.modal-container {
  width: 60%;
  margin: 3rem auto;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.title {
  text-align: left;
  margin-bottom: 0;
  font-weight: bolder;
}

.remove {
  float: right;
}

.media {
  width: 10%;
  border-radius: 0.3rem;
}

.media-body {
  width: 65%;
  margin: 0 auto;
}

.modal-default-button {
  float: right;
  font-size: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  border-width: 0px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

li {
  list-style: none;
}
</style>
