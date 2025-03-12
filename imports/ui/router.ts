import { createRouter, createWebHistory } from 'vue-router'
import Todo from "./Todo.vue";
import Stats from "./Stats.vue";
import Edit from "./Edit.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
  ],
})
