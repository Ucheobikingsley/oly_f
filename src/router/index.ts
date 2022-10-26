import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          "@/views/Home.vue"
        ),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          "@/views/About.vue"
        ),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          "@/views/Signin.vue"
        ),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () =>
        import(
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          "@/views/Pricing.vue"
        ),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
