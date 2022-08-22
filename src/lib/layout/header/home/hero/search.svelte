<script>
	import { Input } from 'flowbite-svelte';
	import Search from '$lib/svg/Search.svelte';
</script>

<div class="relative">
	<Input
		id="search"
		class="form-input bg-white pl-6 py-4 placeholder:text-[#BEBEBE] rounded-2xl focus:border-0 focus:ring-0"
		placeholder="Search for a topic..."
	/>
	<div class="flex absolute inset-y-0 right-0 items-center pr-6 cursor-pointer">
		<span class="w-4 h-4 text-primary">
			<Search />
		</span>
	</div>
</div>
