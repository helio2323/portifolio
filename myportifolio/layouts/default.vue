<template>
    <div class="layout">
        <MainHeader />
        <slot ></slot>
        <MainFooter />
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

}



</style>