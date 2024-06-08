<template>
    <div class="contacts">
        <MyContacts />

    </div>
</template>

<script setup>

import MyContacts from '../components/contacts/MyContacts.vue'

</script>

<style scoped>

.contacts {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: calc(100vh - 110px);
    gap: 20px;
}

</style>