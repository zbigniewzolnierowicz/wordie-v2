import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  languagesChosen: {
    from: "pl",
    to: "en"
  },
  state: {
    words: {
      categoryNetworking: [
        {
          id: 0,
          wordTranslations: {
            en: "switch",
            pl: "przełącznik"
          }
        }
      ],
      programming: [
        {
          id: 0,
          wordTranslations: {
            en: "variable",
            pl: "zmienna"
          }
        }
      ],
      operatingSystems: [
        {
          id: 0,
          wordTranslations: {
            en: "interrupt request",
            pl: "przerwanie"
          }
        }
      ]
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
