<template>
    <ul class="d-block">
      <div v-for="(message, index) in messages" :key="index" class="bg-gold d-flex justify-content-center mx-auto w-50 notification">
        <li>{{message}}</li>
        <font-awesome-icon class="close" :icon="['fas', 'times']" @click="deleteNotification(message)" />
      </div>
    </ul>
</template>

<script>

export default {
  name: "NotificationCenter",
  props: ["messages"],
  methods: {
    deleteNotification(message) {
      this.$emit("deleteNotification", message);
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  display: inline-block;
  margin-right: 2rem;
}

.notification {
  width: 50%;
  padding: 1rem 1rem;
  margin: 0.5rem auto;
  border-radius: 2rem;
  border: 0.2rem solid rgb(160, 128, 0);
}

.close {
  margin-top: 0.2rem;
}


</style>