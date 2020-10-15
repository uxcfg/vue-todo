<template>
	<div @click="$emit('is-done')" :class="todo.done ? 'done' : ''">
		<div class="list__header">
			<div class="list__title">
				{{ todo.title }}
			</div>

			<img
				@click.stop="$emit('del-todo')"
				class="list__close"
				src="../assets/img/close.svg"
				alt="close"
			/>
		</div>

		<div class="list__date">
			{{ todo.date }}
		</div>

		<template />
	</div>
</template>

<script>
export default {
	props: {
		todo: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.list__header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 8px;
}

.done {
	opacity: 0.4;
}

.list__title {
	font-weight: normal;
	font-size: 22px;
}

.list__close {
	cursor: pointer;
	width: 12px;
}

.list__date {
	font-size: 14px;
}
</style>
