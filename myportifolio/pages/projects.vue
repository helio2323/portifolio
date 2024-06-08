<template>
    <div class="projects">
        <FirstSection 
        text="Look my open source projects"
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
    width: 80%;
    height: calc(100vh - 110px);
    gap: 20px;
    margin-top: 20px;

}

</style>