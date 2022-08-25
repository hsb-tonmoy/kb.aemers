<script lang="ts">
	import Badge from '$lib/components/blog/article/Badge.svelte';
	import { Alarm, FacebookColor, Fire, GraduationCap, Money, Scale } from '$lib/svg';
	export let level: String,
		time_sensitive: Boolean,
		financial: Boolean,
		legal: Boolean,
		tags: Array<string>,
		discussion_url: String;
</script>

<aside
	class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:flex flex-col xl:gap-y-12 px-6 py-4 xl:py-12 xl:px-12 2xl:px-16 w-full xl:h-full bg-bgColor xl:bg-white"
>
	<div class="">
		<h6>Level of Knowledge</h6>
		<div
			class="flex items-center xl:justify-between gap-x-6 xl:px-10 xl:py-4 bg-[#F7F4FF] rounded-lg text-sm md:text-base"
		>
			<div
				class={`flex flex-col items-center ${
					level === 'undergrad' ? 'text-primary font-bold' : 'text-[#CBB9FF]'
				} `}
			>
				<span class={`w-8 h-8 md:w-12 md:h-12`}><GraduationCap /></span>
				<span class="">Undergrad</span>
			</div>
			<div
				class={`flex flex-col items-center ${
					level === 'grad' ? 'text-primary font-bold' : 'text-[#CBB9FF]'
				} `}
			>
				<span class={`w-8 h-8 md:w-12 md:h-12`}><GraduationCap /></span>
				<span class="">Graduate</span>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap gap-3">
		<h6>Label</h6>
		{#if time_sensitive}
			<Badge
				badge_text="Time Sensitive"
				badge_icon={Alarm}
				badge_bg_color="#E4F7FF"
				badge_text_color="#00A6ED"
			/>
		{/if}
		<Badge badge_text="Hot" badge_icon={Fire} badge_bg_color="#FFF4F1" badge_text_color="#F6511D" />
		{#if financial}
			<Badge
				badge_text="Financial Topic"
				badge_icon={Money}
				badge_bg_color="#E9FFFE"
				badge_text_color="#00A69C"
			/>
		{/if}
		{#if legal}
			<Badge
				badge_text="Legal Topic"
				badge_icon={Scale}
				badge_bg_color="#FFF4F8"
				badge_text_color="#E55381"
			/>
		{/if}
	</div>
	<div class="flex flex-wrap gap-3">
		<h6>Tags</h6>
		<div class="grid grid-cols-2 gap-2">
			{#each tags as tag}
				<Badge
					badge_text={tag}
					badge_bg_color="#F5F5F5"
					badge_text_color="#727272"
					font_weight={'400'}
				/>
			{/each}
		</div>
	</div>
	<div class="">
		<h6>Public Discussion</h6>
		<button class="px-4 py-2 rounded-lg font-bold bg-[#EEF5FF] text-[#1877F2] text-sm"
			><a class="flex items-center gap-x-1" href={discussion_url} target="_blank"
				><span class="w-7 h-7"><FacebookColor /></span>Join Facebook Disucssion</a
			></button
		>
	</div>
</aside>

<style lang="postcss">
	h6 {
		@apply w-full font-bold text-base md:text-lg xl:text-xl mb-4;
	}
</style>
