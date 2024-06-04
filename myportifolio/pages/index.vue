<template>
    <div id="app">
        <NameText text="Hi, I am Helio Lima" />
        <StackText text="Back-end +" text_2="Front-end Developer" />
        <ObsText text="I break down complex user experience problemas to create integritly focussed solutions that connect billions of people"/>
        <div class="btn">
            <Btn />
            <a :href="github" target="_blank">
                <img width="40" height="40" src="https://img.icons8.com/material-outlined/40/5E72E4/github.png" alt="github"/>
            </a>
            <a :href="linkedin" target="_blank">
                <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/40/5E72E4/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>
            </a>
        </div>
    </div>
</template>

<script setup>

import NameText from '../components/Index/NameText.vue'
import StackText from '../components/Index/StackText.vue'
import ObsText from '../components/Index/ObsText.vue'
import Btn from '../components/Index/Btn.vue'

const props = defineProps({
    github: {
        type: String,
        default: 'https://github.com/helio2323'
    },
    linkedin: {
        type: String,
        default: 'https://linkedin.com/in/helioreislima/'
    }
})

</script>

<style scoped>

#app {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: calc(100vh - 110px);
    justify-content: center;
    row-gap: 20px;  
}

.btn {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    align-items: center;

}

</style>