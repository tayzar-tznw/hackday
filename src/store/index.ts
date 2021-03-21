import {createStore} from "vuex";

export interface State {
    todoList: Array<{ id: number; todo: string }>;
    selectedGames: Array<number>;
    mode: number;
    money: number;
}

export const store = createStore<State>({
    state: {
        todoList: [],
        selectedGames: [],
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
        addSelectedGames(state, value) {
            state.selectedGames.push(value);
        },
        addMoney(state, value) {
            state.money = value;
        }
    },
    actions: {},
    modules: {}
});

export default store
