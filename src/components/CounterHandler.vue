<template>
    <div>
        <div>
            <button @click="this['counter/increase']()">増加</button>
        </div>
        <div>
            <DisplayCouter />
        </div>
        <div>
            <DecreaseCounter />
        </div>
        <div>
            <router-link to="/">Homepageへ</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import DisplayCouter from './DisplayCouter';
import DecreaseCounter from './DecreaseCounter';

export default {
    name: 'CounterHandler',
    components: {
        DisplayCouter,
        DecreaseCounter
    },
    methods: {
        ...mapActions([
            'counter/increase',
        ])
    }
}

</script>

<style scoped></style>