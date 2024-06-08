<template>
    <div class="skills">
        <h1>Welcome to My Open Source Projects</h1>

        <FrontEnd />
        <Backend />
        <Others />

        <h4></h4>


    </div>
</template>

<script setup>

import ButtonSection from '../components/projects/ButtonSection.vue'
import FrontEnd from '../components/skills/FrontEnd.vue'
import Backend from '../components/skills/Backend.vue'
import Others from '../components/skills/Others.vue'

</script>

<style scoped>

.skills {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: calc(100vh - 110px);
    gap: 20px;
}

h1 {
    color: var(--Primary);
    font-weight: 700;
    font-size: 2.5rem;
}


</style>