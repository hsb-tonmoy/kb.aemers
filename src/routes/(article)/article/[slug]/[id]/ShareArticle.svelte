<script>
	import { FacebookSolid, LinkedInSolid, LinkSolid, Share, TwitterSolid } from '$lib/svg';
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let url;

	onMount(() => {
		url = window.location.href;
	});

	export let title = '';

	$: if (title.includes(' ')) title = title.replaceAll(' ', '%20');

	function copyUrl() {
		navigator.clipboard.writeText(url);
	}
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
		<a
			href={'https://twitter.com/intent/tweet/?text=' +
				title +
				'&amp;hashtags=foodis&amp;url=' +
				url}
			target="_blank"
			rel="noopener"
			aria-label="Share on Twitter"
			class="w-4 h-4 lg:w-5 lg:h-5"><TwitterSolid /></a
		>
		<a
			href="https://www.linkedin.com/sharing/share-offsite/?url={url}"
			target="_blank"
			rel="noopener"
			aria-label="Share on LinkedIn"
			class="w-4 h-4 lg:w-5 lg:h-5"><LinkedInSolid /></a
		>
		<button id="link" on:click={copyUrl} class="w-4 h-4 lg:w-5 lg:h-5"><LinkSolid /></button>
	</div>
</div>
