import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [{
                id: 1,
                title: 'Wake Up',
                done: false,
            },
            {
                id: 2,
                title: 'Get Apple',
                done: false,
            },
            {
                id: 3,
                title: 'Eat Apple',
                done: false,
            }
        ],
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task)
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
        CLICK_TASK(state, id) {
            let task = state.tasks.filter((task) => task.id === id)[0];
            task.done = !task.done;
        },

    },
    actions: {
        addTask({ commit }, newtask) {
            commit('ADD_TASK', newtask)
        },
        deleteTask({ commit }, id) {
            commit('DELETE_TASK', id)
        },
    },
    modules: {},
});