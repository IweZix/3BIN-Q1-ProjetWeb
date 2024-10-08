<script lang="ts">
import router from '@/router/router';

export default {
  name: 'RedirectButtonComponent',
  mounted() {},
  props: {
    text: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  },
  methods: {
    goTo() {
      const routeExists = this.$router.getRoutes().some(route => route.name === this.route);

      if (routeExists) {
        router.push({
          name: this.route
        });
      } else {
        router.push({ name: 'NotFound' });
      }
    }
  }

};
</script>


<template>
  <button class="custom-button-white" @click="goTo">{{ text }}</button>
</template>

<style scoped>
.custom-button-white {
    width: 230px;
    padding: 12px 24px; 
    background-color: white;
    color: #333; 
    font-size: 18px;
    font-weight: bold;
    border: 1px solid lightgray; 
    border-radius: 8px; 
    cursor: pointer; 
    text-align: center; 
    transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button-white:hover {
    background-color: #f1f1f1; 
    color: #4e73df; 
}
</style>

