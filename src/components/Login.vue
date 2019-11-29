<template>
  <form @submit.prevent="submitHandler" ref="loginData">
    <label for="login">Username:</label>
    <input type="text" name="login" />
    <label for="password">Password:</label>
    <input type="password" name="password" />
    <router-link to="/about">Don't have an account?</router-link>
    <button type="submit">
      <LogInIcon />
    </button>
  </form>
</template>

<script>
import { LogInIcon } from "vue-feather-icons";
export default {
  name: "login",
  methods: {
    submitHandler() {
      this.$emit("loggedIn", {
        login: this.$refs.loginData.login.value,
        password: this.$refs.loginData.password.value
      });
    }
  },
  components: {
    LogInIcon
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  padding: 1em 5ch;
  box-sizing: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23);
  input {
    padding: 1em 2ch;
    width: 100%;
    margin: 1em 2ch;
    box-sizing: border-box;
  }
  label {
    align-self: flex-start;
    color: black;
  }
  button[type="submit"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
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
</style>
