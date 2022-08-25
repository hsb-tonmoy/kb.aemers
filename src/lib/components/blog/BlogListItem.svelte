<script lang="ts">
	import { getAssetURL } from '$lib/utils';
	export let title: String, id: String, slug: String, image: String;
</script>

<div style="overflow-wrap: break-word;">
	<a href={`/article/${slug}/${id}`} class="flex items-center gap-x-4">
		<img
			class="shrink-0 object-cover w-20 h-10 md:w-24 md:h-12 xl:w-28 xl:h-14 rounded-lg"
			src={getAssetURL(image)}
			alt="blog-img"
		/>
		<h6 class="text-black text-sm xl:text-base">{title}</h6>
	</a>
</div>
