<script>
	import Header from '$lib/layout/header/Header.svelte';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
