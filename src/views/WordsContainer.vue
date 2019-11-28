<template>
  <div class="wordsList">
    <Navbar v-if="appear" :expandable="false">
      <router-link to="/words/programming">Programming</router-link>
      <router-link to="/words/operatingsystems">Operating Systems</router-link>
      <router-link to="/words/networking">Networking</router-link>
    </Navbar>
    <ul class="words">
      <Card
        v-for="word in words"
        :key="word.wordTranslations.en"
        :word="word"
      />
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
import store from "../store";
import Navbar from "@/components/Navbar";
export default {
  name: "words",
  data() {
    return {
      words: null,
      appear: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm =>
      vm.setData(store.getters.getWordsByCategory(to.params.category), true)
    );
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
  beforeRouteLeave(to, from, next) {
    this.$set(this.$data, "appear", false);
    next();
  },
  components: {
    Card,
    Navbar
  },
  beforeDestroy() {},
  methods: {
    setData(posts, navVisible) {
      this.$set(this.$data, "words", posts);
      this.$set(this.$data, "appear", navVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  z-index: -1;
}
.wordsList {
  height: fit-content;
  width: 100%;
  overflow: auto;
}
.words {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  height: 100%;
  padding: 0;
  margin: 0;
  gap: 30em;
  * {
    margin: 1ch 1em;
  }
}
</style>
