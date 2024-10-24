<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';
import CardComponent from '@/components/playlist/CardComponent.vue';
import { verify } from '@/services/auths';
import { getAllPlaylists } from '@/services/playlists';
import AuthenticatedUser from '@/types/AuthenticatedUser';
import VanillaTilt from '@/scripts/vanilla-tilt';

export default {
  name: 'PlaylistsPage',
  data() {
    return {
      user: {} as AuthenticatedUser,
      playlists: {} as Array<any>,
      isLoading: true as boolean 
    };
  },

  components: {
    CardComponent
  },

  async mounted() {
    renderPageTitle('About');
    try {
      this.user = await verify(localStorage.getItem('token') || '');
      this.playlists = await getAllPlaylists();
      this.isLoading = false;
    } catch (error) {
      console.error('fetching data failed');
    };

    this.$nextTick(() => {
      const tiltElements = document.querySelectorAll('.card');
      if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5
        });
      }
    });
  }
};
</script>

<template>
  <div class="text-center my-4 title-search">
    <h1>There is your playlists {{ user.username }} </h1>
  </div>
  <div v-if="isLoading" class="text-center">
    <div class="spinner-border text-primary" role="status">
    </div>
  </div>
  <div v-else class="text-center">
    <div v-if="playlists.length > 0" class="text-center">
      <div class="container">
        <div if="playlists" class="container">
          <div class="row">
                <CardComponent v-for="playlist in playlists"
                  :key="playlist.id"
                  :playlistKey="playlist.id"
                  :id="playlist.songs.length ? playlist.songs[0].id : null"
                  :title="playlist.name"
                  :nbMusic="playlist.songs.length"
                />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h1>There is no playlists</h1>
    </div>
  </div>
</template>

<style></style>
