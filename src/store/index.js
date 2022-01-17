import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [{
                id: 1,
                title: "Wake Up",
                done: false,
            },
            {
                id: 2,
                title: "Get Apple",
                done: false,
            },
            {
                id: 3,
                title: "Eat Apple",
                done: false,
            },
        ],
        snackbar: {
            show: false,
            text: "",
        },
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        CLICK_TASK(state, id) {
            let task = state.tasks.filter((task) => task.id === id)[0];
            task.done = !task.done;
        },
        SHOW_SACKBER(state, text) {
            let timeout = 0;
            if (state.snackbar.show) {
                state.snackbar.show = false;
                timeout = 300;
            }
            setTimeout(() => {
                state.snackbar.show = true;
                state.snackbar.text = text;
            }, timeout);
        },
        UPDATE_TASK(state, newtasks) {
            let index = state.tasks.filter((task) => task.id === newtasks.id)[0]
            index.title = newtasks.title
        }
    },
    actions: {
        addTask({ commit }, newtask) {
            commit("ADD_TASK", newtask);
            commit("SHOW_SACKBER", "Task Added");
        },
        updateTask({ commit }, payload) {
            commit("UPDATE_TASK", payload);
            // commit("SHOW_SACKBER", "Task Updated");
        },
        deleteTask({ commit }, id) {
            commit("DELETE_TASK", id);
            commit("SHOW_SACKBER", "Delete Task");
        },
    },
    modules: {},
});