import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: {
      categoryNetworking: [
        {
          wordTranslations: {
            en: "switch",
            pl: "przełącznik"
          }
        }
      ],
      categoryProgramming: [
        {
          wordTranslations: {
            en: "variable",
            pl: "zmienna"
          }
        }
      ],
      categoryOperatingSystems: [
        {
          wordTranslations: {
            en: "interrupt request",
            pl: "przerwanie"
          }
        }
      ]
    },
    languagesChosen: {
      from: "pl",
      to: "en"
    }
  },
  getters: {
    getWordsByCategory: state => category => {
      let categoryName;
      switch (category) {
        case "Programming".toLowerCase():
          categoryName = "categoryProgramming";
          break;
        case "OperatingSystems".toLowerCase():
          categoryName = "categoryOperatingSystems";
          break;
        case "Networking".toLowerCase():
          categoryName = "categoryNetworking";
          break;
        default:
          categoryName = false;
          break;
      }
      return categoryName
        ? state.words[categoryName]
        : [
            ...state.words.categoryProgramming,
            ...state.words.categoryOperatingSystems,
            ...state.words.categoryNetworking
          ];
    }
  },
  mutations: {
    ADD_CARD(state, payload) {
      Vue.set(
        state.words[payload.category],
        state.words[payload.category].length,
        payload.card
      );
    },
    MODIFY_CARD(state, payload) {
      const card = payload.card;
      const indexOfModifiedCard = state.words[payload.category].findIndex(
        card => card.id === payload.id
      );
      const cardBeforeMod = state.words[payload.category][indexOfModifiedCard];
      Vue.set(state.words[payload.category], indexOfModifiedCard, {
        ...cardBeforeMod,
        ...card
      });
    },
    REMOVE_CARD(state, payload) {
      Vue.delete(
        state.words[payload.category],
        state.words[payload.category].findIndex(card => card.id === payload.id)
      );
    }
  },
  actions: {},
  modules: {}
});
