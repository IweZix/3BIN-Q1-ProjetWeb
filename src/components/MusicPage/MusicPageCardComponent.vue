<script lang="ts">
import { defineComponent } from 'vue';
import { VueFlip } from 'vue-flip';

export default defineComponent({
  name: 'MusicPageCardComponent',
  components: {
    VueFlip,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    backContent: {
      type: String,
      default: 'More details about this album or artist.',
    },
  },
});
</script>

<template>
  <div class="music-card">
    <vue-flip :active-click="true" width="100%" height="auto">
      <!-- Face avant de la carte -->
      <template v-slot:front>
        <div class="card-front">
          <img :src="image" alt="Album cover" class="album-image" />
          <div class="card-info">
            <h3 class="title">{{ title }}</h3>
            <p class="artist">{{ artist }}</p>
          </div>
        </div>
      </template>

      <!-- Face arrière de la carte -->
      <template v-slot:back>
        <div class="card-back">
          <h3 class="infoBack">More Info</h3>
          <h5 class="album">Album: {{ backContent }}</h5>
        </div>
      </template>
    </vue-flip>
  </div>
</template>

<style scoped>
.card-front {
  display: flex; 
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #01A98D;
  box-shadow: 0 2px 8px rgba(0, 0, 0.2, 0.1);
}

.album-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.card-info {
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  flex-grow: 1; 
  text-align: center; 
}

.title {
  color: #038A91;
  font-size: 24px;
  font-weight: bold; 
  margin: 0;
}

.artist {
  font-size: 18px; 
  font-weight: bold; 
  color: #038A91; 
}

.card-back {
  background-color: #038A91;
  padding: 20px;
  border-radius: 10px;
  text-align: center; 
}

.infoBack {
  color: #01A98D;
  font-weight: bold;
}

.album,
.hrefBack {
  color: #01A98D;
}
</style>
