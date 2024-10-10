<script lang="js">

/**
 * Import of MusicPage component
 */
import { renderPageTitle } from '@/utils/render/render';
import MusicPageBackPlayListComponent from '@/components/MusicPage/MusicPageBackPlayListComponent.vue';
import { getOnePlaylist } from '@/services/playlists';
import { useRoute } from 'vue-router';


export default {
  /**
   * Name of the component
   */
  name: 'MusicPage',
  setup() {
    const route = useRoute();
    const playlistId = route.params.id;
    
    return { 
      playlistId,
    };
  },
  
  components: {
    MusicPageBackPlayListComponent,
  },

  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  async mounted() {
    renderPageTitle('Music');
  },

  /**
   * Methods of the component
   */
  methods: {
    /**
     * get current playlist User
     */
    async getPlaylistUser() {
      try {
        const response = await getOnePlaylist(this.playlistId, localStorage.getItem('token'));
        console.log(response);
      } catch (error) {
        console.error(error);
      }

    }
  }
};

</script>

<template>
    <div class="text-center my-4 title-search">
      <h1>This is the MusicPage</h1>
      <h2>Playlist ID: {{ playlistId }}</h2>
    </div>
    <MusicPageBackPlayListComponent />
</template>

<style></style>

