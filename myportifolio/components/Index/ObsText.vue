<template>
    <div>
        <p>{{ text }}</p>
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

p {
    color: var(--Secondary);
}

</style>