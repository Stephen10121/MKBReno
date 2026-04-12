<script lang="ts">
    import FloatingContactButton from '@/components/FloatingContactButton.svelte';
	import { Toaster } from "$lib/components/ui/sonner/index.js";
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
		}
	});

	let token = $state("");

	onMount(() => {
		try {
			loadScript("https://challenges.cloudflare.com/turnstile/v0/api.js").then(() => {
				//@ts-ignore
				turnstileWidgetId.set(turnstile.render('#turnstile-container', {
					sitekey: data.turnstileSiteKey,
					callback: function(token2: string) {
						token = token2;
					},
				}));
			});
		} catch (err) {
			console.log(err);
		}

		return () => {
			const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');

			if (existingScript) {
				document.head.removeChild(existingScript);
			}
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

<main class="min-h-screen bg-white">
	<div id="turnstile-container"></div>
	<!-- <Navbar pathname={page.url.pathname} /> -->
	<Header />
	<div class="h-20 bg-[#181a1d]"></div>
	{@render children()}
	{#if $topHeaderStatus === "hide"}
		<FloatingContactButton click={() => isContactModalOpen.set(true)} />
	{/if}
	<ContactModal turnstileSiteToken={token} />
	<Footer />
</main>
