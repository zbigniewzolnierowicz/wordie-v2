<template>
  <section id="home">
    <header class="hero">
      <h1>Welcome to Wordie!</h1>
      <h2>Your #1 place to learn tech words</h2>
    </header>
    <section class="about">
      <p>Test</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "home",
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
#home {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1rem;
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
  height: fit-content;
  border-radius: 1em;
  box-sizing: border-box;
  box-shadow: inset 0 5px 20px rgba(0, 0, 0, 0.19),
    inset 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
  background: linear-gradient(45deg, #b92b27, #1565c0);
  @include lg {
    height: 6em;
  }
}
.about {
  margin: 1em 0;
}
</style>
