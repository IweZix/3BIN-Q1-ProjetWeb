<script lang="ts">
/// <reference types="vue" />
import { renderPageTitle } from '@/utils/render/render';
import MusicPageBackPlayListComponent from '@/components/MusicPage/MusicPageBackPlayListComponent.vue';
import MusicPageCardComponent from '@/components/MusicPage/MusicPageCardComponent.vue';
import { getPlaylistUser } from '@/services/musics';
import { useRoute } from 'vue-router';
import AuthenticatedUser from '@/types/AuthenticatedUser';
import { verify } from '@/services/auths';
import Song from '@/types/Song';

export default {
  /**
   * Name of the component
   */
  name: 'MusicPage',
  components: {
    MusicPageBackPlayListComponent,
    MusicPageCardComponent, 
  },
  setup() {
    const route = useRoute();
    const playlistId = Number(route.params.id);

    return { 
      playlistId,
    };
  },
  data() {
    return {
      user: {} as AuthenticatedUser,
      name: '' as string,
      playlist: [] as Song[],
    };
  },

  methods: {
    async getPlaylistUser(playlistId: number) {
      try {
        const response = await getPlaylistUser(playlistId);
        this.playlist = response.songs;
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    }
  },
  
  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  async mounted() {
    renderPageTitle('Music');
    try {
      this.user = await verify(localStorage.getItem('token') || '');
      await this.getPlaylistUser(this.playlistId);
      console.log('Playlist:', this.playlist); // doit etre remove apres pour la version finale
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
    
  },

};
</script>

<template>
  <div class="text-center my-4 title-search">
    <h1>This is the MusicPage</h1>
    <h2>Playlist ID: {{ playlistId }}</h2>
  </div>

  <MusicPageBackPlayListComponent />

  <!-- doit etre refait pour afficher les musiques de la playlist -->
  <!-- Boucle sur la playlist pour générer une carte par musique -->
  <div class="playlist-grid">
    <MusicPageCardComponent 
      v-for="(track, index) in playlist" 
      :key="index" 
      :image="track.image"  
      :title="track.title" 
      :artist="track.artist[0].name" 
      :backContent="track.album" 
    />
  </div>
</template>

<style scoped>
.playlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
