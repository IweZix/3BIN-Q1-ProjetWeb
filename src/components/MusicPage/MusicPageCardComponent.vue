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
            await addToPlaylist(this.selectedPlaylist.id, this.currentMusicKey);
            this.closeModal();
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
    <vue-flip :active-click="true" width="100%" max-width=100% height="auto">
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
            <button 
            v-if="addtoPlaylist" 
            @click="openModal(idMusic)" 
            class="btn btn-primary">
              +
              <span class="tooltip-text">Add to a Playlist</span>
            </button>
            </div>
        </div>
      </template>

      <!-- Face arrière de la carte -->
      <template v-slot:back>
        <div class="card-back">
          <p class="infoBack">More Info</p>
          <p class="album">Album: {{ backContent }}</p>
        </div>
      </template>
    </vue-flip>
  </div>

  <!-- Modal for selecting a playlist -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content mb-2">
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
.card-front {
  display: flex; 
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #01A98D;
  box-shadow: 0 2px 8px rgba(0, 0, 0.2, 0.1);
}

.music-card {
  width: 75%;
  height: 150px;
  margin-left: 12.5%;
  position: relative;
  margin-bottom: 20px;
}

.album-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.card-back {
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
  color: #0e2425;
  font-size: 23px;
  font-weight: bold;
  margin: 0;
}

.artist {
  font-size: 15px; 
  font-weight: bold; 
  color: #023b32; 
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
  font-size: 1.4rem;
}
.album {
  font-size: 1.2rem;
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
  color: #fff;
}

.btn{
  background-color: #16be86;
  border: none;
}

.btn:hover {
  background-color: #043e4e;
}

.btn-secondary {
  background-color: #F2F3C1;
  color: #333;
}


.tooltip-text {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 10%; /* Position en-dessus du bouton */
  left: -100%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.button-addPlaylist:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>