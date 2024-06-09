<template>
  <div class="header">
    <img src="../src/images/Frame 29.png" alt="">
    <nav :class="{ open: isOpen }">
      <NuxtLink @click="toggleMenu" to="/" exact-active-class="home-active">HOME</NuxtLink >
      <NuxtLink @click="toggleMenu" to="/about" exact-active-class="about-active">ABOUT</NuxtLink>
      <NuxtLink @click="toggleMenu" to="/projects" exact-active-class="projects-active">PROJECTS</NuxtLink>
      <NuxtLink @click="toggleMenu" to="/skills" exact-active-class="skills-active">SKILLS</NuxtLink>
      <NuxtLink @click="toggleMenu" to="/contacts" exact-active-class="contacts-active">CONTACTS</NuxtLink>
    </nav>
    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  isOpen = false
};
</script>

<style scoped>
.header {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 100px;
}

img {
  width: 85px;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #111C44;
  margin-left: 20px;
}

nav {
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  transition: max-height 0.3s ease-in-out;
}

nav.open {
  max-height: 100vh; /* Ajuste conforme necessário */
}

nav a:hover {
  color: var(--Primary);
  background-color: rgba(94, 114, 228, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  transition: all 0.8s;
}

a {
  text-decoration: none;
  padding: 10px 30px;
  color: var(--Secondary);
}

a.home-active, a.about-active, a.projects-active, a.skills-active, a.contacts-active {
  color: var(--Primary);
  text-decoration: underline;
}

/* Botão de Hambúrguer */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: var(--Primary);
  margin: 4px 0;
  transition: 0.4s;
}

/* Media Queries */
@media (max-width: 1024px) {
  nav {
    flex-direction: column;
    max-height: 0;
    position: absolute;
    overflow: hidden;
    background-color: var(--Background);
    height: 50%;
    top: 70px;
    left: 0;
    right: 0;
    width: 100%;
    transition: max-height 0.3s ease-in-out;
    z-index: 1;
  }

  .header {
    justify-content: space-between;
  }

  .hamburger {
    display: flex;
  }
}
</style>
