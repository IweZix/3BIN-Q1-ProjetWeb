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
      <vue-flip :active-click="true" width="200px" height="300px">
        <!-- Face avant de la carte -->
        <template v-slot:front>
          <div class="card-front">
            <img :src="image" alt="Album cover" class="album-image" />
            <h3 class="title">{{ title }}</h3>
            <p class="artist">{{ artist }}</p>
          </div>
        </template>
        
        <!-- Face arrière de la carte -->
        <template v-slot:back>
          <div class="card-back">
            <h4>More Info</h4>
            <p>{{ backContent }}</p>
          </div>
        </template>
      </vue-flip>
    </div>
  </template>

  <style scoped>
  .music-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card-front, .card-back {
    text-align: center;
    padding: 10px;
  }
  
  .album-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .title {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .artist {
    font-size: 14px;
    color: gray;
  }
  
  .card-back {
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 10px;
  }
  
  </style>
  