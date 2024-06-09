<template>
    <div class="icons">
        <a :href="linkedin" target="_blank" class="icn">
            <img width="35" height="35" :src="linkedinImgSrc" alt="linkedin"/>
        </a>
        <a :href="github" target="_blank" class="icn">
            <img width="35" height="35" :src="githubImgSrc" alt="github"/>
        </a :href="github" target="_blank">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps({
    linkedin: {
        type: String,
        default: 'https://www.linkedin.com/in/helio-lima/'
    },
    github: {
        type: String,
        default: 'https://github.com/helio2323'
    }
});

// Reactive variables to hold the image sources
const linkedinImgSrc = ref('');
const githubImgSrc = ref('');

const getIconUrl = (icon) => {
    if (typeof window !== 'undefined') {
        const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--Primary').trim().substring(1);
        return `https://img.icons8.com/ios-filled/50/${iconColor}/${icon}.png`;
    }
    return ''; // Fallback in case it's called on the server-side
};

onMounted(() => {
    // Update the image sources on client-side mount
    linkedinImgSrc.value = getIconUrl('linkedin');
    githubImgSrc.value = getIconUrl('github');
});

</script>

<style scoped>
.icons {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.icn {
    display: flex;
    cursor: pointer;
    border: solid 1px var(--Primary);
    border-radius: 5px;
    padding: 0;
    align-items: center;
    justify-content: center;
}
</style>
