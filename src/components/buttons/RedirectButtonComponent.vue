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
    /**
     * Redirect to the route specified in the props
     */
    goTo() {
      const routeExists: boolean = this.$router.getRoutes().some(route => route.name === this.route);

      if (routeExists) {
        router.push({
          name: this.route
        });
      } else {
        router.push({
          name: 'NotFound' 
        });
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
    width: 210px;
    padding: 8px; 
    background-color: #03C490;;
    color: white; 
    font-size: 18px;
    font-weight: bold;
    border: 1px solid lightgray; 
    border-radius: 20px; 
    cursor: pointer; 
    text-align: center; 
    transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button-white:hover {
    background-color: #06708E; 
}
</style>

