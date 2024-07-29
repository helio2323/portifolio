<template>
    <div class="container">
        <h4>Back-end</h4>
        <div class="front-end">

            <Card
            img="https://img.icons8.com/color/48/python.png"
            text="Python"
            />

            <Card
            img="https://img.icons8.com/fluency/48/javascript.png"
            text="Javascript"
            />
            <Card
            img="https://img.icons8.com/fluency/48/typescript.png"
            text="TypeScript"
            />

            <Card
            img="https://img.icons8.com/color/48/nodejs.png"
            text="Node Js"
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