<template>
    <div class="photo-section">
        <h1>{{ text }}</h1>
        <div class="photo">
            <img src="../../src/images/helio.png" alt="">
            <div class="text">
                <p> {{ pstart }}</p>
                <p> {{ pmidle }}</p>
                <p> {{ pend }}</p>
            </div>
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
    pstart: {
        type: String,
        default: ''
    },
    secondText: {
        type: String,
        default: ''
    },
    pmidle: {
        type: String,
        default: ''
    },
    pend: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

img {
    width: 350px;
}

h1 {
    font-size: 2rem;
    color: var(--Primary);
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
    max-width: 700px;
    line-height: 1.4;
    font-size: 1.2rem;
    color: var(--Text);
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>