<script lang="ts">

export default {
  name: 'LogoutComponent',
  async mounted() {
    try {

        localStorage.removeItem('token');
        localStorage.removeItem('username');


      this.$router.push({ name: 'Login' });
    } catch (error) {
      console.error('An error occurred while logging out:', error);
    }
  },
  render() {
    return null; // Ce composant n'a pas besoin de template
  }
};
</script>