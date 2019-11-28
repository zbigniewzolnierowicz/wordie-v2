<template>
  <div class="card-wrapper" :class="{ flipped: isFlipped }">
    <div class="card card-front">
      <p class="word translation">
        {{ word.wordTranslations.en }}
      </p>
      <div class="buttons">
        <button @click="isFlipped = !isFlipped">
          Flip!
        </button>
      </div>
    </div>
    <div class="card card-back">
      <p class="word originalWord">
        {{ word.wordTranslations.pl }}
      </p>
      <div class="buttons">
        <button @click="isFlipped = !isFlipped">
          Flip!
        </button>
      </div>
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
  width: 30ch;
  height: auto;
  perspective: 200rem;
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
  .card {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1em auto 1em;
    grid-template-rows: 1fr 3fr 2fr;
    grid-template-areas:
      ". . ."
      ". word ."
      "buttons buttons buttons";
    opacity: 1;
    transition: 0.3s transform ease, 0.3s opacity ease;
    backface-visibility: hidden;
    .word {
      grid-area: word;
    }
    .buttons {
      grid-area: buttons;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    button {
      height: 100%;
      backface-visibility: hidden;
      background: white;
      color: black;
      width: fit-content;
      height: fit-content;
      padding: 0.5em 0.5ch;
      margin: 1em 1ch;
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
