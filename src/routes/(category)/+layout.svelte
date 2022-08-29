<script>
	import Footer from '$lib/layout/footer/Footer.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	export let data;
	const categoryName = data.articles[0].category.name;
</script>

<svelte:head>
	<title>Aemers - {categoryName}</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex flex-col flex-1 w-full">
		<section class="flex flex-col justify-center text-center bg-primary w-full h-[25vh]">
			<h2 class="text-borderColor font-bold text-lg md:text-2xl 2xl:text-3xl m-0">
				<a href="/">Knowledgebase/</a>
			</h2>
			<h1 class="text-white font-bold text-3xl md:text-6xl 2xl:text-7xl mt-2">{categoryName}</h1>
		</section>
		<slot />
	</div>
	<Footer />
</div>
