<header>
	<a href="/">POSTER APP</a>
</header>

<slot />

<style>
	header {
		padding: 10px;
		background-color: gray;
		height: 40px;
		font-size: 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		box-shadow: 0px 3px 10px black;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}
	a {
		text-decoration: none;
		color: white;
	}
</style>
