import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emailTemplates: {}
  },
  mutations: {
    storeOrgEmailTemplates(state, data) {
      const keyedData = data.reduce((obj, item) => {
        return {
          ...obj,
          [item["Type"]]: item
        };
      }, {});
      Vue.set(state, "emailTemplates", keyedData);
    },
    storeSingleTemplate(state, data) {
      Vue.set(state.emailTemplates, data.Type, data);
    }
  },
  actions: {
    async fetchEmailTemplates(context) {
      const OrgId = 22; //lazy hardcoding
      const res = await fetch(`http://localhost:8080/email-templates/${OrgId}`);
      const data = await res.json();
      context.commit("storeOrgEmailTemplates", data);
    },
    async saveEmail(context, data) {
      const requestBody = {
        orgId: 22,
        text: data.text,
        Type: data.Type
      };
      const resData = await axios.post("http://localhost:8080/email-templates/create", requestBody);

      context.commit("storeSingleTemplate", resData.data);
    },
    async updateEmail(context, data) {
      const requestBody = {
        id: data.id,
        text: data.text,
        Type: data.Type
      };
      const resData = await axios.post(
        `http://localhost:8080/email-templates/update/${data.id}`,
        requestBody
      );

      context.commit("storeSingleTemplate", resData.data);
    }
  },
  modules: {}
});
