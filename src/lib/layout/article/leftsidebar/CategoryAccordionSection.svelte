<script lang="ts">
	import { DownAngleArrow, EmptyCircle, FilledCircle, RightAngleArrow } from '$lib/svg';
	import { AccordionFlush } from 'flowbite-svelte';
	export let data;

	export let current_article_id: String;

	const icons = {
		down: RightAngleArrow,
		up: DownAngleArrow
	};
</script>

{#each data as item}
	<AccordionFlush {icons} id={item.category.id}>
		<h2 class="text-lighterText font-medium" slot="header">{item.category.name}</h2>
		<div class="text-lighterText" slot="body">
			<div class="flex flex-col gap-y-8 ml-4">
				{#each item.articles as article}
					<a href={`/article/${article.slug}/${article.id}`} class="flex items-center gap-x-2">
						<span
							class={`shrink-0 w-4 h-4 ${article.id === current_article_id ? 'text-primary' : ''}`}
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
		</div>
	</AccordionFlush>
{/each}
