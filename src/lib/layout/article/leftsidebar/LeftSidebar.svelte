<script lang="ts">
	import CategoryList from './CategoryList.svelte';

	export let categoryShow: Boolean;
	export let data;
	export let current_article_id;
</script>

<div class="hidden 2xl:flex sticky left-0 top-0 w-[20%] shrink-0 z-[400] overflow-y-auto">
	<CategoryList bind:categoryShow {current_article_id} {data} />
</div>
<div
	on:click|self={() => (categoryShow = !categoryShow)}
	class="2xl:hidden absolute overflow-x-hidden overflow-y-auto w-full h-full top-0 left-0 right-0 bg-black/40 z-[1000]"
>
	<div class="2xl:hidden flex h-full shrink-0 self-start">
		<CategoryList bind:categoryShow {current_article_id} {data} />
	</div>
</div>
