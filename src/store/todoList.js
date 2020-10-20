import { v4 as uuidv4 } from "uuid";

export default {
	state: {
		todos: [
			{
				id: uuidv4(),
				title: "FIrst",
				date: new Date(Date.now()).toLocaleString(),
				done: false,
			},

			{
				id: uuidv4(),
				title: "Second",
				date: new Date(Date.now()).toLocaleString(),
				done: false,
			},

			{
				id: uuidv4(),
				title: "Thrid",
				date: new Date(Date.now()).toLocaleString(),
				done: false,
			},
		],

		addInputValue: "",
		error: false,
	},

	getters: {
		getTodos(state) {
			return state.todos;
		},

		sortDone(state) {
			return state.todos.sort((a, b) => a.done - b.done);
		},

		error(state) {
			return state.error;
		},
	},

	mutations: {
		addTodo(state) {
			if (state.addInputValue.trim()) {
				state.todos.push({
					id: uuidv4(),
					title: state.addInputValue,
					date: new Date(Date.now()).toLocaleString(),
					done: false,
				});
				state.addInputValue = "";
				state.error = false;
			} else {
				state.error = true;
			}
		},

		delTodo(state, id) {
			state.todos.splice(id, 1);
		},

		setValue(state, value) {
			state.addInputValue = value;
		},

		isDone(state, id) {
			const todo = state.todos.find((el) => el.id == id);
			todo.done = !todo.done;
			state.todos = this.getters.sortDone;
		},
	},

	actions: {
		addTodo({ commit }, payload) {
			commit("addTodo", payload);
		},

		isDone({ commit }, payload) {
			commit("isDone", payload);
		},

		delTodo({ commit }, payload) {
			commit("delTodo", payload);
		},
	},
};
