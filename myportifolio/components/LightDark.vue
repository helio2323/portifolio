<template>
    <div>
      <!-- Conteúdo da sua página -->
  
      <!-- Botão flutuante -->
      <div class="floating-button" @click="toggleMenu">
        <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/laptop-settings--v2.png" alt="laptop-settings--v2"/>        <div v-if="isMenuOpen" class="menu">
          <div @click="selectTheme('light')">Light</div>
          <div @click="selectTheme('dark')">Dark</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      selectTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.style.setProperty('--Background', '#061139');
          document.documentElement.style.setProperty('--Text', '#FFFFFF');
          document.documentElement.style.setProperty('--Secondary', '#CFD2D9');
          document.documentElement.style.setProperty('--Tertiary', '#121C44');
           // Define a cor de fundo escura
        } else {
          document.documentElement.style.setProperty('--Background', '#FFFFFF');
          document.documentElement.style.setProperty('--Text', '#111C44');
          document.documentElement.style.setProperty('--Secondary', '#8392AB');
          document.documentElement.style.setProperty('--Tertiary', '#FFFFFF'); // Define a cor de fundo clara
        }
        // Aqui você pode adicionar lógica adicional para alternar entre os temas, se necessário
      }
    }
  }
  </script>
  <style>
  .floating-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background-color: var(--Primary); /* Cor do botão flutuante */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000; /* Garante que o botão esteja acima de outros elementos */
  }
  
  .menu {
    position: absolute;
    top: -70px;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--Primary); /* Cor do menu */
    border-radius: 5px;
    padding: 5px;
    z-index: 1001; /* Garante que o menu esteja acima do botão flutuante */
  }
  
  .menu div {
    padding: 5px;
    cursor: pointer;
  }

  div {
    color: var(--White);
  }
  

  </style>
  