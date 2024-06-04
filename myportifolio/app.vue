<template>

<div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</div>



</template>

<style>

* {
  margin: 0;
  font-family: Poppins, sans-serif;

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
