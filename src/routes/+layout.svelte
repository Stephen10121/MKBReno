<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/MKBLOGO.png';
    import { afterNavigate } from '$app/navigation';
    import { browser } from '$app/environment';

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
</svelte:head>

<main class="min-h-screen bg-white">
	{@render children()}
</main>
