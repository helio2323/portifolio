<template>
    <div class="layout">
        <MainHeader />
        <slot ></slot>
        <LightDark />
    </div>
</template>

<script setup>

import MainHeader from '../components/MainHeader.vue'

</script>

<style  scoped>

.layout {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 20;
    
}

@media screen and (max-width: 1300px) {
    .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0%;
    padding-right: 0%;
    margin-bottom: 20;

}
}


</style>