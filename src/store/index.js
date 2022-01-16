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
        snackbar: {
            show: false,
            text: ''
        }

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
        SHOW_SACKBER(state, text) {
            state.snackbar.show = true
            state.snackbar.text = text
        }

    },
    actions: {
        addTask({ commit }, newtask) {
            commit('ADD_TASK', newtask)
            commit('SHOW_SACKBER', 'Task Added')
        },
        deleteTask({ commit }, id) {
            commit('DELETE_TASK', id)
            commit('SHOW_SACKBER', 'Delete Task')
        },
    },
    modules: {},
});