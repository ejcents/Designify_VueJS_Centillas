import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddDesign from '../views/AddDesign.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddDesign }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
