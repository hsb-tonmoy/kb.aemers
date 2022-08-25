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

<div class="flex bg-white transition-all ease-in-out duration-500">
	<main class="prose max-w-none content-body z-[500]">
		<NavigationBox category={data.article.category} />
		<div class="lg:w-11/12">
			<h1 class="font-bold text-2xl md:text-3xl lg:text-4xl leading-normal">
				{data.article.title}
			</h1>
		</div>
		<div class="flex flex-wrap gap-y-3 items-center justify-between mt-1 lg:mt-3">
			<div class="flex items-center gap-x-1 text-xs md:text-sm lg:text-base">
				<span class="w-5 h-5 text-primary"><Clock /></span><span class="text-lighterText italic"
					>Published on {data.article.published_on}</span
				>
			</div>
			<ShareArticle />
		</div>
		<div class="flex xl:hidden mt-6 not-prose">
			<RightSidebar
				level={data.article.level}
				time_sensitive={data.article.time_sensitive}
				financial={data.article.financial}
				legal={data.article.legal}
				tags={data.article.tags}
				discussion_url={data.article.discussion_url}
			/>
		</div>
		<h3 class="font-bold text-xl md:text-2xl lg:text-3xl mt-10 mb-4">Overview</h3>
		<p class="mb-6">{data.article.summary}</p>
		<img
			class="w-[80rem] h-[40rem] object-cover"
			src={getAssetURL(data.article.featured_image)}
			alt={data.article.title}
		/>
		<article class="mt-10">{@html data.article.content}</article>
	</main>
	<div
		class="hidden xl:flex sticky right-0 top-0 w-[30%] 2xl:w-[25%] shrink-0 self-start max-h-screen z-[400]"
	>
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
		@apply px-6 py-4 md:px-20 md:py-10;
		box-shadow: 0px 4px 42px rgba(95, 94, 94, 0.25);
	}
</style>
