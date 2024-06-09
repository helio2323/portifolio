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
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-left: 10%;
    padding-right: 10%;
}

@media screen and (max-width: 1300px) {
    .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-left: 0%;
    padding-right: 0%;
}
}


</style>