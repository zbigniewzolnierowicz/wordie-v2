<template>
  <div class="word">
    <div class="translations">
      <p v-if="!edit">{{ word.wordTranslations.en }}</p>
      <input v-if="edit" type="text" v-model="translationsEdit.en" />
      <p v-if="!edit">{{ word.wordTranslations.pl }}</p>
      <input v-if="edit" type="text" v-model="translationsEdit.pl" />
    </div>
    <p v-if="!edit">{{ word.category }}</p>
    <select v-if="edit" v-model="categoryEdit">
      <option value="networking">Networking</option>
      <option value="programming">Programming</option>
      <option value="operatingsystems">Operating systems</option>
    </select>
    <button v-if="!edit" @click="handleEditMode">
      <Edit3Icon />
    </button>
    <button v-if="edit" @click="handleEdit">
      <CheckIcon />
    </button>
    <button @click="handleDelete">
      <Trash2Icon />
    </button>
  </div>
</template>

<script>
import { Edit3Icon, CheckIcon, Trash2Icon } from "vue-feather-icons";
export default {
  name: "adminword",
  props: ["word", "edit"],
  data() {
    return {
      translationsEdit: {
        en: null,
        pl: null
      },
      categoryEdit: null
    };
  },
  components: {
    Edit3Icon,
    CheckIcon,
    Trash2Icon
  },
  mounted() {
    this.$set(
      this.$data.translationsEdit,
      "en",
      this.$props.word.wordTranslations.en
    );
    this.$set(
      this.$data.translationsEdit,
      "pl",
      this.$props.word.wordTranslations.pl
    );
    this.$set(this.$data, "categoryEdit", this.$props.word.category);
  },
  methods: {
    handleDelete() {
      this.$emit("delete", this.$props.word.id);
    },
    handleEdit() {
      let temptranslations = {
        en: this.$data.translationsEdit.en,
        pl: this.$data.translationsEdit.pl
      };
      this.$emit("edit", {
        id: this.$props.word.id,
        wordTranslations: temptranslations,
        category: this.$data.categoryEdit
      });
    },
    handleEditMode() {
      this.$emit("editmode", this.$props.word.id);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
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
input,
select {
  margin: 0.5em 0.5ch;
  padding: 1em 1ch;
}
.word {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 0;
  background: white;
  align-items: center;
  .translations {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    p {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
}
p {
  height: 100%;
  padding: 1em 1ch;
  &:hover {
    background: gray;
  }
}
</style>
