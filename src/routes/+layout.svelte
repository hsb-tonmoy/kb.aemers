<script>
	import { navigating } from '$app/stores';
	import '../app.postcss';

	import Loader from '$lib/loading/Loader.svelte';
	import { loading } from '$lib/loading/loading';

	$: loading.setNavigate(!!$navigating);
</script>

<Loader />
<slot />
