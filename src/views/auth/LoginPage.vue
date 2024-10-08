<script lang="ts">

import { renderPageTitle } from '@/utils/render/render';
import { login } from '@/services/auths';
import InputComponent from '@/components/Auth/InputComponent.vue';
import RedirectButtonComponent from '@/components/buttons/RedirectButtonComponent.vue';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },

  components: {
    InputComponent,
    RedirectButtonComponent,
  },

  /**
   * Mounted lifecycle hook
   * This function is called when the component is mounted
   */
  mounted() {
    renderPageTitle('Login');
  },

  methods: {
    async login(){
      try {
        const response: any = await login(this.username, this.password);
        if(response?.token){
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        const alert: HTMLElement | null = document.querySelector('.alert');
        if(alert){
          alert.innerHTML = 'Invalid username or password';
        }
      }
    },
    updateUsername(value: string){
      this.username = value; 
    },
    updatePassword(value: string){
      this.password = value;
    },
  },
};
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <h2>Sign in</h2>
    <div>
      <InputComponent 
        placeholder="Username" 
        vmodel="username" 
        :method="updateUsername" 
      />
      <InputComponent 
        placeholder="Password" 
        vmodel="password" 
        :method="updatePassword"
        :password="true"
      />
      <button class="custom-button" @click="login()">Login</button>
      <div class="alert">
        <!-- Alert message will be displayed here -->
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <h6>Don't have a Melodiq account ? </h6>
      <RedirectButtonComponent 
        text="Create new account" 
        route="Register"
      />
    </div>
  </div>
</template>

<style scoped>
.custom-button {
    width: 230px; /* Ou définir une largeur spécifique comme 150px */
    margin: 10px 0;
    padding: 10px 20px;
    background-color: #4e73df;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
}


.custom-button:hover {
    background-color: #375a7f; /* Couleur du bouton lors du survol */
}
</style>

