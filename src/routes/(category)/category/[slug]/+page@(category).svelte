<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	export let data;
</script>

<main class="px-4 md:px-12 2xl:px-40 py-20">
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
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
</main>
