<script>
	import { page } from '$app/stores';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	export let data;

	const query = $page.url.searchParams.get('query');
</script>

<svelte:head>
	<title>Aemers Knowledgebase - {query}</title>
</svelte:head>

<div class="flex flex-col px-4 md:px-12 2xl:px-40 py-20">
	<h2 class="text-lighterText font-bold text-2xl">Search Results for</h2>
	<h1 class="font-bold text-secondary text-5xl">{query}</h1>
	<div
		class="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6"
	>
		{#each data.articles as article}
			<BlogCard
				title={article.title}
				id={article.id}
				slug={article.slug}
				summary={article.summary}
				image={article.featured_image}
			/>
		{/each}
	</div>
</div>
