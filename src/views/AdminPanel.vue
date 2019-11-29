<template>
  <div id="adminPanel">
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
export default {
  name: "adminpanel",
  data() {
    return {
      whatToEdit: "cd31edb6-9d0a-4995-88e8-ab732d4f2908"
    };
  },
  computed: {
    words() {
      return this.$store.state.words;
    }
  },
  components: {
    AdminCard
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
    }
  }
};
</script>

<style lang="scss" scoped>
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
