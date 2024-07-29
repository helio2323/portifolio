<template>
    <div class="first-section">
        <h3>Welcome To My Projects</h3>
  <!--
        <div class="menu">
           
            <ButtonSection
            text="In Development"
            />

           <ButtonSection
            text="Study Cases"
            />

            <ButtonSection
            text="Frellancers"
            />
        </div>
         -->
        <p>{{ text }}</p>

    </div>
</template>

<script setup>

import ButtonSection from './ButtonSection.vue'

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

.menu {
    display: flex;
    flex-direction: row;
    height:  60px;
    border: solid 1px var(--Primary);
    border-radius:  10px;
    align-items: center;
}

h3 {
    color: var(--Primary);
    font-weight: 700;
}

.first-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}


@media screen and (max-width: 768px){

    .first-section {
        align-items: center;
        text-align: center;
    }   
  }

</style>