<template>
    <div>
        <h5>{{ counter }}</h5>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['counter'])
</script>

<style scoped>

</style>