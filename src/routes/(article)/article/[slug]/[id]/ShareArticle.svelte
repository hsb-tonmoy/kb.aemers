<script>
	import { EmailSolid, FacebookSolid, LinkedInSolid, LinkSolid, Share } from '$lib/svg';
</script>

<div class="flex items-center gap-x-2">
	<span class="w-3 h-3 lg:w-4 lg:h-4 text-primary"><Share /></span>
	<div class="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-base text-secondary">
		Share to:
		<span class="w-4 h-4 lg:w-5 lg:h-5"><FacebookSolid /></span>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><LinkedInSolid /></span>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><EmailSolid /></span>
		<span class="w-4 h-4 lg:w-5 lg:h-5"><LinkSolid /></span>
	</div>
</div>
