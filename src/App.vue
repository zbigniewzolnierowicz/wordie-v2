<template>
  <main>
    <Navbar :expandable="true">
      <router-link to="/">Home</router-link>
      <router-link to="/words">Words</router-link>
      <router-link to="/user/dashboard">User dashboard</router-link>
    </Navbar>
    <transition name="ani">
      <router-view />
    </transition>
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
:root {
  --card-unknown-color-primary: #d3cce3;
  --card-unknown-color-secondary: #e9e4f0;
  --card-learned-color-primary: #e1eec3;
  --card-learned-color-secondary: #f05053;
  --card-mastered-color-primary: #ffe000;
  --card-mastered-color-secondary: #799f0c;
}
.ani-enter,
.ani-leave-to {
  transform: scale(0);
}
.ani-enter-to,
.ani-leave {
  transform: scale(1);
}
.ani-enter-active,
.ani-leave-active {
  position: absolute;
  top: 12vh;
  transition: 0.75s transform ease-in-out;
  transform-origin: top center;
  z-index: 999;
}

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
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
nav {
  z-index: 2;
}
</style>
