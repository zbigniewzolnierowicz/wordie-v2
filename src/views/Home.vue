<template>
  <div class="home">
    <Card v-for="word in words" :key="word.id" :word="word"></Card>
    <button @click="addCard()">Add</button>
    <button @click="modifyCard()">Modify</button>
    <button @click="deleteCard()">Delete</button>
  </div>
</template>

<script>
import store from "../store";
import Card from "@/components/Card";
export default {
  name: "home",
  computed: {
    words() {
      return store.state.words.programming;
    }
  },
  methods: {
    addCard() {
      store.commit("ADD_CARD", {
        category: "programming",
        card: {
          id: 1,
          wordTranslations: {
            en: "test1",
            pl: "test2"
          }
        }
      });
    },
    modifyCard() {
      store.commit("MODIFY_CARD", {
        category: "programming",
        id: 0,
        card: {
          wordTranslations: {
            en: "test1",
            pl: "test2"
          }
        }
      });
    },
    deleteCard() {
      store.commit("REMOVE_CARD", {
        category: "programming",
        id: 0
      });
    }
  },
  components: {
    Card
  }
};
</script>
