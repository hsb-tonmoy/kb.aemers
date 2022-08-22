<script>
	import '../app.postcss';
	import Header from '$lib/layout/header/Header.svelte';
</script>

<svelte:head>
	<title>Aemers - Knowledgebase</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
