<script>
	import CategorySection from '$lib/layout/home/blog/CategorySection.svelte';
	import Featured from '$lib/layout/home/blog/Featured.svelte';
	export let data;
</script>

<main id="blog" class="flex flex-col px-4 md:px-12 2xl:px-40 py-20">
	<section class="featured mb-40">
		<Featured data={data.featuredArticles} />
	</section>

	<section class="articles">
		{#each data.articlesGroupedByCategory as categoryArticle}
			<CategorySection data={categoryArticle} />
		{/each}
	</section>
</main>

<style lang="postcss">
	.articles {
		@apply grid grid-cols-max-content-1 md:grid-cols-max-content-2 3xl:grid-cols-max-content-large gap-x-24 gap-y-28 md:gap-y-32;
	}
</style>
