<script>
	import { goto } from '$app/navigation';
	import { Search } from '$lib/svg';
	import { Input } from 'flowbite-svelte';

	let query = '';

	function handleSearch() {
		goto('/search?query=' + query);
	}
</script>

<form on:submit|preventDefault={handleSearch} class="relative">
	<Input
		bind:value={query}
		id="search"
		class="form-input bg-white pl-6 py-3 md:py-4 placeholder:text-[#BEBEBE] rounded-2xl focus:border-0 focus:ring-0"
		placeholder="Search for a topic..."
	/>
	<button type="submit" class="flex absolute inset-y-0 right-0 items-center pr-6 cursor-pointer">
		<span class="w-4 h-4 text-primary">
			<Search />
		</span>
	</button>
</form>
