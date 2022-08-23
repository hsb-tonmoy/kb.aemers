<script lang="ts">
	import { getAssetURL } from '$lib/utils';
	export let title: String, slug: String, image: String;
</script>

<div style="overflow-wrap: break-word;">
	<a href={`/article/${slug}`} class="flex items-center gap-x-4">
		<img
			class="object-cover w-20 h-10 md:w-28 md:h-14 rounded-lg"
			src={getAssetURL(image)}
			alt="blog-img"
		/>
		<h6 class="text-black text-sm md:text-base">{title}</h6>
	</a>
</div>
