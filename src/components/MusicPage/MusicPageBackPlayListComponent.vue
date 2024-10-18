<script lang="ts">
import router from '@/router/router';

export default {
    name: 'MusicPageBackPlayListComponent',
    mounted() {
        console.log('MusicPageBackPlayListComponent mounted');
    },
    methods: {
        goToPlayListPage() {
            router.push({
                name: 'Playlists'
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
        border: 2px solid black;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    #BackToPlaylistPage:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.8);
    }
</style>
