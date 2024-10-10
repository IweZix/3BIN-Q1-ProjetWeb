<script lang="js">
import router from '@/router/router';

export default {
    /**
     * Name of the component
     */
    name: 'MusicPageBackPlayListComponent',
    
    /**
     * Mounted lifecycle hook
     * This function is called when the component is mounted
     */
    mounted() {
        console.log('MusicPageBackPlayListComponent mounted');
    },
    
    /**
     * Methods of the component
     */
    methods: {
        /**
         * Go back to PlayList Page
         */
        goToPlayListPage() {
            router.push({
                name: 'Home' // Change this to the name in the router to the PlayList Page
            });
        }
    }
};
</script>

<template>
    <button id="BackToPlaylistPage" @click="goToPlayListPage" class="btn btn-primary">←</button>
</template>

<style>
    #BackToPlaylistPage {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: transparent;
            color: black;
            text-align: center;
            line-height: 60px;
            font-size: 25px;
            border: 2px solid black; /* Bordure pour démarquer le bouton */
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
        }

        #BackToPlaylistPage:hover {
            background-color: rgba(0, 0, 0, 0.1); /* Sombre quand la souris passe dessus */
            color: rgba(0, 0, 0, 0.8); /* Couleur de la flèche légèrement plus sombre */
        }

</style>