<template>
    <div>
        <div>
            <button @click="this['counter/decrease']()">減少</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'DecreaseCounter',
    methods: {
        ...mapActions([
            'counter/decrease',
        ])
    }
}

</script>

<style scoped>

</style>