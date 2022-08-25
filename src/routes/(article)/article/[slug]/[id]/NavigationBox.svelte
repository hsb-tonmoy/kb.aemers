<script>
	export let category;
</script>

<div
	class="flex items-center justify-between bg-bgColor py-3 px-6 font-bold w-full mb-12 rounded-2xl"
>
	<div class="flex items-center gap-x-1 text-base">
		<span class="">Knowledgebase</span>
		<span class="text-primary">/</span>
		<span class="">{category.name}</span>
	</div>
	<div class="flex items-center gap-x-2">
		<button
			class="px-4 py-2 bg-transparent hover:bg-primary border-2 border-primary rounded-xl text-primary hover:text-white"
			>Previous</button
		>
		<button
			class="px-4 py-2 bg-primary hover:bg-primaryDarker border-2 border-primary rounded-xl text-white"
			>Next Article</button
		>
	</div>
</div>
