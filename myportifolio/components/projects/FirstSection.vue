<template>
    <div class="first-section">
        <h1>Welcome to My Open Source Projects</h1>

        <div class="menu">
            <ButtonSection
            text="Open Source"
            />

            <ButtonSection
            text="Study Cases"
            />

            <ButtonSection
            text="Frellancers"
            />
        </div>

        <p>{{ text }}</p>

    </div>
</template>

<script setup>

import ButtonSection from './ButtonSection.vue'

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

.menu {
    display: flex;
    flex-direction: row;
    height:  60px;
    border: solid 1px var(--Primary);
    border-radius:  10px;
    align-items: center;
}

h1 {
    color: var(--Primary);
    font-weight: 700;
    font-size: 2rem;
}

.first-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}

</style>