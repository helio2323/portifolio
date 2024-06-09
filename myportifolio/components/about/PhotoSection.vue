<template>
    <div class="photo-section">
        <h3>{{ text }}</h3>
        <div class="photo">
            <img src="https://avatars.githubusercontent.com/u/90978646?v=4" alt="">
            <div class="text">
                <p> {{ pstart }}</p>
                <p> {{ pmidle }}</p>
                <p> {{ pend }}</p>
            </div>
        </div>
        <h3>{{ secondText }}</h3>
    </div>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    pstart: {
        type: String,
        default: ''
    },
    secondText: {
        type: String,
        default: ''
    },
    pmidle: {
        type: String,
        default: ''
    },
    pend: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>

img {
    width: 350px;
    border-radius: 10px;
}

h3 {
    color: var(--Primary);
}

.photo-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    align-items: start;
    margin-top: 20px;
}

.photo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0;
    justify-content: start;
    align-items: start;
    
}

p {
    line-height: 1.4;
    color: var(--Text);
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;

}

.text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}


@media screen and (max-width: 1300px){

    .photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .photo-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


  }

</style>