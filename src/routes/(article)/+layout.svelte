<script>
	import { page } from '$app/stores';
	import LeftSidebar from '$lib/layout/article/leftsidebar/LeftSidebar.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	import { DoubleRightArrow } from '$lib/svg';
	import { fly } from 'svelte/transition';
	export let data;

	let categoryShow = true;

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
			<LeftSidebar bind:categoryShow bind:current_article_id data={data.categories} />
		{/if}
		<slot />
	</div>
</div>
