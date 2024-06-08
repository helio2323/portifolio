<template>
    <div class="icons">

        <div class="icn">
            <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/5E72E4/linkedin.png" alt="linkedin"/>
        </div>

        <div class="icn">
            <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/5E72E4/github.png" alt="github"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.icons {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.icn {
    display: flex;
    cursor: pointer;
    border: solid 1px #5E72E4;
    border-radius: 5px;
    padding: 0;
    align-items: center;
    justify-content: center;

}

</style>