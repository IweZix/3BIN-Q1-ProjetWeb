<script lang="js">

/**
 * Import of MusicPage component
 */
import { renderPageTitle } from '@/utils/render/render';
import MusicPageBackPlayListComponent from '@/components/MusicPage/MusicPageBackPlayListComponent.vue';

export default {
  /**
   * Name of the component
   */
  name: 'MusicPage',

  /**
   * Data of the component
   */
  
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
      <h1>This is the MusicPage</h1>
    </div>
    <MusicPageBackPlayListComponent />
</template>

<style></style>

