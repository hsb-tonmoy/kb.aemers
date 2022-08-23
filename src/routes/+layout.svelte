<script>
	import Header from '$lib/layout/header/Header.svelte';
	import Hero from '$lib/layout/header/home/hero/Hero.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<Hero />
</div>
<slot />
