<template>
  <div id="adminPanel">
    <form @submit.prevent="addCard" ref="formData">
      <input type="text" name="translationEn" />
      <input type="text" name="translationPl" />
      <select name="category">
        <option value="networking">Networking</option>
        <option value="programming">Programming</option>
        <option value="operatingsystems">Operating systems</option>
      </select>
      <button type="submit">
        <CheckIcon />
      </button>
    </form>
    <div class="cardList">
      <AdminCard
        @delete="handleDelete"
        @edit="handleEdit"
        @editmode="handleEditMode"
        v-for="word in words"
        :key="word.id"
        :word="word"
        :edit="word.id === whatToEdit"
      ></AdminCard>
    </div>
  </div>
</template>

<script>
import AdminCard from "@/components/AdminCard.vue";
import { CheckIcon } from "vue-feather-icons";
import uuidv4 from "uuid/v4";
export default {
  name: "adminpanel",
  data() {
    return {
      whatToEdit: null
    };
  },
  computed: {
    words() {
      return this.$store.state.words;
    }
  },
  components: {
    AdminCard,
    CheckIcon
  },
  methods: {
    handleDelete(event) {
      this.$store.commit("REMOVE_CARD", event);
    },
    handleEdit(event) {
      this.$store.commit("MODIFY_CARD", event);
      this.$set(this.$data, "whatToEdit", null);
    },
    handleEditMode(event) {
      this.$set(this.$data, "whatToEdit", event);
    },
    addCard() {
      this.$store.commit("ADD_CARD", {
        id: uuidv4(),
        category: this.$refs.formData.category.value,
        wordTranslations: {
          en: this.$refs.formData.translationEn.value,
          pl: this.$refs.formData.translationPl.value
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: row;
  background: white;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  padding: 1em 5ch;
  margin: 1em;
  box-sizing: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23);
  input,
  select {
    padding: 1em 2ch;
    margin: 1em 2ch;
    box-sizing: border-box;
  }
  input {
    width: 100%;
  }
  label {
    align-self: flex-start;
    color: black;
  }
  button[type="submit"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    backface-visibility: hidden;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.1s box-shadow ease-in-out;
    .learningIcon {
      margin-left: 1ch;
    }
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      &:active {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
    background: white;
    color: black;
    border-radius: 0.5em;
    width: fit-content;
    height: fit-content;
    padding: 0.5em 0.5em;
    margin: 1ch 1ch;
  }
}
.cardList {
  overflow: auto;
  margin: 0 1em;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5em;
  .card:nth-child(odd) {
    background: hsl(0, 0%, 100%);
  }
  .card:nth-child(even) {
    background: hsl(0, 0%, 90%);
  }
}
</style>
