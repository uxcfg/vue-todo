<template>
	<div class="add-panel">
		<div v-if="error" class="add-panel__error">Add title for todo</div>
		<form class="add-panel__content" @submit.prevent="$emit('add-todo')">
			<input
				type="text"
				class="add-panel__input"
				:value="inpValue"
				@input="$emit('input', $event.target.value)"
				placeholder="Write a new todo"
			/>
			<button class="add-panel__btn" >
				Add
			</button>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		inpValue: {
			type: String,
			required: true,
		},

		error: {
			type: Boolean,
			required: true,
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
