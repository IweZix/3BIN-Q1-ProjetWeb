<script lang="ts">
import { addToPlaylist } from '@/services/playlists';
import Playlist from '@/types/Playlist';
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
    addtoPlaylist:{
      type: Boolean,
      default: false,
    },
    idMusic: {
      type: String ,
      default: '',
      required: false,},
    playlists: {
      type: Array<Playlist>,
      default: {},
    }},
  
      data() {
    return {
      isModalOpen: false,
      selectedPlaylist: { id: null, name: '' } ,
      currentMusicKey: '',
    }},
    methods:{
    openModal(musicKey: string ) {
      this.currentMusicKey = musicKey; // Set the current music key
      this.isModalOpen = true; // Open the modal
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedPlaylist = { id: null, name: '' };
      this.currentMusicKey = '';
    },
     async addToSelectedPlaylist() {
      if (this.selectedPlaylist) {
        if (this.selectedPlaylist.id) {
          try {
            const response = await addToPlaylist(this.selectedPlaylist.id, this.currentMusicKey);
            if (response.status == 201) {
              alert(`Added to ${this.selectedPlaylist.name}`);
              this.closeModal();
            }
          } catch (error) {
            alert('An error occurred');
          }
        } 
      } else {
        console.error('No playlist selected');
      }},
      }
});
</script>

<template>
  <div class="music-card">
    <vue-flip :active-click="true" width="100%" max-width=150px height="auto">
      <!-- Face avant de la carte -->
      <template v-slot:front>
        <div class="card-front">
          <img :src="image" alt="Album cover" class="album-image" />
          <div class="card-info">
            <h3 class="title">{{ title }}</h3>
            <p class="artist">{{ artist }}</p>
          </div>
           <!-- Button to open the modal -->
            <div class="button-addPlaylist">
            <button v-if="addtoPlaylist" @click="openModal(idMusic)" class="btn btn-primary">
              Add music to a playlist
            </button>
            </div>
        </div>
      </template>

      <!-- Face arrière de la carte -->
      <template v-slot:back>
        <div class="card-back">
          <h3 class="infoBack">More Info</h3>
          <h5 class="album">Album: {{ backContent }}</h5>
        </div>
      </template>
    </vue-flip>
  </div>

  <!-- Modal for selecting a playlist -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h4>Select a Playlist</h4>
        <select v-model="selectedPlaylist" class="form-select">
          <option v-for="playlist in playlists" 
          :key="playlist.id" 
          :value="{ id: playlist.id, name: playlist.name, musicKey: currentMusicKey }">
            {{ playlist.name }}
          </option>
        </select>
        <button @click="addToSelectedPlaylist" class="btn btn-primary mt-2">Add</button>
        <button @click="closeModal" class="btn btn-secondary mt-2">Cancel</button>
      </div>
    </div>
</template>

<style scoped>
.music-card {
  width: 350px;
  height: 150px;
  position: relative;
}

.card-front {
  display: flex; 
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #06708E;
  box-shadow: 0 2px 8px rgba(0, 0, 0.2, 0.1);
}

.album-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.card-back {
  width: 350px;
  height: 150px;
  background-color: #038A91;
  padding: 20px;
  text-align: center;
}

.card-info {
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  flex-grow: 1; 
  text-align: center; 
}

.title {
  color: #033235;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.artist {
  font-size: 13px; 
  font-weight: bold; 
  color: #103300; 
}

.card-back {
  background-color: #038A91;
  padding: 20px;
  border-radius: 10px;
  text-align: center; 
}

.infoBack {
  color: #F2F3C1;
  font-weight: bold;
}

.album,
.hrefBack {
  color: #103300; 
}

.button-addPlaylist {
  position: absolute; /* Positionne le bouton par rapport au conteneur parent */
  bottom: -150px; /* Espace en bas */
  right: -5px; /* Espace à droite */
  padding: 5px 10px; /* Ajuste le padding pour réduire la taille */
  font-size: 12px; /* Diminue la taille du texte */
}

</style>