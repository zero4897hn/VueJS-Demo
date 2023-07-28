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
        <hr />
        <div>
            <router-link to="/">Homepageへ</router-link>
        </div>
        <hr />
        <div>
            Counter from input: {{ counterInput }} <br />
            <CounterInput v-model:counter="counterInput" />
        </div>
        <hr />
        <div>
            Couter input: <input v-model="counterParentInput" type="number" /> <br />
            <DisplayCounterFromParent :counter="counterParentInput" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import DisplayCouter from './DisplayCouter';
import DecreaseCounter from './DecreaseCounter';
import CounterInput from './CounterInput';
import DisplayCounterFromParent from './DisplayCounterFromParent.vue';

export default {
    name: 'CounterHandler',
    data() {
        return {
            counterInput: 0,
            counterParentInput: 0
        }
    },
    components: {
    DisplayCouter,
    DecreaseCounter,
    CounterInput,
    DisplayCounterFromParent
},
    methods: {
        ...mapActions([
            'counter/increase',
        ])
    }
}

</script>

<style scoped></style>