<script lang="ts">
/**
 * Import of HomePage component
 */
import { renderPageTitle } from '@/utils/render/render';
import SearchBarComponent from '@/components/HomePage/SearchBarComponent.vue';
/**
 * Export of HomePage component
 */
export default {
  /**
   * Name of the component
   */
  name: 'HomePage',
  components: {
    SearchBarComponent
  },

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
    <h1>Melodiq your plateform of playlist </h1>
    <SearchBarComponent />
  </div>
</template>

<style></style>
