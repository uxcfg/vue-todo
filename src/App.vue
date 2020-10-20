<template>
	<div id="app">
		<main class="main">
			<div class="container">
				<div class="main__wrap">
					<div class="main__content">
						<div class="main__header">
							<h1 class="main__title">Todo App</h1>
						</div>

						<AddPanel />
						<TodoList />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TodoList from "./components/TodoList";
import AddPanel from "./components/AddPanel";

export default {
	name: "App",
	components: {
		TodoList,
		AddPanel,
	},
};
</script>

<style lang="scss">
.main {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.main__wrap {
	display: flex;
	align-items: flex-start;
	justify-content: center;

	width: 700px;
	height: 611px;

	background-color: #eceff1;
	box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
	border-radius: 5%;
}

.main__content {
	min-width: 497px;
}

.main__header {
	margin-bottom: 30px;
	margin-top: 50px;
}

.main__title {
	font-weight: 400;
	font-size: 32px;
}
</style>
