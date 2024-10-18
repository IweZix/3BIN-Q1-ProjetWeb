<script lang="ts">
/**
 * Import of HomePage component
 */
import { renderPageTitle } from '@/utils/render/render';
import 

export default {
  /**
   * Name of the component
   */
  name: 'HomePage',

  /**
   * Data of the component
   */
  data() {
    return {
      integer: 0 as number,
      musicName: '' as string
    };
  },

  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  async mounted() {
    renderPageTitle('Melodiq');
  },

  /**
   * Methods of the component
   */
  methods: {
    /**
     * Increment the integer value
     */
    incrementInteger() {
      this.integer++;
    }
  }
};
</script>

<template>
  <div class="text-center my-4 title-search">
    <h1>MelodiqPatate</h1>
  </div>
  <div class="text-center my-4">
    <input class="text-center my-4" type="text" placeholder="Chercher votre Musique" v-model="musicName" />
    <button @click="incrementInteger" class="btn btn-primary">Increment</button>
  </div>
</template>

<style></style>
