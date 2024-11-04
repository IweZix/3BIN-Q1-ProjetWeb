<script lang="ts">
import { verify } from '@/services/auths';
export default {
  name: 'NavbarComponent',
  data() {
    return {
      username: localStorage.getItem('username') || '',
      token: localStorage.getItem('token') || '',
      auth: false,
    };
  },
  async mounted() {
    try {
      const response: any = await verify(this.token);
      if (response?.token) {
        this.auth = true;
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  }
};
</script>

<template>
  <div v-if="auth" class="" role="alert">
    <div class="p-4" id="navbarWrapper">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand nav-link">Melodiq</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/playlists" class="nav-link">Playlists</router-link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/user" class="btn btn-primary">{{ username }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/logout" class="btn btn-danger">Logout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div v-else class="" role="alert">
    <div class="p-4" id="navbarWrapper">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand nav-link">Melodiq</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <div>
                <router-link to="/login" class="btn btn-primary">Login</router-link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>


</template>

<style scoped>
.nav {
  background-color: rgb(27, 27, 27);
  border-bottom: 1px solid rgb(15, 15, 15); 
}

.nav-link {
  color: white;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
}

.btn {
  margin: 0 10px;
}

</style>