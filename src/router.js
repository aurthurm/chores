import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chores",      
      component: () => import("./views/Chores.vue"),
      children: [
        { path: "", name: "chores", component: () => import("./components/chores/chores.vue")},
        { path: "chore/:choreId/detail", name: "choreDetail", component: () => import("./components/chores/choreDetail.vue")}
      ]
    },
    {
      path: "/handlers",
      name: "handlers",
      component: () => import("./views/Handlers.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import("./views/Profile.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import("./views/Dashboard.vue")
    }
  ]
});
