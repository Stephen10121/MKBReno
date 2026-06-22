<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import Footer from '@/components/Footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import Header from '@/components/Header.svelte';
	import logo from '$lib/assets/mkblogo2.png';
	import { browser } from '$app/environment';
	import './layout.css';
	import FAQ from '@/components/FAQ.svelte';

	let { children } = $props();

	afterNavigate(() => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			const observerOptions = {
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			};
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('opacity-100', 'translate-y-0');
						entry.target.classList.remove('opacity-0', 'translate-y-10');
					}
				});
			}, observerOptions);

			document.querySelectorAll('section > div').forEach((el) => {
				el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
				observer.observe(el);
			});
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/img/MKBLOGO.png" />
	<link rel="icon" href={logo} />
	<!-- Primary Meta Tags -->

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.mkb-renovations.com/ogimage.png" />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content="https://www.mkb-renovations.com/ogimage.png" />
</svelte:head>

<Toaster theme="light" />

<div class="bg-background font-body-md text-on-background antialiased">
	<Header />
	{@render children()}
	<FAQ />
	<Footer />
</div>
