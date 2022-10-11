<script>
	import RightSidebar from '$lib/layout/article/rightsidebar/RightSidebar.svelte';
	import { Clock } from '$lib/svg';
	import { convertDate, getAssetURL } from '$lib/utils';
	import { MetaTags } from 'svelte-meta-tags';
	import NavigationBox from './NavigationBox.svelte';
	import ShareArticle from './ShareArticle.svelte';

	export let data;

	$: previousAndNextArticles = {
		previous: {},
		next: {}
	};

	$: {
		let currentCategoryID = data.article.category.id;
		let currentCategoryIndex = data.categories.findIndex(
			(item) => item.category.id === currentCategoryID
		);
		let currentArticleIndex = data.categories[currentCategoryIndex].articles.findIndex(
			(item) => item.id == data.article.id
		);

		if (currentArticleIndex === 0) {
			if (data.categories[currentCategoryIndex - 1]) {
				previousAndNextArticles.previous =
					data.categories[currentCategoryIndex - 1].articles[
						data.categories[currentCategoryIndex - 1].articles.length - 1
					];
			} else {
				previousAndNextArticles.previous = {};
			}
		} else {
			previousAndNextArticles.previous =
				data.categories[currentCategoryIndex].articles[currentArticleIndex - 1];
		}

		if (currentArticleIndex === data.categories[currentCategoryIndex].articles.length - 1) {
			if (data.categories[currentCategoryIndex + 1]) {
				previousAndNextArticles.next = data.categories[currentCategoryIndex + 1].articles[0];
			} else {
				previousAndNextArticles.next = {};
			}
		} else {
			previousAndNextArticles.next =
				data.categories[currentCategoryIndex].articles[currentArticleIndex + 1];
		}
	}
</script>

<MetaTags
	title={data.article.og_title || data.article.title}
	titleTemplate="%s | Aemers Knowledgebase"
	description={data.article.og_description || data.article.summary}
	openGraph={{
		url: `https://kb.aemers.com/article/${data.article.slug}/${data.article.id}`,
		title: data.article.og_title || data.article.title,
		description: data.article.description || data.article.summary,
		images: [
			{
				url: getAssetURL(data.article.og_image) || getAssetURL(data.article.featured_image),
				width: 1200,
				height: 630,
				alt: data.article.og_title || data.article.title
			}
		],
		site_name: 'Aemers Knowledgebase'
	}}
	twitter={{
		site: '@aemers',
		cardType: 'summary_large_image',
		title: data.article.og_title || data.article.title,
		description: data.article.description || data.article.summary,
		image: getAssetURL(data.article.og_image) || getAssetURL(data.article.featured_image),
		imageAlt: data.article.og_title || data.article.title
	}}
/>

<div class="flex bg-white transition-all ease-in-out duration-500">
	<main class="z-[500]">
		<div class="max-w-none prose content-body">
			<NavigationBox
				bind:previous={previousAndNextArticles.previous}
				bind:next={previousAndNextArticles.next}
				category={data.article.category}
			/>
			<div class="lg:w-11/12">
				<h1 class="font-bold text-2xl md:text-3xl lg:text-4xl leading-normal">
					{data.article.title}
				</h1>
			</div>
			<div class="flex flex-wrap gap-y-3 items-center justify-between mt-1 lg:mt-3">
				<div class="flex items-center gap-x-1 text-xs md:text-sm lg:text-base">
					<span class="w-5 h-5 text-primary"><Clock /></span><span class="text-lighterText italic"
						>Published on {convertDate(data.article.published_on)}</span
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
			{#if data.article.summary}
				<h3 class="font-bold text-xl md:text-2xl lg:text-3xl mt-10 mb-4">Overview</h3>
				<p class="mb-6">{data.article.summary}</p>
			{/if}
			<img
				class="w-[80rem] h-[40rem] object-cover"
				src={getAssetURL(data.article.featured_image)}
				alt={data.article.title}
			/>
			<article class="mt-10">{@html data.article.content}</article>
		</div>
		<div id="divider" class="my-20 h-px bg-dividerColor" />
	</main>
	<div class="hidden xl:flex sticky right-0 top-0 w-[30%] 2xl:w-[25%] shrink-0 z-[400]">
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
