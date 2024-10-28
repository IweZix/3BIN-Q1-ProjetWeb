<script lang="ts">
/**
 * Import of HomePage component
 */
import { renderPageTitle } from '@/utils/render/render';
import SearchBarComponent from '@/components/HomePage/SearchBarComponent.vue';
import MusicPageCardComponent from '@/components/MusicPage/MusicPageCardComponent.vue';

/**
 * Export of HomePage component
 */
export default {
  /**
   * Name of the component
   */
  name: 'HomePage',
  components: {
    SearchBarComponent,
    MusicPageCardComponent
  },

    methods: {
    updateMusicList(musicFound: Array<{ id: string, title: string, artist:  string, image: string, album: string }>) {
      // Met à jour la liste de musiques avec ce qui a été trouvé dans le composant enfant
      this.musicList = musicFound;
    }
  },
  /**
   * Data of the component
   */
  data() {
    return {
      listMusic: [] as Array<{ id: string, title: string, artist: string, image: string, album: string }>,  // Cette variable est passée au SearchBarComponent
      musicList: [] as Array<{ id: string, title: string, artist:string, image: string, album: string }>,  // Cette variable est utilisée pour afficher les résultats
    };
  },
  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  async mounted() {
    renderPageTitle('Melodiq');
  },
 
};
</script>

<template>
  <div class="text-center my-4 title-search">
    <h1>Melodiq your plateform of playlist </h1>
    <SearchBarComponent
       :listMusic="listMusic"
      @update:listMusic="updateMusicList"
    />
    <div if="musicList" class="container">
      
      <div class="row">
        <div class="playlist-grid">
        <MusicPageCardComponent
         v-for="music in musicList"
          :key="music.id"
          :title="music.title"
          :artist="music.artist"
          :image="music.image"
          :backContent="music.album"
        />
        </div>
      </div>
    </div>
  </div>
</template>





<style scoped >


.back-playlist {
  margin-right: 20px; /* Ajoute un espacement entre le back playlist et le header */
}

.playlist-grid {
  display: flex;
  flex-direction: column;
  gap: 160px;
  margin-top: 20px;
  justify-content: flex-start;
}

.music-card {
  flex: 0 1 auto;
}



</style>
