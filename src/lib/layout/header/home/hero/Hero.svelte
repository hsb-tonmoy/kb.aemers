<script>
	import Youtube from 'svelte-youtube-embed';
	import Search from './search.svelte';
</script>

<section class="flex w-full h-full justify-center items-center px-40 bg-primary">
	<div class="w-2/4 flex flex-col">
		<h3 class="text-borderColor font-semibold 2xl:text-4xl mb-1">Welcome to the</h3>
		<h2 class="text-white font-bold 2xl:text-7xl mb-6">Knowledgebase</h2>
		<span class="text-borderColor mb-8"
			>This is the ultimate goldmine of US Admission & Scholarship information</span
		>
		<Search />
	</div>
	<div class="w-2/4">
		<Youtube id="q2Y3f0lHnMs" />
	</div>
</section>
