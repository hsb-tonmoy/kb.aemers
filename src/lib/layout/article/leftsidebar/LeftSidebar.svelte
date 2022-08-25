<script>
	import { DoubleLeftArrow } from '$lib/svg';
	import CategoryAccordionSection from './CategoryAccordionSection.svelte';

	export let data;
	export let current_article_id;
</script>

<aside class="flex flex-col py-12 px-10 w-[50vw] 2xl:w-full h-full bg-white">
	<div class="flex justify-between items-center mb-4">
		<h2 class="font-bold text-xl">Categories</h2>
		<div class="flex items-center gap-x-1 text-secondary">
			<span class="w-5 h-5 text-black">
				<DoubleLeftArrow />
			</span> Hide
		</div>
	</div>
	<div class="">
		<CategoryAccordionSection {current_article_id} {data} />
	</div>
</aside>
