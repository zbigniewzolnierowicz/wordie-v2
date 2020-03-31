import Vue from "vue";
import Vuex from "vuex";
import { get, post, put } from "axios";
const MILISECONDS_IN_A_SECOND = 1000;
Vue.use(Vuex);
const LEARNING_STATUS = ["UNKNOWN", "LEARNED", "MASTERED"];

export default new Vuex.Store({
  state: {
    words: [],
    languagesChosen: {
      from: "pl",
      to: "en"
    },
    user: {
      isLoggedIn: false,
      username: undefined,
      display_name: undefined
    },
    dialog: {
      isVisible: false,
      header: "",
      text: ""
    }
  },
  getters: {
    getWordsByCategory: state => category => {
      return category === "all"
        ? state.words.sort(
            (a, b) => a.wordTranslations.en - b.wordTranslations.en
          )
        : state.words.filter(word => word.category === category);
    },
    getAmountOfWordStatus: state => status => {
      return state.words.filter(word => word.status === status).length;
    },
    getAmountOfWordStatusCategory: state => (status, category) => {
      return state.words
        .filter(word => word.category === category)
        .filter(word => word.status === status).length;
    },
    getCategories: state => {
      return Array.from(
        new Set(state.words.map(value => (value = value.category)))
      );
    }
  },
  mutations: {
    ADD_CARD(state, payload) {
      Vue.set(state.words, state.words.length, payload);
    },
    MODIFY_CARD(state, payload) {
      const word = payload;
      const indexOfModifiedCard = state.words.findIndex(
        word => word.id === payload.id
      );
      const wordBeforeMod = state.words[indexOfModifiedCard];
      Vue.set(state.words, indexOfModifiedCard, {
        ...wordBeforeMod,
        ...word
      });
    },
    REMOVE_CARD(state, payload) {
      Vue.delete(
        state.words,
        state.words.findIndex(word => word.id === payload)
      );
    },
    SET_STATUS(state, payload) {
      Vue.set(
        state.words,
        state.words.findIndex(word => word.id === payload.id),
        {
          ...state.words[state.words.findIndex(word => word.id === payload.id)],
          status: payload.word_status
        }
      );
    },
    SET_USER_USERNAME(state, payload) {
      state.user.username = payload;
    },
    SET_USER_DISPLAY_NAME(state, payload) {
      state.user.display_name = payload;
    },
    SET_USER_ROLE(state, payload) {
      state.user.role = payload;
    },
    SET_USER_LOGGED_IN(state, payload) {
      state.user.isLoggedIn = payload;
    },
    SET_DIALOG_VISIBILITY(state, payload) {
      state.dialog.isVisible = payload;
    },
    SET_DIALOG_HEADER(state, payload) {
      state.dialog.header = payload;
    },
    SET_DIALOG_TEXT(state, payload) {
      state.dialog.text = payload;
    }
  },
  actions: {
    async logIn({ commit, dispatch, state }, payload) {
      try {
        state.words = [];
        let response = await post("http://localhost/api/login.php", payload, {
          withCredentials: true
        });
        let { username, display_name, role } = response.data.user_info;

        if (response.data.response === "log_in_success") {
          commit("SET_USER_USERNAME", username);
          commit("SET_USER_DISPLAY_NAME", display_name);
          commit("SET_USER_LOGGED_IN", true);
          commit("SET_USER_ROLE", role);
          dispatch("showDialog", {
            time: 3,
            header: "Logged in.",
            text: `Logged in as ${username}.`
          });
        }
      } catch (error) {
        commit("SET_USER_LOGGED_IN", false);
        dispatch("showDialog", {
          time: 3,
          header: "Log in failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    },
    async showDialog({ commit }, payload) {
      commit("SET_DIALOG_VISIBILITY", true);
      commit("SET_DIALOG_HEADER", payload.header);
      commit("SET_DIALOG_TEXT", payload.text);
      setTimeout(() => {
        commit("SET_DIALOG_VISIBILITY", false);
        commit("SET_DIALOG_HEADER", "");
        commit("SET_DIALOG_TEXT", "");
      }, payload.time * MILISECONDS_IN_A_SECOND);
    },
    async getLoggedInData({ commit }) {
      let response = await get("http://localhost/api/get_user_info.php", {
        withCredentials: true
      });
      let { name, display_name } = response.data.user_info;
      commit("SET_USER_USERNAME", name);
      commit("SET_USER_DISPLAY_NAME", display_name);
      commit("SET_USER_LOGGED_IN", true);
    },
    async logOut({ commit, dispatch, state }) {
      try {
        let response = await get("http://localhost/api/logout.php", {
          withCredentials: true
        });
        if (response.data.response === "log_out_success") {
          commit("SET_USER_USERNAME", undefined);
          commit("SET_USER_DISPLAY_NAME", undefined);
          commit("SET_USER_LOGGED_IN", false);
          dispatch("showDialog", {
            time: 3,
            header: "Log out succeeded!"
          });
          state.words = [];
        }
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Log out failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    },
    async getAllWords({ commit, dispatch }) {
      try {
        let result = await get("http://localhost/api/words.php", {
          withCredentials: true
        });

        if (result.data.response === "get_words_success")
          for (const word of result.data.words) {
            let wordToBeAdded = {
              id: word.id,
              wordTranslations: { en: word.en, pl: word.pl },
              category: word.category,
              status: word.word_status || "unknown"
            };

            commit("ADD_CARD", wordToBeAdded);
          }
      } catch (error) {
        commit("SET_USER_LOGGED_IN", false);
        dispatch("showDialog", {
          time: 3,
          header: "Loading of words failed.",
          text: `Cause: ${JSON.stringify(
            error.description || error || "unknown"
          )}`
        });
      }
    },
    async deleteWord({ commit, dispatch }, payload) {
      try {
        let result = await post(
          "http://localhost/api/words.php",
          {
            id: payload,
            type: "delete"
          },
          {
            withCredentials: true
          }
        );

        if (result.data.response === "delete_word_success")
          commit("REMOVE_CARD", payload);
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Word deletion failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    },
    async updateWord({ commit, dispatch }, payload) {
      let requestPayload = {
        ...payload,
        translations: [
          {
            language: "en",
            translation: payload.wordTranslations.en
          },
          {
            language: "pl",
            translation: payload.wordTranslations.pl
          }
        ]
      };
      try {
        let result = await put(
          "http://localhost/api/words.php",
          requestPayload,
          {
            withCredentials: true
          }
        );

        if (result.data.response === "update_word_success")
          commit("MODIFY_CARD", payload);
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Word update failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    },
    async insertWord({ dispatch }, payload) {
      let insertPayload = {
        translation_en: payload.wordTranslations.en,
        translation_pl: payload.wordTranslations.pl,
        category: payload.category
      };
      try {
        let result = await post(
          "http://localhost/api/words.php",
          insertPayload,
          {
            withCredentials: true
          }
        );

        if (result.data.response === "insert_word_success") {
          this.state.words = [];
          dispatch("getAllWords");
        }
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Word insert failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    },
    async setStatus({ commit, dispatch, state }, payload) {
      const CURRENT_STATUS =
        state.words[state.words.findIndex(word => word.id === payload.id)]
          .status;
      let statusID = LEARNING_STATUS.findIndex(
        status => status === CURRENT_STATUS
      );
      const newStatus =
        LEARNING_STATUS[(statusID + 1) % LEARNING_STATUS.length];
      const updatePayload = {
        id: payload.id,
        word_status: newStatus
      };

      try {
        let result = await put(
          "http://localhost/api/word_status.php",
          updatePayload,
          {
            withCredentials: true
          }
        );

        if (result.data.response === "set_word_status_success") {
          commit("SET_STATUS", updatePayload);
        }
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Word update failed.",
          text: `Cause: ${JSON.stringify(error.description || "Unknown")}`
        });
      }
    }
  },
  modules: {}
});
