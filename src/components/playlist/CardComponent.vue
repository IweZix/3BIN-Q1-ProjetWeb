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
      type: [String, null],
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
    playlistKey: {
      type: Number,
      required: true
    }
  },
  async mounted() {
    if (this.id) {
      this.image = await getImage(this.id);
    } else {
      this.image = 'https://placehold.co/300';
    }
  },
  methods: {
    ButtonHandler: function (playlistKey: number) {
        router.push({
          name: 'Music',
          params: {
            id: playlistKey
          }
        });
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
            <button v-on:click="ButtonHandler(playlistKey)" class="btn btn-primary">
                more
            </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

img {
  height: 300px;
  object-fit: cover;
}

</style>