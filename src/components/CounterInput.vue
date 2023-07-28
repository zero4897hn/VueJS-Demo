<template>
    <input type="number" :value="counter" @input="$emit('update:counter', $event.target.value)" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['counter'])
defineEmits(['update:counter'])

</script>

<style scoped>

</style>