<script>
	import { DoubleLeftArrow } from '$lib/svg';
	import CategoryAccordionSection from './CategoryAccordionSection.svelte';

	export let data;
</script>

<aside class="flex flex-col py-12 px-10 w-full h-full">
	<div class="flex justify-between items-center">
		<h2 class="font-bold text-xl">Categories</h2>
		<div class="flex items-center gap-x-1 text-secondary">
			<span class="w-5 h-5 text-black">
				<DoubleLeftArrow />
			</span> Hide
		</div>
	</div>
	<div class="">
		<CategoryAccordionSection {data} />
	</div>
</aside>
