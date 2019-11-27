<template>
  <div class="card-wrapper" :class="{ flipped: isFlipped }">
    <div class="card-front">
      <button @click="isFlipped = !isFlipped">
        Flip!
      </button>
      {{ word.wordTranslations.en }}
    </div>
    <div class="card-back">
      <button @click="isFlipped = !isFlipped">
        Flip!
      </button>
      {{ word.wordTranslations.pl }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["word"],
  data() {
    return {
      isFlipped: false
    };
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  perspective: 200rem;
  width: 200px;
  height: 200px;
  &.flipped {
    .card-front {
      transform: rotateY(180deg);
      opacity: 0;
    }
    .card-back {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
  * {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 1;
    transition: 0.3s transform ease, 0.3s opacity ease;
    backface-visibility: hidden;
    button {
      width: fit-content;
      height: fit-content;
      backface-visibility: hidden;
    }
  }
  .card-front {
    z-index: 2;
    transform: rotateY(0deg);
    opacity: 1;
    background: linear-gradient(to right, hsl(3, 89%, 82%), hsl(254, 55%, 90%));
  }
  .card-back {
    z-index: 1;
    opacity: 0;
    transform: rotateY(-180deg);
    background: linear-gradient(to right, hsl(254, 55%, 90%), hsl(3, 89%, 82%));
  }
}
</style>
