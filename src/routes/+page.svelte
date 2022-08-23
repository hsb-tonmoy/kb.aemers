<script>
	import CategorySection from '$lib/layout/header/home/blog/CategorySection.svelte';
	import Featured from '$lib/layout/header/home/blog/Featured.svelte';
	export let data;
</script>

<main id="blog" class="flex flex-col px-4 md:px-12 2xl:px-40 py-20">
	<section class="featured mb-20">
		<Featured data={data.featuredArticles} />
	</section>

	<section
		class="articles grid grid-cols-max-content-1 md:grid-cols-max-content-2 2xl:grid-cols-max-content-3 gap-x-16 gap-y-24"
	>
		{#each data.articlesGroupedByCategory as categoryArticle}
			<CategorySection data={categoryArticle} />
		{/each}
	</section>
</main>

<!-- <style lang="postcss">
	.articles {
		grid-template-columns: repeat(3, minmax(0, max-content));
	}
</style> -->
