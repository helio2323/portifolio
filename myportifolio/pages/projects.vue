<template>
    <div class="projects">
        <FirstSection 
        />
        <OpSourceCard />
    </div>
</template>

<script setup>

import FirstSection from '../components/projects/FirstSection.vue'
import OpSourceCard from '../components/projects/OpSourceCard.vue'

</script>

<style scoped>

.projects {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 110px);
    gap: 20px;
    margin-top: 20px;

}

@media screen and (max-width: 768px){

    .projects {
        align-items: center;
    }

}

</style>