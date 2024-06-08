<template>
    <div>
        <h1>{{ text }}</h1>
        <h1>{{ text_2 }}</h1>
    </div>
</template>

<script setup>


const props = defineProps({
    text: {
        type: String,
        default: ''
    },

    text_2: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

h1 {
  font-size: 4rem;
  font-style: normal;
  color: var(--Purple);
  font-weight: bold;
  text-shadow: 
    -1px -1px 0 var(--Purple),  
    1px -1px 0 var(--Purple),
    -1px 1px 0 var(--Purple),
    1px 1px 0 var(--Purple); 
}

</style>