<script lang="ts">
    // import ImageCarousel from "@/components/homePage/ImageCarousel.svelte";
    import Services from "@/components/homePage/Services.svelte";
    import Reviews from "@/components/homePage/Reviews.svelte";
    import Hero from "@/components/homePage/Hero.svelte";
</script>

<svelte:head>
	<meta property="twitter:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta property="og:title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
	<meta name="title" content="MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA" />
    <title>MKB Renovations - Kitchen & Bathroom Renovations | Minnehaha, WA</title>
	<meta property="twitter:url" content="https://www.mkbreno.com/" />
	<meta property="og:url" content="https://www.mkbreno.com/" />
</svelte:head>

<div>
    <Hero />
    <Services />
    <!-- <ImageCarousel /> -->
    <Reviews />
</div>