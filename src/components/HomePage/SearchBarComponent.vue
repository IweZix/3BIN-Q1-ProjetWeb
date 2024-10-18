<script lang="ts">
import router from '@/router/router';

import { searchHomepage } from '@/services/searchHomepage';

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
        const musicFound= await searchHomepage(this.formData.name);
        console.log(musicFound);
        

      } 
    }
  }
};
</script>


<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" id="name" placeholder="Enter the name of the song or the artist:" v-model="formData.name" />
      </div>
      <div>
        <span v-if="errors.name" class="error ">{{ errors.name }}</span>
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" id="name" placeholder="Enter the name of the song or the artist:" v-model="formData.name" />
      </div>
      <div>
        <span v-if="errors.name" class="error ">{{ errors.name }}</span>
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
</template>


<style scoped>
#name {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: content-box;
}

.form-container {
  width: 300px;
  margin: 0 auto;
}

.error {
  color: red;
  font-size: 12px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #319f35;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

.submit-button:active {
  background-color: #388e3c;
}

.submit-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>


