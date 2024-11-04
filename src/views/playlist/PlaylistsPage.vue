<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';
import CardComponent from '@/components/playlist/CardComponent.vue';
import { verify } from '@/services/auths';
import { getAllPlaylists } from '@/services/playlists';
import AuthenticatedUser from '@/types/AuthenticatedUser';
import VanillaTilt from '@/scripts/vanilla-tilt';
import { VueFlip } from 'vue-flip';
import InputComponent from '@/components/Auth/InputComponent.vue';
import { create } from '@/services/playlists';

export default {
  name: 'PlaylistsPage',
  data() {
    return {
      user: {} as AuthenticatedUser,
      playlists: {} as Array<any>,
      isLoading: true as boolean,
      isModalVisible: false,
      playlistName: '' as string
    };
  },

  components: {
    CardComponent,
    VueFlip,
    InputComponent
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
  },

  methods: {
    /**
     * Show the create playlist modal
     */
    showCreatePlaylistModal() {
      this.isModalVisible = true;
    },
    /**
     * Handle the playlist creation
     */
    async handlePlaylistCreated() {
      if (!this.playlistName) {
        return;
      }

      const response = await create(this.playlistName);
      if (response) {
        this.playlists.push(response);
        this.playlistName = '';
        this.isModalVisible = false;
      }

    },
    /**
     * Update the playlist name
     * @param {string} value - The new playlist name
     */
    updatePlaylistName(value: string) {
      this.playlistName = value;
    }
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
      <div class="container text-center">
        <div class="row">
          <div class="col-md-3 mb-4">
            <vue-flip :active-click="true" width="100%" height="95%">
              <template v-slot:front>
                <div class="add-playlist-card card-body d-flex justify-content-center align-items-center">
                  <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>+</h1>
                  </div>
                </div>
              </template>
              <template v-slot:back>
                <div class="add-playlist-card card-body d-flex flex-column justify-content-center align-items-center">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <InputComponent 
                      placeholder="Playlist name" 
                      vmodel="playlistName" 
                      :method="updatePlaylistName"
                      :password="false"
                      @click.stop
                    />
                    <button @click="handlePlaylistCreated" class="btn btn-primary mt-3">Create</button>
                  </div>
                </div>
              </template>
            </vue-flip>
          </div>
          <CardComponent v-for="playlist in playlists"
            :key="playlist.id"
            :playlistKey="playlist.id"
            :id="playlist.songs.length ? playlist.songs[0].id : null"
            :title="playlist.name"
            :nbMusic="playlist.songs.length"
            class="col-md-3 mb-4"
          />
        </div>
      </div>
    </div>
    <div v-if="playlists.length==0" class="text-center">
      <h1>Oops no playlist found </h1> 
       <h1> Try to add a new one</h1>      
    </div>
</template>

<style scoped>
.add-playlist-card {
  cursor: pointer;
  border: 2px dashed #007bff;
  height: 100%;
  min-height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem; /* Ajustez la taille de la police selon vos besoins */
}

</style>
