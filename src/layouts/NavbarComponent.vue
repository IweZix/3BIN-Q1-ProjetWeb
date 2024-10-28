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
  <div v-if="auth" class="nav" role="alert">
    <div class="container-fluid p-0">
      <div class="row justify-content-between">
        <div class="p-2" id="navbarWrapper">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <router-link to="/" class="navbar-brand nav-link" id="demonopediaLogo">Melodiq</router-link>
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
                
                <div class="col-10">
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
                </div>
             
                <div class="col-3">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div class="col-3">
                      <li class="nav-item" id="btnConnected">
                        <router-link to="/user" class="btn btn-primary">{{ username }}</router-link>
                      </li>
                    </div>
                    <li class="nav-item" id="btnLogout">
                      <router-link to="/logout" class="btn btn-danger">Logout</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="nav" role="alert">
    <div class="container-fluid p-0">
      <div class="row justify-content-between">
        <div class="p-2" id="navbarWrapper">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <router-link to="/" class="navbar-brand nav-link" id="demonopediaLogo">Melodiq</router-link>
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
                <div class="col-11">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-4">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link to="/login" class="btn btn-primary">Login</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
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

.nav-link:hover {
  color: #01A98D;
  
}

.btn-primary {
  background-color: #01A98D;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  border-radius: 10%;
  
}

.btn-primary:hover {
    background-color: #06708E; 
}



</style>
