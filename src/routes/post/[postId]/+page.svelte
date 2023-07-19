<script>
	import { page } from "$app/stores";
	import { postList } from "$lib/store";

	let post = $postList[$postList.findIndex(({ id }) => id === $page.params.postId)];
</script>

<main>
	<h1>{post.title}</h1>
	<p>{post.content}</p>
</main>

<style>
	main {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}
</style>
