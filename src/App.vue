<template>
  <main>
    <Navbar :expandable="true">
      <router-link to="/">Home</router-link>
      <template v-if="loggedIn">
        <router-link v-if="userData.role === 'user'" to="/words">
          Words
        </router-link>
        <router-link v-if="userData.role === 'user'" to="/user/dashboard">
          User dashboard
        </router-link>
        <router-link to="/admin" v-if="userData.role === 'admin'">
          Admin dashboard
        </router-link>
        <button @click="logOut()">Log out</button>
      </template>
    </Navbar>
    <transition name="ani">
      <router-view />
    </transition>
    <Dialog
      :isvisible="dialogIsVisible"
      :errorheader="dialogHeader"
      :errortext="dialogText"
    />
  </main>
</template>

<script>
import Navbar from "./components/Navbar";
import Dialog from "./components/Dialog";
export default {
  name: "App",
  components: {
    Navbar,
    Dialog
  },
  computed: {
    dialogIsVisible() {
      return this.$store.state.dialog.isVisible;
    },
    dialogHeader() {
      return this.$store.state.dialog.header;
    },
    dialogText() {
      return this.$store.state.dialog.text;
    },
    loggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    userData() {
      return this.$store.state.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans|Quattrocento&display=swap");
:root {
  --word-unknown-color-primary: #bdc3c7;
  --word-unknown-color-secondary: #2c3e50;
  --word-learned-color-primary: #ffe000;
  --word-learned-color-secondary: #799f0c;
  --word-mastered-color-primary: #fc4a1a;
  --word-mastered-color-secondary: #f7b733;
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
body,
button {
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
