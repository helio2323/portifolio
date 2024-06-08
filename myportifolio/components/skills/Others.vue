<template>
    <div class="container">
        <h4>Back-end</h4>
        <div class="front-end">

            <Card
            img="https://img.icons8.com/color/48/docker.png"
            text="Docker"
            />

            <Card
            img="https://img.icons8.com/color/48/selenium-test-automation.png"
            text="Selenium"
            />



        </div>
    </div>
</template>

<script setup>

import Card from '../skills/Card.vue'

</script>

<style scoped>

.front-end {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    padding: 0;
    
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 20px;
}

h4 {
    font-size: 1.5rem;
    color: #8392AB;
}

</style>