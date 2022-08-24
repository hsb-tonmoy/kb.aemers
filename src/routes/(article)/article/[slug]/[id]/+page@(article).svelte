<script>
	export let data;
</script>

<svelte:head>
	<title>Aemers Knowledgebase - {data.article.title}</title>
</svelte:head>

<main class="content-body">
	<h1 class="font-bold text-4xl">{data.article.title}</h1>
</main>

<style lang="postcss">
	.content-body {
		@apply px-10 py-10;
		box-shadow: 0px 4px 42px rgba(95, 94, 94, 0.25);
	}
</style>
