import {createStore} from "vuex";

export interface State {
    todoList: Array<{ id: number; todo: string }>;
    mode: number;
    money: number;
}

export const store = createStore<State>({
    state: {
        todoList: [],
        mode: 0,
        money: 0,
    },
    mutations: {
        increment(state, {id, value}) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            state.todoList.push({id: id, todo: value, comment: []})
        },
        complete(state, targetIndex) {
            state.todoList.splice(targetIndex, 1)
        },
        changemode(state, value) {
            state.mode = value;
        },
        addMoney(state, value) {
            state.money = value;
        }
    },
    actions: {},
    modules: {}
});

export default store
