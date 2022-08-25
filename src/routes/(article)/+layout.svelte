<script>
	import LeftSidebar from '$lib/layout/article/leftsidebar/LeftSidebar.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	import { DoubleRightArrow } from '$lib/svg';
	import { fly } from 'svelte/transition';
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
		{#if !categoryShow}
			<button
				in:fly={{ x: -200, duration: 500 }}
				out:fly={{ x: -200, duration: 500 }}
				on:click={() => (categoryShow = !categoryShow)}
				class="flex items-center fixed top-20 left-0 bg-white shadow-lg px-3 py-2 rounded-r-lg z-[700] text-sm"
				>Show<span class="w-4 h-4 text-secondary"><DoubleRightArrow /></span></button
			>
		{/if}
		{#if categoryShow}
			<div
				class="hidden xl:flex sticky left-0 top-0 w-[20%] shrink-0 z-[400] self-start max-h-screen overflow-y-auto"
			>
				<LeftSidebar bind:categoryShow {current_article_id} data={data.categories} />
			</div>
			<div
				on:click|self={() => (categoryShow = !categoryShow)}
				class="xl:hidden absolute overflow-x-hidden overflow-y-auto w-full h-full top-0 left-0 right-0 bg-black/40 z-[1000]"
			>
				<div class="xl:hidden flex w-[50%] h-full shrink-0 self-start">
					<LeftSidebar bind:categoryShow {current_article_id} data={data.categories} />
				</div>
			</div>
		{/if}

		<slot />
	</div>
</div>
