<script>
	import LeftSidebar from '$lib/layout/article/leftsidebar/LeftSidebar.svelte';
	import RightSidebar from '$lib/layout/article/rightsidebar/RightSidebar.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	export let data;

	let categoryShow = true;

	import { page } from '$app/stores';

	$: current_article_id = $page.params.id;
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<div class="relative flex flex-1 w-full">
		{#if categoryShow}
			<div class="hidden lg:flex lg:fixed 2xl:sticky left-0 top-0 w-[20%] shrink-0 z-[400]">
				<LeftSidebar {current_article_id} data={data.categories} />
			</div>
		{/if}
		<div class="main">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.main {
		@apply bg-white transition-all ease-in-out duration-500 z-[500];
	}
</style>
