<template>
  <main>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/words">Words</router-link>
    </nav>
    <router-view />
  </main>
</template>

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
nav {
  background: white;
  margin: 1em 2ch;
  padding: 1em 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: content-box;
  border-radius: 0.5em;
  justify-content: space-evenly;
  box-shadow: 0 5px 20px hsla(0, 0%, 0%, 0.19), 0 3px 6px hsla(0, 0%, 0%, 0.23);
  a {
    padding: 0.5em 1ch;
    border-radius: 0.5em;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.1s box-shadow ease-in-out, 0.1s transform ease-in-out;
    &:hover {
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
    }
    &.router-link-exact-active {
      transform: scale(1.2);
    }
  }
}
</style>

<style lang="scss" scoped>
nav {
  z-index: 2;
}
</style>
