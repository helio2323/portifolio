<template>
    <div class="about">
        <PhotoSection 
        text="Inovate. Engage. Progresss."
        pstart="Hi, I'm Helio Fernandes. I started programming in 2019, 
        working as a freelancer."
        pmidle="In my career, I have worked on various projects, 
        honing my skills in both frontend and backend development. 
        I am passionate about creating efficient and scalable web applications, 
        and I continually strive to stay updated with the latest technologies 
        and best practices in the field."
        pend="When I'm not coding, I enjoy reading about new technologies and playing video games. 
        I believe in the power of continuous learning 
        and am always looking for new challenges and opportunities 
        to grow as a developer."
        secondText="Carrer"
        />

        
        <div class="experience">
            <Experience_Modern />
            <Experience_IBL />
            <Experience_Mundial />

        </div>
    </div>
</template>

<script setup>

import PhotoSection from '../components/about/PhotoSection.vue'
import Experience_Modern from '../components/about/Experience_Modern.vue'
import Experience_IBL from '../components/about/Experience_IBL.vue'
import Experience_Mundial from '../components/about/Experience_Mundial.vue'

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