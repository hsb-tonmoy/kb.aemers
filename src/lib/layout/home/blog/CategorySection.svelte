<script>
	import BlogListItem from '$lib/components/blog/BlogListItem.svelte';
	import Heading from '$lib/components/heading.svelte';

	export let data;
</script>

<div class="flex flex-col">
	<div class="flex justify-between items-center mb-8">
		<div class="mr-2">
			<Heading heading={data.category.name} />
		</div>

		<button
			class="shrink-0 bg-white border border-primary text-primary hover:text-white hover:bg-primary font-bold text-xs md:text-sm rounded-lg px-3 md:px-4 py-2"
		>
			<a href={`/category/${data.category.slug}`}>View All</a>
		</button>
	</div>
	{#each data.articles as article, i}
		<div class="">
			<BlogListItem
				title={article.title}
				id={article.id}
				slug={article.slug}
				image={article.featured_image}
			/>
			{#if i !== data.articles.length - 1}
				<div class="list-divider" />
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.list-divider {
		@apply my-4 h-px bg-[#BEBEBE];
	}
</style>
