import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import CounterHandler from './components/CounterHandler'
import HomePage from './components/HomePage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/counter', component: CounterHandler }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).use(store).mount('#app')
