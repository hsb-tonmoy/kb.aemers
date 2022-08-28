<script>
	import { navigating } from '$app/stores';
	import Footer from '$lib/layout/footer/Footer.svelte';
	import '../app.postcss';

	import Loader from '$lib/loading/Loader.svelte';
	import { loading } from '$lib/loading/loading';

	$: loading.setNavigate(!!$navigating);
</script>

<Loader />
<slot />
<Footer />
