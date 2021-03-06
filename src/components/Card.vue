<template>
  <div class="word-wrapper" :class="{ flipped: isFlipped }">
    <div
      class="word word-front"
      :class="{
        unknown: icon === 'UNKNOWN',
        learned: icon === 'LEARNED',
        mastered: icon === 'MASTERED'
      }"
    >
      <p class="translation">
        {{ word.wordTranslations[translateTo] }}
      </p>
      <p class="category">{{ word.category }}</p>
      <div class="buttons">
        <button
          @click="isFlipped = !isFlipped"
          v-html="refreshCWIcon()"
        ></button>
        <button @click="cycleStatus()">
          <HelpCircleIcon v-if="icon === 'UNKNOWN'" />
          <EyeIcon v-if="icon === 'LEARNED'" />
          <AwardIcon v-if="icon === 'MASTERED'" />
        </button>
      </div>
    </div>
    <div
      class="word word-back"
      :class="{
        unknown: icon === 'UNKNOWN',
        learned: icon === 'LEARNED',
        mastered: icon === 'MASTERED'
      }"
    >
      <p class="originalWord">
        {{ word.wordTranslations[translateFrom] }}
      </p>
      <p class="category">{{ word.category }}</p>
      <div class="buttons">
        <button
          @click="isFlipped = !isFlipped"
          v-html="refreshCCWIcon()"
        ></button>
        <button @click="cycleStatus()">
          <HelpCircleIcon v-if="icon === 'UNKNOWN'" />
          <EyeIcon v-if="icon === 'LEARNED'" />
          <AwardIcon v-if="icon === 'MASTERED'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import feather from "feather-icons";
import { EyeIcon, HelpCircleIcon, AwardIcon } from "vue-feather-icons";
export default {
  name: "Card",
  props: ["word"],
  data() {
    return {
      isFlipped: false,
      icon: null
    };
  },
  computed: {
    translateFrom() {
      return store.state.languagesChosen.from;
    },
    translateTo() {
      return store.state.languagesChosen.to;
    }
  },
  mounted() {
    this.icon = this.$props.word.status;
  },
  watch: {
    "word.status": function() {
      this.icon = this.$props.word.status;
    }
  },
  methods: {
    refreshCCWIcon() {
      return feather.icons["refresh-ccw"].toSvg();
    },
    refreshCWIcon() {
      return feather.icons["refresh-cw"].toSvg();
    },
    cycleStatus() {
      store.dispatch("setStatus", { id: this.$props.word.id });
    }
  },
  components: {
    EyeIcon,
    HelpCircleIcon,
    AwardIcon
  }
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
.word-wrapper {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100%;
  max-height: 300px;
  @include md {
    width: 30ch;
  }
  height: auto;
  perspective: 200rem;
  &.flipped {
    .word-front {
      transform: rotateY(180deg);
      opacity: 0;
    }
    .word-back {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
  .word {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1em auto 1em;
    grid-template-rows: repeat(4, auto);
    border-radius: 0.5em;
    grid-template-areas:
      ". . ."
      ". category ."
      ". word ."
      "buttons buttons buttons";
    opacity: 1;
    transition: 0.3s transform ease, 0.3s opacity ease;
    backface-visibility: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    .translation,
    .originalWord {
      grid-area: word;
      font-size: 1.5em;
    }
    .category {
      grid-area: category;
    }
    .buttons {
      grid-area: buttons;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      backface-visibility: hidden;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: 0.1s box-shadow ease-in-out;
      .learningIcon {
        margin-left: 1ch;
      }
      &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        &:active {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
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
  .word-front {
    z-index: 2;
    transform: rotateY(0deg);
    opacity: 1;
    &.unknown {
      background: linear-gradient(
        to right,
        var(--word-unknown-color-primary),
        var(--word-unknown-color-secondary)
      );
    }
    &.learned {
      background: linear-gradient(
        to right,
        var(--word-learned-color-primary),
        var(--word-learned-color-secondary)
      );
    }
    &.mastered {
      background: linear-gradient(
        to right,
        var(--word-mastered-color-primary),
        var(--word-mastered-color-secondary)
      );
    }
  }
  .word-back {
    z-index: 1;
    transform: rotateY(-180deg);
    opacity: 0;
    &.unknown {
      background: linear-gradient(
        to right,
        var(--word-unknown-color-secondary),
        var(--word-unknown-color-primary)
      );
    }
    &.learned {
      background: linear-gradient(
        to right,
        var(--word-learned-color-secondary),
        var(--word-learned-color-primary)
      );
    }
    &.mastered {
      background: linear-gradient(
        to right,
        var(--word-mastered-color-secondary),
        var(--word-mastered-color-primary)
      );
    }
  }
}
</style>
