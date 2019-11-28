<template>
  <main>
    <Navbar :expandable="true">
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/words">Words</router-link>
    </Navbar>
    <router-view />
  </main>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans|Quattrocento&display=swap");

html,
body,
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
html,
body,
main {
  width: 100%;
  height: 100%;
}
main,
section {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Quattrocento", "Times New Roman", Times, serif;
}
body {
  font-family: "Josefin Sans", sans-serif;
}
main {
  overflow: auto;
}
</style>

<style lang="scss" scoped>
nav {
  z-index: 2;
}
</style>
