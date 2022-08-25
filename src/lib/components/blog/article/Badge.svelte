<script>
	export let badge_bg_color = '';
	export let badge_text_color = '';
	export let badge_text = '';
	export let badge_icon;
	export let font_weight = 700;
</script>

<div
	style={`background-color: ${badge_bg_color}; color: ${badge_text_color}; font-weight: ${font_weight};`}
	class="flex items-center gap-x-2 px-4 py-2 rounded-lg"
>
	{#if badge_icon}
		<span class="w-5 h-5">
			<svelte:component this={badge_icon} />
		</span>
	{/if}
	{badge_text}
</div>
