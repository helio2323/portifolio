<template>
    <div class="photo-section">
        <h1>{{ text }}</h1>
        <div class="photo">
            <img src="../../src/images/helio.png" alt="">
            <p> {{ ptext }}</p>
        </div>
        <h1>{{ secondText }}</h1>
    </div>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    ptext: {
        type: String,
        default: ''
    },
    secondText: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

img {
    width: 250px;
}

h1 {
    font-size: 2.5rem;
    color: #5E72E4;
}

.photo-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    align-items: start;
    margin-top: 20px;
}

.photo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0;
    justify-content: start;
    align-items: start;
}

p {
    width: 500px;
    font-size: 1.5rem;
    color: #8392AB;
}

</style>