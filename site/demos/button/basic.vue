<script setup>
function TestClick() {
    console.log('click')
}
</script>

<template>
    <p>
        <er-button @click="TestClick"> common button </er-button>
    </p>
</template>

<style lang='scss' scoped></style>
