<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Create New Playlist</h2>
      <form @submit.prevent="createPlaylist">
        <div class="form-group">
          <label for="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            v-model="playlistName"
            type="text"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
        <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreatePlaylistModal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      playlistName: ''
    };
  },
  methods: {
    createPlaylist() {
      this.$emit('playlist-created', this.playlistName);
      this.playlistName = '';
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    }
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

.btn {
  margin-right: 10px;
}
</style>