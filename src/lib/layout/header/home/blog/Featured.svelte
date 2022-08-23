<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import Heading from '$lib/components/heading.svelte';

	export let data;
</script>

<div class="flex flex-col gap-y-8">
	<Heading heading="Featured" />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
		{#each data as article}
			<BlogCard title={article.title} summary={article.summary} image={article.featured_image} />
		{/each}
	</div>
</div>
