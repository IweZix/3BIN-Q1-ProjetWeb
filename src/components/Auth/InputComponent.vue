<script lang="ts">
export default {
  name: 'InputComponent',
  props: {
    vmodel: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    method: {
      type: Function,
      required: true,
    },
    password: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleInput(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.method(value); // Appelle la méthode pour mettre à jour la valeur dans le parent
      this.$emit('update:vmodel', value); // Émet un événement 'update:vmodel'
    }
  },
};
</script>

<template>
    <div v-if="password">
        <input
            type="password"
            :placeholder="placeholder"
            :v-model="vmodel"
            @input="handleInput"
            class="custom-input"
        />
    </div>
    <div v-else>
        <input
            type="text"
            :placeholder="placeholder"
            :v-model="vmodel"
            @input="handleInput"
            class="custom-input"
        />
    </div>
</template>

<style scoped>
.custom-input {
    width: 100%; /* Prend toute la largeur de son conteneur */
    margin: 10px 0; /* Marge en haut et en bas pour espacer les inputs */
    padding: 10px 15px; /* Espacement interne pour rendre l'input plus confortable */
    border: 1px solid #ddd; /* Bordure grise claire */
    border-radius: 6px; /* Coins légèrement arrondis */
    background-color: #f8f9fa; /* Fond gris clair */
    font-size: 16px; /* Taille du texte */
    color: #6c757d; /* Couleur du texte grise */
    outline: none; /* Retire le contour par défaut lors du focus */
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Ajoute une transition douce */
}

.custom-input::placeholder {
    color: #adb5bd; /* Couleur du placeholder grise plus claire */
}

.custom-input:focus {
    border-color: #80bdff; /* Change la couleur de la bordure au focus */
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Ajoute un léger effet d'ombre au focus */
}
</style>

