<script>
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import Logo from './Logo.svelte';
</script>

<Navbar
	let:hidden
	let:toggle
	fluid={false}
	navClass={'navBar bg-white px-6 py-4 w-full z-[1000]'}
	navDivClass={'flex flex-wrap items-center justify-between w-full'}
>
	<NavBrand href="/">
		<Logo />
	</NavBrand>

	<NavHamburger on:click={toggle} />

	<NavUl
		{hidden}
		ulClass={'flex flex-col items-start justify-center gap-y-4 mt-4 md:mt-0 md:flex-row md:items-center md:gap-x-10 2xl:text-lg text-secondary'}
	>
		<NavLi nonActiveClass={'menu-item'} href="https://aemers.com/services">Services</NavLi>
		<NavLi nonActiveClass={'menu-item'} activeClass={'menu-tiem-active'} href="/" active={true}
			>Knowledgebase</NavLi
		>
		<NavLi nonActiveClass={'menu-item'} href="https://aemers.com/contact">About Us</NavLi>
		<button
			class="bg-primary hover:bg-primaryDarker text-white font-bold rounded-3xl px-6 py-1 border-2 border-primary"
			>Go to App</button
		>
	</NavUl>
</Navbar>

<style global lang="postcss">
	.navBar {
		box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
	}

	.menu-item {
		@apply hover:text-primary;
	}

	.menu-tiem-active {
		@apply text-primary font-bold;
	}
</style>
