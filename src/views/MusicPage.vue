<script lang="ts">
/// <reference types="vue" />
import { renderPageTitle } from '@/utils/render/render';
import MusicPageBackPlayListComponent from '@/components/MusicPage/MusicPageBackPlayListComponent.vue';
import MusicPageCardComponent from '@/components/MusicPage/MusicPageCardComponent.vue';
import MusicPageHeaderComponent from '@/components/MusicPage/MusicPageHeaderComponent.vue';
import { getPlaylistUser } from '@/services/musics';
import { useRoute } from 'vue-router';
import AuthenticatedUser from '@/types/AuthenticatedUser';
import { verify } from '@/services/auths';
import Playlist from '@/types/Playlist';

export default {
  /**
   * Name of the component
   */
  name: 'MusicPage',
  components: {
    MusicPageBackPlayListComponent,
    MusicPageCardComponent, 
    MusicPageHeaderComponent,
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
      playlist: {} as Playlist,
      isLoading: true as boolean,
    };
  },

  methods: {
    async getPlaylistUser(playlistId: number) {
      try {
        const response: Playlist = await getPlaylistUser(playlistId);
        this.playlist = response;
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
      console.log('Playlist:', this.playlist); // doit être supprimé après pour la version finale
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  },
};
</script>

<template>
  <div class="music-page">
    <div v-if="isLoading" class="text-center">
      <div class="spinner-border text-primary" role="status">
      </div>
    </div>
    <div v-else>
      <div class="header-container">
        <MusicPageBackPlayListComponent class="back-playlist" />
        <MusicPageHeaderComponent 
          :imageSrc="playlist.songs && playlist.songs.length > 0 ? playlist.songs[playlist.songs.length - 1].image : ''"
          :name="playlist.name"
          :nbMusic="playlist.songs ? playlist.songs.length : 0"
          class="music-header"
        />
      </div>

      <div class="playlist-grid">
        <MusicPageCardComponent 
          v-for="song in playlist.songs" 
          :key="song.id" 
          :image="song.image"  
          :title="song.title" 
          :artist="song.artist[0]" 
          :backContent="song.album"
        />
      </div>
    </div>
  </div>
</template>

<style>
.header-container {
  display: flex;
  justify-content: center; /* Centre les composants horizontalement */
  align-items: center; /* Centre les composants verticalement */
  margin-bottom: 20px; /* Ajoute un espacement entre le header et la playlist */
}

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
