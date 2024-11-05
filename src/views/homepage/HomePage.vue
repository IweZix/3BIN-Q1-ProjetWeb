<script lang="ts">
/**
 * Import of HomePage component
 */
import { renderPageTitle } from '@/utils/render/render';
import SearchBarComponent from '@/components/HomePage/SearchBarComponent.vue';
import MusicPageCardComponent from '@/components/MusicPage/MusicPageCardComponent.vue';
import AuthenticatedUser from '@/types/AuthenticatedUser';
import Playlist from '@/types/Playlist';
import { verify } from '@/services/auths';
import { getAllPlaylists } from '@/services/playlists';

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
      user:{} as AuthenticatedUser,
      playlist: {} as Array<Playlist>,
      isLoading: true as boolean,
    };
  },

  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  async mounted() {
    renderPageTitle('Melodiq');
    try {
      this.user = await verify(localStorage.getItem('token') || '');
      this.playlist= await getAllPlaylists();
      console.log('Playlist:', this.playlist); // doit être supprimé après pour la version finale
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  },
 
};
</script>

<template>
  <div class="home-container">
    <div class="content-wrapper text-center my-4 title-search">
      <h1>Melodiq your platform of playlist</h1>
      <SearchBarComponent
        :listMusic="listMusic"
        @update:listMusic="updateMusicList"
      />
    </div>
    <div class="music-wrapper">
      <div v-if="musicList" class="container">
        <div class="row">
          <div class="playlist-grid">
            <MusicPageCardComponent
              v-for="music in musicList"
              :key="music.id"
              :idMusic="music.id"
              :title="music.title"
              :artist="music.artist"
              :image="music.image"
              :backContent="music.album"
              :addtoPlaylist="!!user.username"
              :playlists="playlist"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column; /* Empile les éléments verticalement */
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content-wrapper {
  max-width: 800px; /* Définir une largeur maximale pour le conteneur */
  width: 100%;
}

.music-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.music-list-container {
  width: 100%;
  max-width: 800px; /* Définir une largeur maximale pour le conteneur */
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(1); /* Minimum 1 élément, maximum 3 éléments */
  margin-top: 20px;
}

.music-card {
  flex: 0 1 auto;
}

.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.title-search {
  margin-top: 20px;
}

</style>