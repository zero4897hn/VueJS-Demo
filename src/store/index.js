import { createStore } from 'vuex'
import counter from './modules/counter'

export default new createStore({
    modules: {
        counter
    }
})