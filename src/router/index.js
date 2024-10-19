import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'AboutMe',
    meta: {
      title: 'AboutMe'
    },
    component: AboutMe,
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'Projects'
    },
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Contact'
    },
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {

  document.title = to.meta?.title ?? 'Default Title'

})

export default router;
