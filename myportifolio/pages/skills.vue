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
    color: #5E72E4;
    font-weight: 700;
    font-size: 2.5rem;
}

.menu {
    display: flex;
    flex-direction: row;
    height:  60px;
    border: solid 1px #5E72E4;
    border-radius:  10px;
    align-items: center;
}


</style>