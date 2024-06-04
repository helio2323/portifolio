<template>
    <div class="about">
        <PhotoSection 
        text="Inovate. Engage. Progresss."
        ptext="Welcome to my creative hub where innovation meets expression. Through a blend of imagination and craftsmanship, I strive to bring ideas to life. Each project is a testament to my commitment to pushing boundaries, sharing insights, and evolving with every endeavor. Join me on this journey of "
        secondText="Carrer"
        />
        <div class="experience">
            <Experience />
            <Experience />
            <Experience />
        </div>
    </div>
</template>

<script setup>

import PhotoSection from '../components/about/PhotoSection.vue'
import Experience from '../components/about/Experience.vue'

</script>

<style scoped>

.about {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: calc(100vh - 110px);
}

.experience {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}


</style>