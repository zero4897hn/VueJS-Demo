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
            2. Counter from input: {{ counterInput }} <br />
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
    watch: {
        counterParentInput: {
            handler(newValue, oldValue) {
                console.log(newValue, oldValue)
            },
        }
    },
    methods: {
        ...mapActions([
            'counter/increase',
        ])
    },
    created() {
        console.log('Component created');
        // データ準備やAPIコールなどがここに実装されられる
    },
    mounted() {
        console.log('Component mounted');
        // 画面表示ができたら実装
    },
    updated() {
        console.log('Component updated');
        // 画面がアップデートされたら実装
    }
}

</script>

<style scoped></style>