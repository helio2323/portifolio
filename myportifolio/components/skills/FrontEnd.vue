<template>
    <div class="container">
        <h4>Front-end</h4>
        <div class="front-end">

            <Card
            img="https://img.icons8.com/color/48/nuxt-jc.png"
            text="Nuxt Js"
            />

            <Card
            img="https://img.icons8.com/fluency/48/vuejs.png"
            text="Vue Js"
            />

            <Card
            img="https://img.icons8.com/color/48/nextjs.png"
            text="Next Js"
            />

            <Card
            img="https://img.icons8.com/officel/16/react.png"
            text="React Js"
            />

            <Card
            img="https://img.icons8.com/color/48/html-5--v1.png"
            text="HTML 5"
            />

            <Card
            img="https://img.icons8.com/color/48/css3.png"
            text="CSS 3"
            />

            <Card
            img="https://img.icons8.com/color/48/tailwindcss.png"
            text="Tailwind Css"
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