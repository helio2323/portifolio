<template>
    <div>
        <button class="button">{{ text }}</button>
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

<style  scoped>

.button {
    display: flex;
    text-decoration: none;
    padding: 15px 40px;
    background-color: #5E72E4;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    height: 2.1rem;
    text-align: center;
    vertical-align: center;
    align-items: center;
    cursor: pointer;
    font-size: 0.92rem;
}

</style>