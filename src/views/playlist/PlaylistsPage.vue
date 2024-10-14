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
      playlists: {} as Array<any>
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
      console.log(this.playlists[1].songs.length);
      
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
  <div class="container">
      <div if="playlists" class="container">
        <div class="row">
              <CardComponent v-for="playlist in playlists"
                :key="playlist.id"
                :id="playlist.songs.length ? playlist.songs[0].id : null"
                :title="playlist.name"
                :nbMusic="playlist.songs.length"
              />
            </div>
      </div>
  </div>
</template>

<style></style>
