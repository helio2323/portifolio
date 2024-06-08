<template>
    <div>
        <h2>{{ text }}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

h2 {
    font-size: 3rem;
    font-style: normal; 
    color: var(--Black);
}

</style>