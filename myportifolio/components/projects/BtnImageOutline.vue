<template>
  <div>
      <button @click="handleLive">
      See Live
      <img width="20" height="20" src="https://img.icons8.com/material-sharp/24/5E72E4/globe--v1.png" alt="downloading-updates"/>
    </button>
  </div>
</template>

<script setup>

const handleLive = () => {
  navigateTo("https://app.challengedev.tech", { external: true });
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
  color: var(--Primary);
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: solid 1px var(--Background);
  cursor: pointer;
  max-width: 200px;
  height: 35px;
  padding: 10px;
  width: 100%;
  border: solid 1px var(--Primary);

}

div {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding: 0;
}

button:hover {
  border: solid 1px var(--Primary);
  box-shadow: 0 0 40px rgba(94, 114, 228, 0.5);
  transition: all 0.8s;
}
</style>
