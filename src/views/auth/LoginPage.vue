<script lang="ts">

import { renderPageTitle } from '@/utils/render/render';
import { login } from '@/services/auths';
import InputComponent from '@/components/Auth/InputComponent.vue';
import RedirectButtonComponent from '@/components/buttons/RedirectButtonComponent.vue';
import AuthenticatedUser from '@/types/AuthenticatedUser';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '' as string,
      password: '' as string,
    };
  },
  components: {
    InputComponent,
    RedirectButtonComponent,
  },
  mounted() {
    renderPageTitle('Login');
  },
  methods: {
    /**
     * Login the user
     */
    async login(){
      try {
        const response: AuthenticatedUser = await login(this.username, this.password);
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
    /**
     * Update the username value
     * @param {string} value - The new value
     */
    updateUsername(value: string){
      this.username = value; 
    },
    /**
     * Update the password value
     * @param {string} value - The new value
     */
    updatePassword(value: string){
      this.password = value;
    },
  },
};
</script>

<template>
  <div class="logInBody">
  <div class="d-flex flex-column align-items-center">
    <h1>Sign in</h1>
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
        text="Register" 
        route="Register"
      />
    </div>
  </div>
  </div>
</template>

<style scoped>
.logInBody {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
.custom-button {
    width: 250px; /* Ou définir une largeur spécifique comme 150px */
    margin: 10px 20px;
    padding: 10px 20px;
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


.custom-button:hover {
    background-color: #375a7f; 
}
</style>

