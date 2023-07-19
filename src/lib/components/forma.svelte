<script>
	import { postList } from "../store";

	let title = "",
		content = "";

	function changeList() {
		if (!title || !content) return;
		postList.update((n) => [...n, { title, content, id: Date.now().toString() }]);
		title = content = "";
	}
</script>

<form on:submit|preventDefault={changeList}>
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
	}

	input,
	button,
	textarea {
		font-size: 18px;
		outline: none;
		border: 1px solid black;
		border-radius: 5px;
	}

	button {
		background-color: gray;
		color: white;
	}
</style>
