<script>
	import { navigating } from '$app/stores';
	import '../app.postcss';

	import Loader from '$lib/loading/Loader.svelte';
	import { loading } from '$lib/loading/loading';

	$: loading.setNavigate(!!$navigating);
</script>

<svelte:head>
	<script
		async
		defer
		data-website-id="a504dca9-1d40-4994-9ab4-23eb03a81fa0"
		src="https://analytics.aemers.com/umami.js"></script>
</svelte:head>

<Loader />
<slot />
