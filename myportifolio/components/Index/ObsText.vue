<template>
    <div>
        <h4>{{ text }}</h4>
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

<style scoped>

div {
    max-width: 700px;}

h4 {
    font-size: 1rem;
    color: #8392AB;
}

</style>