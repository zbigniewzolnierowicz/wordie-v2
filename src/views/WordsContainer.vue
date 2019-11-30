<template>
  <div class="wordsList">
    <Navbar :expandable="false">
      <router-link to="/words/all">All words</router-link>
      <router-link to="/words/programming">Programming</router-link>
      <router-link to="/words/operatingsystems">Operating Systems</router-link>
      <router-link to="/words/networking">Networking</router-link>
    </Navbar>
    <Navbar :expandable="false">
      <div class="filters">
        <select v-model="statusFilter">
          <option :value="null"></option>
          <option value="unknown">Unknown</option>
          <option value="learned">Learned</option>
          <option value="mastered">Mastered</option>
        </select>
        <select v-model="setSortingFunction">
          <option value="alphabeticallyEn"
            >Sort alphabetically by english equivalent</option
          >
          <option value="alphabeticallyPl"
            >Sort alphabetically by polish equivalent</option
          >
          <option value="category">Sort by category</option>
        </select>
      </div>
    </Navbar>
    <ul class="words">
      <Card v-for="word in filteredWords" :key="word.id" :word="word" />
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
      statusFilter: null,
      setSortingFunction: "alphabeticallyEn",
      sortingFunctions: {
        alphabeticallyEn: (a, b) => {
          if (a.wordTranslations.en === b.wordTranslations.en) return 0;
          else if (a.wordTranslations.en > b.wordTranslations.en) return 1;
          else return -1;
        },
        alphabeticallyPl: (a, b) => {
          if (a.wordTranslations.pl === b.wordTranslations.pl) return 0;
          else if (a.wordTranslations.pl > b.wordTranslations.pl) return 1;
          else return -1;
        },
        category: (a, b) => {
          if (a.category === b.category) return 0;
          else if (a.category > b.category) return 1;
          else return -1;
        }
      }
    };
  },
  computed: {
    words() {
      return store.getters.getWordsByCategory(this.$route.params.category);
    },
    filteredWords() {
      return this.words.filter(word =>
        this.$data.statusFilter ? word.status === this.$data.statusFilter : true
      );
    }
  },
  methods: {
    setFilter(status) {
      this.$set(this.$data, "statusFilter", status);
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
