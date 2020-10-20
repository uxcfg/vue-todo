<template>
	<div class="main-list list">
		<div class="list__content">
			<h2 class="list__empty" v-if="isEmptyTodos">Todo's is empty</h2>
			<template v-else>
				<div class="list__item" v-for="todo in todos" :key="todo.id">
					<Todo :todo="todo" />
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import Todo from "./Todo";

export default {
	data() {
		return {
			todos: null,
		};
	},
	components: {
		Todo,
	},

	created() {
		this.todos = this.$store.getters.getTodos;
	},

	computed: {
		isEmptyTodos() {
			return this.todos.length ? false : true;
		},

		todoList() {
			return this.$store.state.todos;
		},
	},
};
</script>

<style lang="scss">
.list {
	background-color: white;
	border-radius: 5px;

	max-height: 371px;
	overflow-y: scroll;
	margin-bottom: 50px;
}

.list__content {
	padding: 40px;

	cursor: pointer;
}

.list__item {
	min-width: 370px;
	max-height: 135px;

	padding: 15px;
	box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
	background-color: rgba(96, 157, 159, 0.3);
	border-radius: 5px;
}

.list__empty {
	text-align: center;
	font-weight: bold;
	font-size: 20px;
	text-transform: uppercase;
	color: grey;
}

.list__item:not(:last-child) {
	margin-bottom: 30px;
}
</style>
