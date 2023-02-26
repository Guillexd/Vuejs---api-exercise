import { createWebHistory, createRouter } from 'vue-router';
import Counter from '../components/dinamics/Counter.vue';
import AllCharacters from '../components/dinamics/AllCharacters.vue';
import Home from '../components/presentation/Home.vue'
import TypeCharacter from '../components/dinamics/TypeCharacters.vue';
import SingleCharacter from '../components/dinamics/SingleCharacter.vue';
import NotFound from '../components/presentation/NotFound.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/counter',
        component: Counter
    },
    {
        path: '/characters',
        component: AllCharacters
    },
    {
        path: '/characters/:type',
        component: TypeCharacter
    },
    {
        path: '/character/:id',
        component: SingleCharacter
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;