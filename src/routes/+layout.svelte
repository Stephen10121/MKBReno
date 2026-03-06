<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/MKBLOGO.png';
    import { afterNavigate } from '$app/navigation';
    import { browser } from '$app/environment';
    import Navbar from '@/components/Navbar.svelte';
    import { page } from '$app/state';
    import FloatingContactButton from '@/components/FloatingContactButton.svelte';
    import ContactModal from '@/components/ContactModal.svelte';
	import { Toaster } from "$lib/components/ui/sonner/index.js";
    import Footer from '@/components/Footer.svelte';
    import { isContactModalOpen } from '@/store';

	let { children } = $props();

	afterNavigate(() => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

</script>

<svelte:head>
	<meta name="description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
    <title>MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA</title>
	<link rel="icon" type="image/png" href="/img/MKBLOGO.png" />
	<link rel="icon" href={logo} />
	<!-- Primary Meta Tags -->
	<meta name="title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.mkbreno.com/" />
	<meta property="og:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta property="og:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="og:image" content="https://www.mkbreno.com/hero.jpg" />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.mkbreno.com/" />
	<meta property="twitter:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta property="twitter:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="twitter:image" content="https://www.mkbreno.com/hero.jpg" />
</svelte:head>

<Toaster theme="light" />

<main class="min-h-screen bg-white">
	<Navbar pathname={page.url.pathname} />
	{@render children()}
	<FloatingContactButton click={() => isContactModalOpen.set(true)} />
	<ContactModal />
	<Footer />
</main>
