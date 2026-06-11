<script lang="ts">
	import FloatingContactButton from '@/components/FloatingContactButton.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import ContactModal from '@/components/ContactModal.svelte';
	import Footer from '@/components/Footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import Header from '@/components/Header.svelte';
	import { isContactModalOpen, topHeaderStatus, turnstileWidgetId } from '@/store';
	import logo from '$lib/assets/mkblogo2.png';
	import { browser } from '$app/environment';
	import './layout.css';
	import { onMount } from 'svelte';
	import { loadScript } from '@/utils.js';

	let { children, data } = $props();

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

	let token = $state('');

	onMount(() => {
		try {
			loadScript('https://challenges.cloudflare.com/turnstile/v0/api.js').then(() => {
				//@ts-ignore
				turnstileWidgetId.set(
					//@ts-ignore
					turnstile.render('#turnstile-container', {
						sitekey: data.turnstileSiteKey,
						callback: function (token2: string) {
							token = token2;
						}
					})
				);
			});
		} catch (err) {
			console.log(err);
		}

		return () => {
			const existingScript = document.querySelector(
				'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
			);

			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
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
	<div id="turnstile-container"></div>
	<Header />
	{@render children()}
	{#if $topHeaderStatus === 'hide'}
		<FloatingContactButton click={() => isContactModalOpen.set(true)} />
	{/if}
	<ContactModal turnstileSiteToken={token} />
	<Footer />
</div>
