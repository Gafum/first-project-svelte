<script>
	import { createEventDispatcher } from "svelte";

	export let title = "",
		content = "";
	const dispatch = createEventDispatcher();

	function saveData() {
		if (!title || !content) return;
		dispatch("save", { title, content });
		title = content = "";
	}
</script>

<form on:submit|preventDefault={saveData}>
	<input type="text" placeholder="Title" bind:value={title} />
	<textarea cols="30" rows="10" placeholder="Content" bind:value={content} />
	<button> Add </button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		width: 100%;
	}

	input,
	button,
	textarea {
		font-size: 18px;
		outline: none;
		border: 1px solid black;
		border-radius: 5px;
		width: 100%;
	}

	button {
		background-color: gray;
		color: white;
	}
</style>
