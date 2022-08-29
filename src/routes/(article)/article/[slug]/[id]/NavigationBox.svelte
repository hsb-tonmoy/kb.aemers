<script>
	export let category;
	export let previous;
	export let next;
</script>

<div
	class="not-prose flex flex-col md:flex-row items-center justify-center gap-y-4 md:justify-between bg-bgColor px-3 py-6 md:py-3 md:px-6 font-bold w-full mb-12 rounded-2xl"
>
	<div class="flex flex-wrap justify-center items-center gap-x-1 text-base">
		<span class=""><a href="/">Knowledgebase</a></span>
		<span class="text-primary">/</span>
		<span class="">{category.name}</span>
	</div>
	<div class="flex items-center gap-x-2">
		<button
			class="px-3 py-2 bg-transparent hover:bg-primary border-2 border-primary rounded-xl text-sm lg:text-base text-primary hover:text-white"
			><a href={`/article/${previous.slug}/${previous.id}`}>Previous</a></button
		>
		<button
			class="px-3 py-2 bg-primary hover:bg-primaryDarker border-2 border-primary rounded-xl text-sm lg:text-base text-white"
			><a href={`/article/${next.slug}/${next.id}`}>Next Article</a></button
		>
	</div>
</div>
