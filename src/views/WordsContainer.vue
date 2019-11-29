<template>
  <div class="wordsList">
    <Navbar :expandable="false">
      <router-link to="/words/all">All words</router-link>
      <router-link to="/words/programming">Programming</router-link>
      <router-link to="/words/operatingsystems">Operating Systems</router-link>
      <router-link to="/words/networking">Networking</router-link>
    </Navbar>
    <ul class="words">
      <Card v-for="word in words" :key="word.id" :word="word" />
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
import store from "../store";
import Navbar from "@/components/Navbar";
export default {
  name: "words",
  computed: {
    words() {
      return store.getters.getWordsByCategory(this.$route.params.category);
    }
  },
  components: {
    Card,
    Navbar
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
    flex: 1 1 auto;
  }
}
</style>
