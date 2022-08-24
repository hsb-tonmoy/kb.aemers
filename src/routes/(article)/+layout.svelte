<script>
	import LeftSidebar from '$lib/layout/article/leftsidebar/LeftSidebar.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	export let data;

	let categoryShow = true;
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<div class="relative flex flex-1 w-full">
		{#if categoryShow}
			<div class="sticky left-0 top-0 w-[25%]">
				<LeftSidebar data={data.categories} />
			</div>
		{/if}
		<div class="main">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.main {
		@apply mr-[20%] bg-white transition-all ease-in-out duration-500;
	}
</style>
