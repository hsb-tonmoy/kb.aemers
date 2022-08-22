<script>
	import '../app.postcss';
	import Header from '$lib/layout/header/Header.svelte';
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<main class="flex flex-col h-screen">
	<Header />

	<slot />
</main>
