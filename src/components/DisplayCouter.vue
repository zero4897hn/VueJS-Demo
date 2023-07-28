<script>
import { mapState } from 'vuex'

export default {
    name: 'DisplayCounter',
    computed: {
        ...mapState({
            counter: state => state.counter.counter
        }),
    }
}
</script>

<template>
    <div>
        <h5>{{ counter }}</h5>
    </div>
</template>

<style scoped></style>