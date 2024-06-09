<template>
  <a
  href="https://drive.google.com/file/d/1A5VPufcyjhUtc3MldbEogWAibyJR_1sV/view?usp=sharing"
  target="_blank"
 >
  Download CV
    <img 
      width="30" 
      height="30" 
      :src="computedImgSrc" 
      alt="downloading-updates"/>    
  </a>



</template>

<script setup>



import { ref, onMounted } from 'vue';

const props = defineProps({
  img: {
    type: String,
    default: 'https://img.icons8.com/ios-filled/50/5E72E4/downloading-updates.png' // Vamos gerar dinamicamente a URL da imagem com base na cor
  }
});

// Reactive variable to hold the image source
const computedImgSrc = ref(props.img);

onMounted(() => {
  // This code will run only on the client-side
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--Primary').trim().substring(1);
  computedImgSrc.value = `https://img.icons8.com/ios-filled/50/${iconColor}/downloading-updates.png`;
});


</script>

<style scoped src="../../styles/colors.css"></style>

<style scoped>
/* Estilos opcionais para o botão */
a {
  text-decoration: none;
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
  border: solid 1px var(--Primary);
  color: var(--Primary);
  cursor: pointer;
  padding: 0 30px;
  max-width: 250px;
}

a:hover {
  box-shadow: 0 0 2.1875rem rgba(0, 0, 0, 0.1); /* 35px em rem */
  transition: all 0.8s;
}
</style>
