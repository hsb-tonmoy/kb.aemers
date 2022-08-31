<script lang="ts">
	import { getAssetURL, truncateWords } from '$lib/utils';
	export let title: String, id: String, slug: String, summary: String, image: String;
</script>

<div class="flex flex-col gap-y-4 bg-[#FBFAFF] p-6 border border-borderColor rounded-2xl">
	<a href={`/article/${slug}/${id}`}
		><img
			class="object-cover h-32 md:h-48 w-full rounded-xl"
			src={getAssetURL(image, '380')}
			alt="blog-img"
		/></a
	>
	<h6 class="text-secondary font-bold text-lg">
		<a href={`/article/${slug}/${id}`}>{title}</a>
	</h6>
	<p class="text-lighterText text-sm leading-normal">
		{truncateWords(summary, 20)}
	</p>
</div>
