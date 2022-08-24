<script>
	import Header from '$lib/layout/header/Header.svelte';
	import Hero from '$lib/layout/home/hero/Hero.svelte';
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<Hero />
</div>
<slot />
