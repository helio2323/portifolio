<template>
    <div class="skills">
        <h3>Welcome to My Open Source Projects</h3>

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
    width: 100%;
    height: calc(100vh - 110px);
    gap: 20px;
}

h3 {
    color: var(--Primary);
    font-weight: 700;
}

@media screen and (max-width: 768px){

    .skills {
        align-items: center;
        text-align: center;

    }

}



</style>