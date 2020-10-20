<template>
	<div class="add-panel">
		<div v-if="error" class="add-panel__error">Add title for todo</div>
		<form class="add-panel__content" @submit.prevent="addTodo">
			<input
				type="text"
				class="add-panel__input"
				v-model="setValue"
				placeholder="Write a new todo"
			/>

			<button class="add-panel__btn">
				Add
			</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		setValue: {
			get() {
				return this.$store.state.todoList.addInputValue;
			},
			set(value) {
				this.$store.commit("setValue", value);
			},
		},

		error() {
			return this.$store.state.todoList.error;
		},
	},

	methods: {
		addTodo() {
			this.$store.dispatch("addTodo");
		},
	},
};
</script>

<style lang="scss">
.add-panel {
	margin-bottom: 40px;
}

.add-panel__error {
	color: tomato;

	margin-bottom: 5px;
}

.add-panel__content {
	display: flex;
}

.add-panel__input {
	width: 75%;
	padding: 10px 10px;
	border: none;
	border-radius: 5px;

	margin-right: 5px;
}

.add-panel__btn {
	height: 38px;
	width: 25%;

	border: none;
	border-radius: 5px;
	box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
	background-color: cadetblue;
	color: white;
}
</style>
