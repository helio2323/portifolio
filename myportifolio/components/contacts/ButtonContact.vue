<template>
    <div class="email-badge">
        <img width="30  " height="30  " src="https://img.icons8.com/fluency-systems-filled/48/000000/ms-outlook.png" alt="ms-outlook"/>
      <span class="email-text">{{ text }}</span>
    </div>
  </template>
  
  <script setup>
  // No JavaScript needed for this simple component

  const props = defineProps({
    text: {
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
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    background-color: #F4F4F4;
  }
  
  .email-icon {
    width: 24px;
    height: 24px;
    fill: #0078D4; /* Cor do ícone */
    margin-right: 10px;
  }
  
  .email-text {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
  }
  </style>
  