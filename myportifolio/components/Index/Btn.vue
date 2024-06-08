<template>
    <button @click="handleClick">
        Download CV
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/5E72E4/downloading-updates.png" alt="downloading-updates"/>    
      </button>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Estilos opcionais para o botão */
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    height: 50px;
    border-radius: 100px;
    background-color: transparent;
    border: solid 1px var(--Purple);
    color: var(--Purple);
    cursor: pointer;
    padding: 0 30px;
    max-width: 200px;
  }


  button:hover {
    box-shadow: 0 0 2.1875rem rgba(0, 0, 0, 0.1); /* 35px em rem */
    transition: all 0.8s;
  }
  </style>
  