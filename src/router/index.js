import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import Manage from "@/views/Manage.vue"
import useUserStore from "@/stores/user"

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
  {
    name: "manage",
    // alias: "/manage",
    path: "/manage-music",
    component: Manage,
    //   Local route guard (runs only for this endpoint)
    // beforeEnter: (to, from, next) => {
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  // use either this path to redirect from /manage to /manage-music, OR alias on /manage-music
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: "home" },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})

// Global Router Guard (runs for every endpoint)
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router
