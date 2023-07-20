<script>
	import { postList } from "$lib/store";
	import OneElement from "./oneElement.svelte";
	import Forma from "$lib/components/forma.svelte";
	import { onMount } from "svelte";
	import postApi from "$lib/postApi";

	onMount(() => postList.set(postApi.readData()));

	function changeList(event) {
		postList.update((list) => {
			return [...list, { ...event.detail, id: Date.now().toString() }];
		});
		postApi.saveData($postList);
	}
</script>

<section class="main-list">
	{#each $postList as post (post)}
		<OneElement {...post} />
	{/each}
</section>

<section class="main-forma">
	<Forma on:save={changeList} />
</section>

<style>
	.main-list {
		width: 50vw;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 10px;
		padding-top: 10px;
		margin: 40px 0 10px;
	}

	.main-forma {
		width: 45vw;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
		border: 1px solid black;
		border-right: none;
		position: fixed;
		right: 0;
		top: 50px;
	}
</style>
