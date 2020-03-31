<template>
  <div id="userPanel">
    <div class="box profileData">
      <h3>User profile</h3>
      <div class="picture">
        <img src="http://placekitten.com/300/300" alt="" />
      </div>
      <h4>Username: {{ username }}</h4>
    </div>
    <div class="box stats">
      <h3>Statistics</h3>
      <div class="textData">
        <p>Amount of unknown words: {{ countOfUnknown }}</p>
        <p>Amount of learned words: {{ countOfLearned }}</p>
        <p>Amount of mastered words: {{ countOfMastered }}</p>
      </div>
      <GChart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"
        class="chart"
      />
    </div>
    <div class="box detailedStats">
      <h3>Detailed statistics</h3>
      <div class="charts">
        <GChart
          v-for="oneChartData in categoryChartData"
          :key="oneChartData.category"
          :data="oneChartData.data"
          :options="{
            title: oneChartData.category,
            height: 200,
            width: 300,
            is3D: true
          }"
          type="PieChart"
          class="chart"
        />
      </div>
    </div>
  </div>
</template>

<script>
const LEARNING_STATUS = ["UNKNOWN", "LEARNED", "MASTERED"];
const CATEGORIES = ["Networking", "Programming", "Operating systems"];
import { GChart } from "vue-google-charts";
export default {
  name: "userpanel",
  data() {
    return {
      chartOptions: {
        isStacked: "relative",
        height: 200,
        width: 300,
        theme: "maximized",
        bar: {
          groupWidth: "90%"
        },
        vAxis: {
          format: "percent"
        }
      },
      editingUsername: false,
      editingPassword: false
    };
  },
  computed: {
    username() {
      return this.$store.state.user.display_name;
    },
    countOfUnknown() {
      return this.$store.getters.getAmountOfWordStatus("UNKNOWN");
    },
    countOfLearned() {
      return this.$store.getters.getAmountOfWordStatus("LEARNED");
    },
    countOfMastered() {
      return this.$store.getters.getAmountOfWordStatus("MASTERED");
    },
    counters() {
      let returnedArray = [];
      this.$store.getters.getCategories.forEach(category =>
        LEARNING_STATUS.forEach(status => {
          returnedArray = [
            ...returnedArray,
            {
              status,
              category,
              count: this.$store.getters.getAmountOfWordStatusCategory(
                status,
                category
              )
            }
          ];
        })
      );
      return returnedArray;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    chartData() {
      return [
        ["Status", ...LEARNING_STATUS],
        [
          CATEGORIES[0],
          ...this.counters
            .filter(counter => counter.category === this.categories[0])
            .map(counter => (counter = counter.count))
        ],
        [
          CATEGORIES[1],
          ...this.counters
            .filter(counter => counter.category === this.categories[1])
            .map(counter => (counter = counter.count))
        ],
        [
          CATEGORIES[2],
          ...this.counters
            .filter(counter => counter.category === this.categories[2])
            .map(counter => (counter = counter.count))
        ]
      ];
    },
    categoryChartData() {
      return [
        {
          category: CATEGORIES[0],
          data: [
            ["Status", "Amount"],
            ...this.counters
              .filter(counter => counter.category === this.categories[0])
              .map(counter => (counter = [counter.status, counter.count]))
          ]
        },
        {
          category: CATEGORIES[1],
          data: [
            ["Status", "Amount"],
            ...this.counters
              .filter(counter => counter.category === this.categories[1])
              .map(counter => (counter = [counter.status, counter.count]))
          ]
        },
        {
          category: CATEGORIES[2],
          data: [
            ["Status", "Amount"],
            ...this.counters
              .filter(counter => counter.category === this.categories[2])
              .map(counter => (counter = [counter.status, counter.count]))
          ]
        }
      ];
    }
  },
  methods: {
    changePassword(e) {
      console.log(e);
    }
  },
  components: {
    GChart
  }
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
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
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  backface-visibility: hidden;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.1s box-shadow ease-in-out;
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
#userPanel {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  * {
    flex: 1 1 auto;
  }
}
.box {
  h3,
  h4 {
    text-align: center;
    margin: 1em 0;
  }
  @include lg {
    margin: 2em 3ch;
  }
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 1em;
  margin: 2em 1ch;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 0.5em;
  .chart {
    margin: 1em 0;
  }
}
.profileData {
  .picture img {
    border-radius: 50%;
  }
}
.textData {
  width: 100%;
}

.charts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
