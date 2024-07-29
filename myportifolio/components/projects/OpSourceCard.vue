<template>
  <div class="project-card">
    <div class="image-container">
    </div>
    <div class="content">
      <h2 class="title">Challenge DEV</h2>
      <p class="description">
        This project was made for the OneBitCode hackton with the aim of creating a teaching platform with gamification

      </p>

      <img src="" alt="">

      <div class="technologies">
        <h3>Technologies</h3>
        <div class="icons">
          <img width="40" height="40" src="https://img.icons8.com/color/48/nuxt-jc.png" alt="vuejs"/>
          <img width="40" height="40" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
          <img width="40" height="40" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
          <img width="40" height="40" src="https://img.icons8.com/color/48/postgreesql.png" alt="tailwind_css"/>
          <img width="40" height="40" src="https://img.icons8.com/fluency/48/docker.png" alt="tailwind_css"/>
          <img width="40" height="40" src="https://img.icons8.com/color/48/F25833/nginx.png" alt="tailwind_css"/>
          
      </div>
      </div>
      <div class="buttons">
  <BtnImageOutline />
            <BtnImage />

        
      </div>
    </div>
  </div>
</template>

<script setup>

import BtnImageOutline from './BtnImageOutline.vue'
import BtnImage from './BtnImage.vue'

</script>

<style scoped>
.project-card {
  width: 330px;
  background-color: var(--Tertiary);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid var(--Primary);
  padding: 5px;
}

.project-card:hover {
    border: solid 1px var(--Primary);
    box-shadow: 0 0 40px rgba(94, 114, 228, 0.2);
    transition: all 0.5s;
}

.image-container {
  height: 180px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border-radius: 16px;
  background-image: url("../../src/images/challengedev.png");
  background-size: cover;
  background-position: center;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 10px;
}

.title {
  font-size: 24px;
  color: var(--Primary);
  margin: 0 0 8px 0;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: var(--Secondary);
  margin: 30px 0 30px 0;
  line-height: 1.5;
  text-align: justify;
  
}

.technologies {
  margin-bottom: 16px;
  padding: 0;
}

.technologies h3 {
  font-size: 18px;
  color: var(--Primary);
  margin: 0 0 8px 0;
}

.icons {
  display: flex;
  gap: 8px;
  padding: 0;
}

.icon {
  width: 24px;
  height: 24px;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0;
  align-items: start;
  justify-content: start;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.live-button {
  background-color: var(--Primary);
  color: var(--White);
}

.live-button:hover {
  background-color: var(--Primary);
}

.code-button {
  background-color: var(--Text);
  color: var(--White);
}

.code-button:hover {
  background-color: var(--Text);
}


@media screen and (max-width: 1300px){
  .project-card {
    max-width: 300px;

  }
}

</style>
