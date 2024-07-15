import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import PricingView from "../views/PricingView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/blog",
    component: BlogView,
  },
  {
    path: "/pricing",
    component: PricingView,
  },
  {
    path: "/contact",
    component: ContactView,
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
