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

	let { children } = $props();

	afterNavigate(() => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

	let isContactModalOpen = $state(false);
</script>

<svelte:head>
	<meta name="description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
    <title>MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA</title>
	<link rel="icon" type="image/png" href="/img/MKBLOGO.png" />
	<link rel="icon" href={logo} />
</svelte:head>

<Toaster theme="light" />

<main class="min-h-screen bg-white">
	<Navbar pathname={page.url.pathname} />
	{@render children()}
	<FloatingContactButton click={() => isContactModalOpen = true} />
	<ContactModal bind:isContactModalOpen={isContactModalOpen} />
	<Footer />
</main>
