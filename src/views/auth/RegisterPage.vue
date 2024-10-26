<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';
import { register } from '@/services/auths';
import InputComponent from '@/components/Auth/InputComponent.vue';
import RedirectButtonComponent from '@/components/buttons/RedirectButtonComponent.vue';

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
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
    renderPageTitle('Register');
  },

  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        const alert: HTMLElement | null = document.querySelector('.alert');
        if (alert) {
          alert.innerHTML = 'Passwords do not match. Try again.';
        }
        return;
      }

      try {
        const response: any = await register(this.username, this.password);
        if (response?.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        const alert: HTMLElement | null = document.querySelector('.alert');
        if (alert) {
          alert.innerHTML = 'Registration failed. Please try again.';
        }
      }
    },
    updateUsername(value: string) {
      this.username = value;
    },
    updatePassword(value: string) {
      this.password = value;
    },
    updateConfirmPassword(value: string) {
      this.confirmPassword = value;
    },
  },
};
</script>

<template>
  <div class="regInBody">
  <div class="d-flex flex-column align-items-center">
    <h1>Register</h1>
    <div>
      <InputComponent 
        placeholder="Username" 
        vmodel="username" 
        :method="updateUsername" 
      />
      <a>Password</a>
      <InputComponent 
        placeholder="Password" 
        vmodel="password" 
        :method="updatePassword"
        :password="true"
      />
      <a>ConfirmPassword</a>
      <InputComponent 
        placeholder="Confirm Password" 
        vmodel="confirmPassword" 
        :method="updateConfirmPassword"
        :password="true"
      />
      <button class="custom-button" @click="register()">Register</button>
      <div class="alert">
        <!-- Alert message will be displayed here -->
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <h6>Already have a Melodiq account?</h6>
      <RedirectButtonComponent 
        text="Sign in" 
        route="Login"
      />
    </div>
  </div>
  </div>
</template>

<style scoped>

.regInBody {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
.custom-button {
    width: 250px;
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