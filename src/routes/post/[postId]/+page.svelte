<script>
	import { page } from "$app/stores";
	import { postList } from "$lib/store";
	import { goto } from "$app/navigation";
	import Forma from "$lib/components/forma.svelte";
	import postApi from "$lib/postApi";

	let post = { id: "123", title: "sdadasd", content: "asdasdas" };
	post = $postList[$postList.findIndex(({ id }) => id === $page.params.postId)];

	function changeList(event) {
		postList.update((list) => {
			list[list.indexOf(post)] = { ...event.detail, id: post.id };
			console.log(list);
			return list;
		});
		postApi.saveData($postList);
		goto("/");
	}
</script>

<main>
	<Forma {...post} on:save={changeList} />
</main>

<style>
	main {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		width: 100%;
		margin-top: 40px;
	}
</style>
