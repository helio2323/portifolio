<template>
    <div class="container">
        <h4>Outros</h4>
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
    display: flex;
    flex-flow: row wrap;
    
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 20px;
}

h4 {
    font-size: 1.5rem;
    color: var(--Text);
}

@media screen and (max-width: 768px){


.front-end {
    width: 100%;
    align-items: center;
    justify-content: center;
}

}

</style>