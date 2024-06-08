<template>
    <div>
        
        <img 
        width="15" 
        height="15" 
        :src="computedImgSrc" 
        alt="filled-circle--v1"
        />

    </div>
</template>

<script setup>

const props = defineProps({
    img: {
        type: String,
        default: 'https://img.icons8.com/material-outlined/20/5E72E4/filled-circle--v1.png'
    }
})

const computedImgSrc = ref(props.img);

onMounted(() => {
  // This code will run only on the client-side
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--Primary').trim().substring(1);
  computedImgSrc.value = `https://img.icons8.com/material-outlined/20/${iconColor}/filled-circle--v1.png`;
});

</script>

<style scoped>

</style>