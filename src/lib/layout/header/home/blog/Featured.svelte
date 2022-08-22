<script>
	import Heading from '$lib/components/heading.svelte';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
</script>

<div class="flex flex-col gap-y-8">
	<Heading heading="Featured" />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</div>
