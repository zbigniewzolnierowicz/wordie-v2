<template>
  <div class="wordsList">
    <nav ref="navbar">
      <router-link to="/words/programming">Programming</router-link>
      <router-link to="/words/operatingsystems">Operating Systems</router-link>
      <router-link to="/words/networking">Networking</router-link>
    </nav>
    <Card
      v-for="word in words"
      :key="word.wordTranslations.en"
      :word="word"
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import store from "../store";
import { TimelineLite } from "gsap";
export default {
  name: "words",
  data() {
    return {
      words: null,
      transitionName: "slideIn"
    };
  },
  mounted() {
    const { navbar } = this.$refs;
    const timeline = new TimelineLite();
    timeline.to(navbar, { y: 0, opacity: 1, scale: 1 });
  },
  beforeRouteEnter(to, from, next) {
    next(vm =>
      vm.setData(store.getters.getWordsByCategory(to.params.category))
    );
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (toDepth < fromDepth) {
        const { navbar } = this.$refs;
        const timeline = new TimelineLite();
        timeline.to(navbar, { y: "-200px", opacity: 0, scale: 0 });
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$set(this.$data, "words", null);
    console.groupCollapsed(`Exiting: ${from.path}! 🛫`);
    console.table(from);
    console.groupEnd();
    console.groupCollapsed(`Entering: ${to.path}! 🛬`);
    console.table(to);
    console.groupEnd();
    this.$set(
      this.$data,
      "words",
      store.getters.getWordsByCategory(to.params.category)
    );
    next();
  },
  components: {
    Card
  },
  beforeDestroy() {},
  methods: {
    setData(posts) {
      this.$set(this.$data, "words", posts);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  opacity: 0;
  transform: translateY(-200px) scale(0);
  z-index: -1;
}
</style>
