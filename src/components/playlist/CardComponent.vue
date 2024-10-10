<script lang="ts">
import router from '@/router/router';

export default {
  name: 'CardComponent',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    nbMusic: {
      type: Number,
      required: true
    },
  },
  methods: {
    ButtonHandler: function (id: number) {
        console.log('Button clicked with id: ' + id);
    }
  }
};
</script>

<template>
  <div class="col-md-3">
    <div class="card mb-4">
        <img :src="image" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-apparition">
                {{ nbMusic }} musics
            </p>
            <button v-on:click="ButtonHandler(id)" class="btn btn-primary">
                more
            </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>