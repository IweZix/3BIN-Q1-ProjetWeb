<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MusicPageHeaderComponent',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nbMusic: {
      type: Number,
      required: true,
    },
  },
});
</script>

<template>
  <div class="music-header">
    <img :src="imageSrc" alt="Music Header Image" class="header-image" />
    <div class="header-info">
      <h1 class="name">{{ name }}</h1>
      <h3 class="nbMusic">Total music: {{ nbMusic }}</h3>
    </div>
  </div>
</template>

<style scoped>
.music-header {
  display: flex;
  align-items: center;
}

.header-image {
  width: 20%;
  height: auto;
  border-radius: 8px;
  margin-right: 16px;
}

.header-info {
  flex: 1;
}

.name, .nbMusic {
  margin: 0;
}
</style>
