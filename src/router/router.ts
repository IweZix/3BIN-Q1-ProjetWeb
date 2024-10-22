/**
 * Import vue-router
 */
import { createRouter, createWebHistory } from 'vue-router';

/**
 * Import views
 */
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import NotFound from '@/views/NotFoundPage.vue';
import Music from '@/views/MusicPage.vue';

import Login from '@/views/auth/LoginPage.vue';
import Register from '@/views/auth/RegisterPage.vue';
import Playlists from '@/views/playlist/PlaylistsPage.vue';

/**
 * Import components
 */
import Logout from '../components/Auth/LogoutComponent.vue';

/**
 * Define routes
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists
  },
  {
    path: '/playlists/:id',
    name: 'Music',
    component: Music
  },
  {
    path: '/logout',
    name: 'Logout',
    component : Logout
  },
  /**
   * Define not found route
   */
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

/**
 * Create router
 */
export default createRouter({
  // Add history to router
  history: createWebHistory(),
  // Give routes
  routes
});
