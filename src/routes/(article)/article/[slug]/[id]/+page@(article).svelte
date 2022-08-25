<script>
	export let data;
	import RightSidebar from '$lib/layout/article/rightsidebar/RightSidebar.svelte';
	import { Clock } from '$lib/svg';
	import { getAssetURL } from '$lib/utils';
	import NavigationBox from './NavigationBox.svelte';
	import ShareArticle from './ShareArticle.svelte';
</script>

<svelte:head>
	<title>Aemers Knowledgebase - {data.article.title}</title>
</svelte:head>

<div class="flex">
	<main class="content-body">
		<NavigationBox category={data.article.category} />
		<div class="w-11/12">
			<h1 class="font-bold text-4xl leading-normal">{data.article.title}</h1>
		</div>
		<div class="flex items-center justify-between mt-3">
			<div class="flex items-center gap-x-1">
				<span class="w-5 h-5 text-primary text-sm"><Clock /></span><span
					class="text-lighterText italic">Published on {data.article.published_on}</span
				>
			</div>
			<ShareArticle />
		</div>
		<h3 class="font-bold text-3xl mt-10 mb-4">Overview</h3>
		<p class="leading-normal mb-6">{data.article.summary}</p>
		<img
			class="w-[80rem] h-[40rem] object-cover"
			src={getAssetURL(data.article.featured_image)}
			alt={data.article.title}
		/>
		<div class="mt-10">{data.article.content}</div>
	</main>
	<div class="sticky right-0 top-0 w-[25%] shrink-0">
		<RightSidebar
			level={data.article.level}
			time_sensitive={data.article.time_sensitive}
			financial={data.article.financial}
			legal={data.article.legal}
			tags={data.article.tags}
			discussion_url={data.article.discussion_url}
		/>
	</div>
</div>

<style lang="postcss">
	.content-body {
		@apply px-20 py-10;
		box-shadow: 0px 4px 42px rgba(95, 94, 94, 0.25);
	}
</style>
