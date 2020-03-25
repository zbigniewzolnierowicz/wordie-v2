import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "feather-icons";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created: function() {
    if (document.cookie.match(/PHPSESSID=\w*/)) {
      this.$store.dispatch("logOut");
      this.$router.push("/");
    }
  },
  render: h => h(App)
}).$mount("#app");
