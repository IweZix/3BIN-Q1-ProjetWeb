<script lang="ts">
import { logout } from '@/services/auths';

export default {
  name: 'LogoutComponent',
  async mounted() {
    try {

        localStorage.removeItem('token');
        localStorage.removeItem('username');

        
      await logout();
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