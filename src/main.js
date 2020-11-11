import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TicTacToe from "@/components/TicTacToe";
import Square from "@/components/Square";

Vue.config.productionTip = false;

new Vue({
  components: {
    TicTacToe,
    Square
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
