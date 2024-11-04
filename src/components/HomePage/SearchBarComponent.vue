<script lang="ts">
import router from '@/router/router';
import { searchHomepage } from '@/services/searchHomepage';
import Playlist from '@/types/Playlist';

export default {
  /**
   * Name of the component
   */
  data() {
    return {
      formData: {
        name: '',
      },
      errors: {} as Error,
    };
  },
  props: {
    listMusic: {
      type: Array ,
      required: true,
    },
  },
  methods: {
    validateForm() {
       // Validate name
      if (!this.formData.name) {
        this.errors.name = "A name is required.";
      }

      return Object.keys(this.errors).length === 0;
    },
    async submitForm() {
      if (this.validateForm()) {
        // Submit form logic (e.g., send data to API)
        console.log("Form submitted:", this.formData.name);
        const musicFound = await searchHomepage(this.formData.name);
        console.log(musicFound);
        this.$emit('update:listMusic', musicFound);
      } 
    }
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="name">
        <input type="text" id="name" placeholder="Enter the name of the song or the artist" v-model="formData.name" class="custom-input" />
      </div>
      <div>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.name {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
}

.form-container {
  width: 100%;
}

.error {
  color: red;
  font-size: 12px;
}

.submit-button {
  width: 80%;
  padding: 10px;
  background-color: #03C490;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #375a7f; 
}


.custom-input {
  width: 100%; 
  margin: 10px 0; 
  padding: 10px 15px; 
  border: 1px solid #ddd; 
  border-radius: 6px; 
  background-color: #262727; 
  font-size: 16px; 
  color: #6c757d; 
  outline: none; 
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
}

.custom-input::placeholder {
  color: white;
}

.custom-input:focus {
  border-color: #80bdff; 
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); 
}
</style>