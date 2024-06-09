<template>

<div>

  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">


  <NuxtLayout>
    <NuxtPage />
    <MainFooter />
  </NuxtLayout>
</div>



</template>

<style>

#__nuxt {
  padding: 0;
  background-color: var(--Background);
  width: 100vw;
  height: 100vh;
}

* {
  font-family: 'Comfortaa', cursive;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  

}

div { 
  padding: 0 10px 0 10px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
