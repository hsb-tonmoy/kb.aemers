<script>
	import { DoubleLeftArrow } from '$lib/svg';
	import { fly } from 'svelte/transition';
	import CategoryAccordionSection from './CategoryAccordionSection.svelte';
	export let categoryShow;
	export let data;
	export let current_article_id;
</script>

<aside
	in:fly={{ x: -200, duration: 500 }}
	out:fly={{ x: -200, duration: 500 }}
	class="flex flex-col py-12 px-6 md:px-10 w-[85vw] md:w-[50vw] 2xl:w-full h-full bg-white"
>
	<div class="flex justify-between items-center gap-x-8 md:gap-x-0 mb-4">
		<h2 class="font-bold text-xl">Categories</h2>
		<button
			on:click={() => (categoryShow = !categoryShow)}
			class="flex items-center gap-x-1 text-secondary"
		>
			<span class="w-5 h-5 text-black">
				<DoubleLeftArrow />
			</span> Hide
		</button>
	</div>
	<div class="">
		<CategoryAccordionSection {current_article_id} {data} />
	</div>
</aside>
