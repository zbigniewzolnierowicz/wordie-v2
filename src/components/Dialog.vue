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
  background: white;
  position: absolute;
  bottom: 0;
  right: 0;
}
.dialog-body.active {
  display: block;
}
</style>
