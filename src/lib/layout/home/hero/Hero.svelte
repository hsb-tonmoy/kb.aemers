<script>
	import { Scroll } from '$lib/svg';
	import Youtube from 'svelte-youtube-embed';
	import Search from './search.svelte';
</script>

<section
	class="relative flex flex-col flex-1 w-full justify-center items-center px-8 md:px-12 2xl:px-40 bg-primary"
>
	<div class="self-start w-full xl:w-2/4 flex flex-col">
		<h3 class="text-borderColor font-semibold text-xl md:text-3xl 2xl:text-4xl mb-1">
			Welcome to the
		</h3>
		<h2 class="text-white font-bold text-4xl md:text-7xl mb-3 md:mb-6">Knowledgebase</h2>
		<span class="text-borderColor mb-8 text-sm md:text-base"
			>This is the ultimate goldmine of US Admission & Scholarship information</span
		>
		<Search />
	</div>
	<!-- <div class="hidden xl:flex items-center w-full md:w-2/4 p-5 md:p-10 2xl:p-20">
		<Youtube id="q2Y3f0lHnMs" />
	</div> -->
	<a href="#blog" class="absolute flex flex-col items-center justify-center bottom-5 md:bottom-10">
		<span class="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
			<Scroll />
		</span><span class="text-white text-xs">Scroll down...</span>
	</a>
</section>
