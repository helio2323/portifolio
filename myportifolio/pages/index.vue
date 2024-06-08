<template>
    <div id="app">
        <NameText text="Hi, I am Helio Lima" />
        <StackText text="Back-end +" text_2="Front-end Developer" />
        <ObsText text="I break down complex user experience problemas to create integritly 
        focussed solutions that connect billions of people"/>
        <div class="btn">
            <Btn />
            <a :href="github" target="_blank">
                <img width="40" height="40" :src="computedImgSrc" alt="github"/>
            </a>
            <a :href="linkedin" target="_blank">
                <img width="40" height="40" :src="computedImgSrc_2" alt="linkedin-circled--v1"/>
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
    },

    img: {
        type: String,
        default: 'https://img.icons8.com/ios-filled/50/5E72E4/github.png'
    },

    img_2: {
        type: String,
        default: 'https://img.icons8.com/ios-filled/50/5E72E4/linkedin-circled--v1.png'
    }
    
})

const computedImgSrc = ref(props.img);

onMounted(() => {
  // This code will run only on the client-side
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--Primary').trim().substring(1);
  computedImgSrc.value = `https://img.icons8.com/ios-filled/50/${iconColor}/github.png`;
});

const computedImgSrc_2 = ref(props.img_2);

onMounted(() => {
  // This code will run only on the client-side
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--Primary').trim().substring(1);
  computedImgSrc_2.value = `https://img.icons8.com/ios-filled/50/${iconColor}/linkedin-circled--v1.png`;
});

</script>

<style scoped>

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
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