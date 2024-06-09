<template>
    <div class="my-contacts">
        <h3>Hello, so we can talk now?</h3>
        <img class="photo" src="../../src/images/helio.png" alt="">
        <p>“Albert Einsten”</p>
        <h4>To build is the only way to free oneself from the inexorable passage of time.</h4>

        <h3>Contact Me</h3>

        <ButtonContact
        text="helio_lima@outlook.com.br"
        urlimg="https://img.icons8.com/fluency-systems-filled/48/8392AB/ms-outlook.png"
        email="mailto:helio_lima@outlook.com.br"
        />

        <ButtonContact
        text="+55 (11) 9 9027-1047"
        urlimg="https://img.icons8.com/ios-filled/50/8392AB/whatsapp--v1.png"
        email="http://wa.me/5511990271047"
        />

        <h3>Socials</h3>

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
    justify-content: center;
    text-align: center;
    width: 100%;
    gap: 20px;
}

h3 {
    font-style: normal;
    color: var(--Primary);
}

h2 {
    font-style: normal;
    color: var(--Primary);
}

p {
    font-style: normal;
    color: var(--Secondary);
}

h4 {
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