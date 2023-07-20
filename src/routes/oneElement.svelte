<script>
	import { goto } from "$app/navigation";
	import { postList } from "$lib/store";
	import postApi from "$lib/postApi";
	export let title, content, id;
	function openPage() {
		goto("/post/" + id);
	}
	function deleteElement() {
		let res = confirm(`Delete ${title}`);
		if (!res) return;
		postList.update((list) => {
			list.splice(
				list.findIndex((el) => el.id === id),
				1
			);
			return list;
		});
		postApi.saveData($postList);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={openPage}>
	<h3>{title}</h3>
	<p>{content}</p>
	<button on:click|stopPropagation={deleteElement}> delete </button>
</div>

<style>
	div {
		border: 1px solid black;
		border-radius: 10px;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		overflow: hidden;
	}
</style>
