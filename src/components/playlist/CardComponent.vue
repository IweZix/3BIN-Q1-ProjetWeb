<script lang="ts">
import router from '@/router/router';
import { getImage } from '@/services/musics';

export default {
  name: 'CardComponent',
  data() {
    return {
      image: '' as string
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    nbMusic: {
      type: Number,
      required: true
    },
  },
  async mounted() {
    if (this.id) {
      this.image = await getImage(this.id);
    } else {
      this.image = 'https://placehold.co/300';
    }
  },
  methods: {
    ButtonHandler: function (id: String) {
        console.log('Button clicked with id: ' +  id);
    }
  }
};
</script>

<template>
  <div class="col-md-3">
    <div class="card mb-4">
        <img :src="image" class="card-img-top" alt="...">
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

<style scoped>

img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

</style>