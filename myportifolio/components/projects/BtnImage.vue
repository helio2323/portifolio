<template>
  <div>
      <button @click="handleGithub">
      See Code
      <img @click="handleGithub" width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="downloading-updates"/>
    </button>
  </div>
</template>

<script setup>

const handleGithub = () => {
  navigateTo("https://github.com/helio2323/OneBitDev", { external: true });
}

</script>

<style scoped>
/* Estilos opcionais para o botão */
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--White);
  height: 50px;
  border-radius: 5px;
  background-color: var(--Primary);
  cursor: pointer;
  max-width: 200px;
  border: none;
  height: 35px;
  padding: 10px;
  width: 100%;
}

div {
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 0;

}

button:hover {
  box-shadow: 0 0 40px rgba(94, 114, 228, 0.5);
  transition: all 0.8s;
}
</style>
