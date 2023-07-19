<script>
	import { goto } from "$app/navigation";
	export let title, content, id;
	function openPage(params) {
		goto("/post/" + id);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={openPage}>
	<h3>{title}</h3>
	<p>{content}</p>
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
