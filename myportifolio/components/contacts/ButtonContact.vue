<template>
    <div class="email-badge">
        <img width="25  " height="25  " :src="urlimg"/>
      <span class="email-text">{{ text }}</span>
    </div>
  </template>
  
  <script setup>
  // No JavaScript needed for this simple component

  const props = defineProps({
    text: {
      type: String,
      default: ''
    },
    urlimg: {
      type: String,
      default: ''
    }
  })

  
  </script>
  
  <style scoped>
  .email-badge {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid var(--Secondary);
    border-radius: 5px;
    gap: 10px;
  }
  
  .email-icon {
    width: 24px;
    height: 24px;
    fill: var(--Primary); /* Cor do ícone */
    margin-right: 10px;
  }
  
  .email-text {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: var(--Secondary);
  }
  </style>
  