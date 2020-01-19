<template>
  <section id="home">
    <header class="hero">
      <h1>Welcome to Wordie!</h1>
      <h2>Your #1 place to learn tech words</h2>
      <h3 v-if="loggedIn">You are logged in as: {{ username }}</h3>
      <transition name="hide">
        <Login v-if="!loggedIn" @loggedIn="logInHandler" />
      </transition>
    </header>
  </section>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "home",
  computed: {
    loggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    username() {
      return this.$store.state.user.username;
    }
  },
  components: {
    Login
  },
  methods: {
    logInHandler(payload) {
      this.$store.dispatch("logIn", payload);
      this.$set(this.$data, "loggedIn", true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
.hide-enter,
.hide-leave-to {
  position: fixed;
  opacity: 0;
  transform: scale(0.5) translateY(75vh);
}
.hide-enter-to,
.hide-leave {
  position: fixed;
  opacity: 1;
  transform: scale(1) translateY(0);
}
.hide-enter-active,
.hide-leave-active {
  transition: 0.75s transform ease-in-out, 0.75s opacity ease-in-out;
  transform-origin: top center;
  z-index: 999;
}
#home {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  margin-bottom: 1em;
  height: 100%;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1rem;
}
h1,
h2 {
  transition: 0.3s all ease-in-out;
}
.hero {
  display: flex;
  height: fit-content;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  box-sizing: border-box;
  box-shadow: inset 0 5px 20px rgba(0, 0, 0, 0.19),
    inset 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
  background: linear-gradient(45deg, #b92b27, #1565c0);
  form {
    margin-top: 1em;
  }
}
.about {
  margin: 1em 0;
}
.login {
  width: 40%;
  margin: 1em 0;
}
</style>
