<template>
    <div class="my-contacts">
        <h1>Hello, so we can talk now?</h1>
        <img class="photo" src="../../src/images/helio.png" alt="">
        <p>“Albert Einsten”</p>
        <h4>To build is the only way to free oneself from the inexorable passage of time.</h4>

        <h2>Contact Me</h2>

        <ButtonContact
        text="helio_lima@outlook.com.br"
        urlimg="https://img.icons8.com/fluency-systems-filled/48/8392AB/ms-outlook.png"
        />

        <ButtonContact
        text="+55 (11) 9 9027-1047"
        urlimg="https://img.icons8.com/ios-filled/50/8392AB/whatsapp--v1.png"
        />

        <h2>Socials</h2>

        <Icons />

    </div>
</template>

<script setup>

import ButtonContact from '../contacts/ButtonContact.vue'
import Icons from '../contacts/Icons.vue'

</script>

<style scoped>

.my-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
}

h1 {
    font-size: 2rem;
    font-style: normal;
    color: var(--Primary);
}

h2 {
    font-size: 1.5rem;
    font-style: normal;
    color: var(--Primary);
}

p {
    font-size: 1.5rem;
    font-style: normal;
    color: var(--Secondary);
    font-size: 0.9rem;
}

h4 {
    font-size: 1rem;
    font-style: normal;
    color: var(--Secondary);
    font-style: normal;
    font-size: 1.2rem;
    font-weight: 500;
}

.photo {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
}


</style>