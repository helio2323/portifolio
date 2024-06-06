<template>
    <div class="nuxt-card">
        <img width="30" height="30" :src="img" alt="vuejs"/>
      <p class="nuxt-text">{{ text }}</p>
    </div>
  </template>
  
  <script setup>

  const props = defineProps({
    img: {
        type: String,
        default: ''
    },

    text: {
        type: String,
        default: ''
    }
  })

  </script>
  
  <style scoped>
  .nuxt-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid #8392AB;
    border-radius: 10px;
    gap: 10px;
  }
  
  .nuxt-logo {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  
  .nuxt-text {
    color: #8392AB;
    font-family: 'Comfortaa', sans-serif;
    font-size: 20px;
  }
  </style>
  