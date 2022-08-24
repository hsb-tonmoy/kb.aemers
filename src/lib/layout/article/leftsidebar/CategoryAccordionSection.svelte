<script>
	import { EmptyCircle, FilledCircle } from '$lib/svg';
	import { AccordionFlush } from 'flowbite-svelte';
	export let data;
</script>

{#each data as item}
	<AccordionFlush id={item.category.id}>
		<h2 slot="header">{item.category.name}</h2>
		<div slot="body">
			<div class="flex flex-col">
				{#each item.articles as article}
					<div class="flex">
						<span class="w-4 h-4 text-primary"><EmptyCircle /></span><span class="text-lighterText"
							>{article.title}</span
						>
					</div>
				{/each}
			</div>
		</div>
	</AccordionFlush>
{/each}
