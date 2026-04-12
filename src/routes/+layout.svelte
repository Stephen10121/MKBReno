<script lang="ts">
    import FloatingContactButton from '@/components/FloatingContactButton.svelte';
	import { Toaster } from "$lib/components/ui/sonner/index.js";
    import ContactModal from '@/components/ContactModal.svelte';
    import Footer from '@/components/Footer.svelte';
    import { afterNavigate } from '$app/navigation';
    import Header from '@/components/Header.svelte';
    import { isContactModalOpen, topHeaderStatus } from '@/store';
	import logo from '$lib/assets/mkblogo2.png';
    import { browser } from '$app/environment';
	import './layout.css';

	let { children } = $props();

	afterNavigate(() => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

</script>

<svelte:head>
	<meta name="description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<link rel="icon" type="image/png" href="/img/MKBLOGO.png" />
	<link rel="icon" href={logo} />
	<!-- Primary Meta Tags -->

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="og:image" content="https://www.mkbreno.com/hero.jpg" />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="twitter:image" content="https://www.mkbreno.com/hero.jpg" />
</svelte:head>

<Toaster theme="light" />

<main class="min-h-screen bg-white">
	<!-- <Navbar pathname={page.url.pathname} /> -->
	<Header />
	<div class="h-20 bg-[#181a1d]"></div>
	{@render children()}
	{#if $topHeaderStatus === "hide"}
		<FloatingContactButton click={() => isContactModalOpen.set(true)} />
	{/if}
	<ContactModal />
	<Footer />
</main>
