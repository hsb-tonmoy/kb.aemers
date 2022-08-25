<script lang="ts">
	import { DownAngleArrow, EmptyCircle, FilledCircle, RightAngleArrow } from '$lib/svg';
	import { AccordionFlush } from 'flowbite-svelte';
	import { Svroller } from 'svrollbar';
	export let data;

	export let current_article_id: String;

	const icons = {
		down: RightAngleArrow,
		up: DownAngleArrow
	};

	const existsInArray = (array, item) => {
		return array.indexOf(item) > -1;
	};
</script>

{#each data as item}
	<AccordionFlush
		{icons}
		id={item.category.id}
		isOpen={item.articles.find((article) => article.id == current_article_id)}
	>
		<h2 class="text-sm md:text-base text-lighterText font-medium" slot="header">
			{item.category.name}
		</h2>
		<div class="category-container text-lighterText" slot="body">
			<Svroller alwaysVisible={true} width="100%" height="12rem">
				<div class="flex flex-col gap-y-8 md:ml-4 w-full">
					{#each item.articles as article}
						<a
							href={`/article/${article.slug}/${article.id}`}
							class="flex items-center gap-x-2 text-xs md:text-sm px-2"
						>
							<span
								class={`shrink-0 w-4 h-4 ${
									article.id === current_article_id ? 'text-primary' : ''
								}`}
							>
								{#if article.id === current_article_id}
									<FilledCircle />
								{:else}
									<EmptyCircle />
								{/if}
							</span><span class={`${article.id === current_article_id ? 'text-primary' : ''}`}
								>{article.title}</span
							>
						</a>
					{/each}
				</div>
			</Svroller>
		</div>
	</AccordionFlush>
{/each}

<style lang="postcss">
	.category-container {
		--svrollbar-track-width: 8px;
		--svrollbar-thumb-width: 6px;
		--svrollbar-track-radius: 5px;
		--svrollbar-thumb-opacity: 1;
		--svrollbar-track-background: #e3d9ff;
		--svrollbar-thumb-background: #7443ff;
	}
</style>
