<template>
  <div class="dialog-body" :class="{ active: isvisible }">
    <h3>{{ errorheader }}</h3>
    <p>{{ errortext }}</p>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["errorheader", "errortext", "isvisible"]
};
</script>

<style lang="scss" scoped>
.dialog-body {
  display: none;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1em;
  padding: 1em;
  border-radius: 1em;
}
.dialog-body.active {
  display: block;
}
</style>
