import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Game from "@/components/States/Game/Game";
import store from "../store/store";
import StartGame from "@/components/States/StartGame/StartGame";

/*====================*/

const routes = [
  { path: "/", component: StartGame },
  { path: "/game", component: Game },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

/*====================*/

createApp(App).use(router).use(store).mount("#app");
