<script>
	import { EmailSolid, FacebookSolid, LinkedInSolid, LinkSolid, Share } from '$lib/svg';
	import { onMount } from 'svelte';

	let url;

	onMount(() => {
		url = window.location.href;
	});

	export let title = '';

	$: if (title.includes(' ')) title = title.replaceAll(' ', '%20');
</script>

<div class="flex items-center gap-x-2">
	<span class="w-3 h-3 lg:w-4 lg:h-4 text-primary"><Share /></span>
	<div class="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-base text-secondary">
		Share to:
		<a
			href={'https://facebook.com/sharer/sharer.php?u=' + url}
			target="_blank"
			rel="noopener"
			aria-label="Share on Facebook"
			class="w-4 h-4 lg:w-5 lg:h-5"><FacebookSolid /></a
		>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><LinkedInSolid /></span>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><EmailSolid /></span>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><LinkSolid /></span>
	</div>
</div>
