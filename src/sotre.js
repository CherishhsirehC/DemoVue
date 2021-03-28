import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        msg222: 'hh',
        msg:'sdfg'
    },
    mutations: {//唯一修改状态的位置
        message(state, data) {
            // console.log(state, data);
            state.msg222 = data;
        },
        message2(state, data) {
            // console.log(state, data);
            state.msg222 = data.length;
        }

    },
    getters: {
        dataGetter(state) {
            return [...state.msg].splice(0, 1);
        }
    },
    actions: {//异步处理
        getListAction(store) {
            axios.get("/LL/leaflet@1.6.0/dist/leaflet.js").then(res => {
                store.commit('message2', res.data)
            });
        }

    },
    modules: {

    }
})