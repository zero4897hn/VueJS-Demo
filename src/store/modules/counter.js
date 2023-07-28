const state = () => ({
    counter: 0
})

const getters = {
    getCounter(state) {
        return state.counter
    } 
}

const mutations = {
    setCounter(state, counter) {
        state.counter = counter
    }
}

const actions = {
    increase({ commit, state }) {
        commit('setCounter', state.counter + 1)
    },
    decrease({ commit, state }) {
        commit('setCounter', state.counter - 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}