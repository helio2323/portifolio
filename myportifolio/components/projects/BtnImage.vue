<template>
    <div>
        <button @click="handleClick">
        Source Code
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="downloading-updates"/>    </button>
    </div>
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
    color: #FFF;
    height: 50px;
    border-radius: 5px;
    background-color: #5E72E4;
    cursor: pointer;
    max-width: 200px;
    border: none;
    height: 35px;
    padding: 10px;

  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    box-shadow: 0 0 2.1875rem rgba(0, 0, 0, 0.1); /* 35px em rem */
    transition: all 0.8s;
  }
  </style>
  