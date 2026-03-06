<script lang="ts">
    import Hero from "@/components/homePage/Hero.svelte";
    // import ImageCarousel from "@/components/homePage/ImageCarousel.svelte";
    import Reviews from "@/components/homePage/Reviews.svelte";
    import Services from "@/components/homePage/Services.svelte";
</script>

<svelte:head>
    <title>MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA</title>
	<meta name="title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta property="og:url" content="https://www.mkbreno.com/" />
	<meta property="og:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta property="twitter:url" content="https://www.mkbreno.com/" />
	<meta property="twitter:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
</svelte:head>

<div>
    <Hero />
    <Services />
    <!-- <ImageCarousel /> -->
    <Reviews />
</div>