<template>
  <section id="register">
    <form @submit.prevent="submitHandler" ref="signupData">
      <div class="errors" v-if="errors.length != 0">
        <button type="button" @click="clearErrors">Clear</button>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="inputs">
        <label for="login">
          Username<br />
          (between 3 and 15 characters, only lowercase letters, numbers, - and
          _)
        </label>
        <input type="text" name="login" v-model="login" />
        <label for="displayname">Display name</label>
        <input type="text" name="displayname" v-model="displayname" />
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" id="" />
        <label for="repeatpassword">Confirm password</label>
        <input type="password" name="repeatpassword" v-model="repeatpassword" />
        <button type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import { post } from "axios";
export default {
  name: "Register",
  data() {
    return {
      login: "",
      displayname: "",
      password: "",
      repeatpassword: "",
      errors: []
    };
  },
  methods: {
    submitHandler() {
      let testUsername = /^[a-z0-9_-]{3,15}$/;
      if (this.errors.length != 0) this.clearErrors();
      if (!testUsername.test(this.login))
        this.errors.push(
          "Bad username (must be between 3 and 15 letters and must only contain lowercase letters, numbers, _ and -."
        );
      if (this.password != this.repeatpassword)
        this.errors.push("Passwords must match!");
      if (this.errors.length === 0) {
        post(
          "http://localhost/Wordie_Server/src/api/signup.php",
          {
            username: this.login,
            display_name: this.displayname,
            password: this.password
          },
          {
            withCredentials: true
          }
        ).then(data => {
          if (data.data.response === "sign_up_success") {
            this.$store.dispatch("showDialog", {
              time: 3,
              header: "Registered",
              text: "Registered successfully."
            });
            this.$router.push("/");
          } else {
            this.$store.dispatch("showDialog", {
              time: 3,
              header: "Registration failed",
              text: `Registration failed because: ${data.data.description}.`
            });
          }
        });
      }
    },
    clearErrors() {
      this.errors = [];
    }
  }
};
</script>

<style lang="scss" scoped>
#register {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1em 1em 1em;
}
form {
  background: linear-gradient(to left, red, green);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    text-align: center;
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
  .inputs {
    background: white;
    border-radius: 1em;
    padding: 1em 5ch;
  }
  .errors {
    background: white;
    border-radius: 1em;
    padding: 1em 5ch;
    margin-bottom: 1em;
    ul {
      list-style-type: none;
      margin: none;
    }
  }
}
</style>
