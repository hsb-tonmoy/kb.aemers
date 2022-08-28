<script>
	import { Mail } from '$lib/svg';
	import { Iconinput } from 'flowbite-svelte';

	const handleSubmit = async (e) => {
		const req = await fetch(`/subscribe?email=${e.target[0].value}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: e.target[0].value
			})
		});
		const response = await req.json();
	};
</script>

<footer
	class="flex flex-wrap items-center gap-y-12 bg-[#F8F8F8] px-4 md:px-12 2xl:px-40 py-10 md:py-20"
>
	<div class="flex flex-col gap-y-4 brand w-full md:w-[40%] pr-10 xl:pr-[10%]">
		<img class="w-[30vw] md:w-[20vw] xl:w-[8vw]" src="/logo.png" alt="Aemers LLC" />
		<p class="text-lightText text-sm xl:text-sm text-justify leading-relaxed">
			Aemers stems from “amare” – the Latin for “love”. Every service we craft at Aemers, we glue
			that with genuine love. Likewise, the only phrase our fans use to portray our packages, is
			they ‘just loved it’.
		</p>
	</div>
	<div
		class="grid grid-cols-2 grid-rows-3 gap-2 xl:gap-4 text-sm xl:text-base text-[#2C2C2C] w-full md:w-[30%]"
	>
		<a href="https://aemers.com/" target="_blank">Home</a>
		<a href="https://aemers.com/services" target="_blank">Services</a>
		<a href="https://aemers.com/about" target="_blank">About Us</a>

		<a href="https://aemers.com/our-mission/" target="_blank">Our Mission</a>
		<a href="https://aemers.com/terms-conditions/" target="_blank">Terms & Conditions</a>
		<a href="https://aemers.com/privacy-policy/" target="_blank">Privacy Policy</a>
	</div>
	<div class="flex flex-col gap-y-4 w-full md:w-[30%]">
		<h6 class="text-[#2C2C2C] font-bold text-lg">Blogs & Newsletter</h6>
		<p class="text-lightText text-sm">Subscribe to stay updated with all the latest blogs</p>
		<form on:submit|preventDefault={handleSubmit} class="">
			<Iconinput
				noBorder
				id="email"
				type="email"
				icon={Mail}
				noBorderInputClass="form-input bg-transparent w-full rounded-2xl border border-[#C7C7C7] focus:border-primary focus:ring-primary pl-8 py-3"
				placeholder="Enter your email address"
			/>
			<button class="mt-4 bg-primary w-full text-white font-bold text-base py-3 rounded-xl"
				>Subscribe</button
			>
		</form>
	</div>
</footer>
