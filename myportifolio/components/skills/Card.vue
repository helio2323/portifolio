<template>
  <div class="nuxt-card">
      <img width="35" height="35" :src="img" alt="vuejs"/>
    <p class="nuxt-text">{{ text }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  img: {
      type: String,
      default: ''
  },

  text: {
      type: String,
      default: ''
  }
})

</script>

<style scoped>
.nuxt-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 100px;
  border: 1px solid var(--Secondary);
  border-radius: 10px;
  gap: 10px;
}

.nuxt-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.nuxt-text {
  color: var(--Secondary);
  font-family: 'Comfortaa', sans-serif;
  font-size: 0.9rem;
}
</style>
