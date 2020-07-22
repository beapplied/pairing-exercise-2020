import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import EmailTemplateManagement from "../pages/EmailTemplateManagement/EmailTemplateManagement.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/email-templates",
    name: "Email template management",
    component: EmailTemplateManagement
  }
];

const router = new VueRouter({
  routes
});

export default router;
