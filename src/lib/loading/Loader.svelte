<script>
	import { loading } from './loading';
	import Spinner from './Spinner.svelte';

	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				$loading.status = 'LOADING';
			}
		}, 200);
	}
</script>

{#if $loading.status === 'LOADING'}
	<div class="overlay">
		<Spinner />
	</div>
	{#if $loading.message}
		<p>{$loading.message}</p>
	{/if}
{/if}

<style lang="postcss">
	.overlay {
		@apply flex justify-center items-center absolute top-0 right-0 left-0 w-full h-full bg-white/60 z-[10000];
	}
</style>
