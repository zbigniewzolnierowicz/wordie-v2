<template>
  <nav class="navbar" :class="{ expandable }">
    <button @click="show = !show" v-if="expandable" class="toggler">
      <i data-feather="menu"></i>
    </button>
    <div class="buttons">
      <slot v-if="this.$data.show"></slot>
    </div>
  </nav>
</template>

<script>
import feather from "feather-icons";
export default {
  name: "navbar",
  props: ["expandable"],
  data() {
    return {
      show: false
    };
  },
  mounted() {
    feather.replace();
    if (!this.$props.expandable) {
      this.$set(this.$data, "show", true);
    }
  },
  updated() {
    if (!this.$props.expandable) {
      this.$set(this.$data, "show", true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
.navbar {
  background: white;
  margin: 1em 2ch;
  padding: 1em 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include lg {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    &.expandable {
      grid-template-columns: 12fr 1fr;
    }
  }
  .buttons {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    @include md {
      flex-direction: row;
    }
  }
  .toggler {
    width: fit-content;
    height: fit-content;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    background: white;
    border: none;
    transition: 0.2s transform ease-in-out;
    &:hover {
      transform: scale(1.1);
      &:active {
        transform: scale(0.9);
      }
    }
  }
  box-sizing: content-box;
  border-radius: 0.5em;
  box-shadow: 0 5px 20px hsla(0, 0%, 0%, 0.19), 0 3px 6px hsla(0, 0%, 0%, 0.23);
  a,
  button,
  select {
    background: white;
    padding: 0.5em 1ch;
    border-radius: 0.5em;
    border: none;
    color: black;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.1s box-shadow ease-in-out, 0.1s transform ease-in-out;
    margin: 0.7em 1ch;
    &:hover {
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
    }
    &.router-link-exact-active {
      transform: scale(1.2);
    }
    @include lg {
      margin: 0 1ch;
    }
  }
}
</style>
