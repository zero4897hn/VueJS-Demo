<template>
    <ul v-for="(currency, index) in formatCurrency" v-bind:key="index">{{ currency }}</ul>
</template>

<script>
export default {
    name: "CounterHandler",
    computed: {
        formatCurrency() {
            const formatedCurrencies = [];
            this.amounts.forEach(element => {
                formatedCurrencies.push(element.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
            })
            return formatedCurrencies
        }
    },
    data() {
        return {
            amounts: [1000, 2500, 800]
        }
    },
}
</script>