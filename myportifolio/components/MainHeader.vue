<template>
    <div class="header">
        <img src="../src/images/Frame 29.png" alt="">
        <nav>
            <NuxtLink to="/" exact-active-class="home-active">HOME</NuxtLink>
            <NuxtLink to="/about" exact-active-class="about-active">ABOUT</NuxtLink>
            <NuxtLink to="/projects" exact-active-class="projects-active">PROJECTS</NuxtLink>
            <NuxtLink to="/skills" exact-active-class="skills-active">SKILLS</NuxtLink>
            <NuxtLink to="/contacts" exact-active-class="contacts-active">CONTACTS</NuxtLink>
        </nav>
        <MainButton />
    </div>
</template>

<script setup>

</script>

<style scoped>

.header {
   height: 80px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 100%;
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
  gap: 10px; /* Espaçamento entre os links */
  width: 75%;
  justify-content: space-evenly;

}

a {
  text-decoration: none;
  background-color: var(--White);
  padding: 10px 30px ;
  color: var(--SecondaryGray); /* Cor padrão dos links */
}

a.home-active {
  color: var(--Purple); /* Cor do link HOME ativo */
  text-decoration: underline;

}

a.about-active {
  color: var(--Purple); /* Cor do link ABOUT ativo */
  text-decoration: underline;
}

a.projects-active {
  color: var(--Purple); /* Cor do link PROJECTS ativo */
  text-decoration: underline;
}

a.skills-active {
  color: var(--Purple); /* Cor do link SKILLS ativo */
  text-decoration: underline;
}

a.contacts-active {
  color: var(--Purple); /* Cor do link CONTACTS ativo */
  text-decoration: underline;
}

nav a:hover {
  color: var(--Purple);
  background-color: rgb(94, 114, 228, 0.2);
  padding: 10px 30px ;
  border-radius: 5px;
  transition: all 0.8s;


}

</style>