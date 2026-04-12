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
	<meta property="twitter:url" content="https://www.mkb-renovations.com/" />
	<meta property="og:url" content="https://www.mkb-renovations.com/" />

    <link rel="canonical" href="https://www.mkb-renovations.com/" />

    <meta name="description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="og:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
	<meta property="twitter:description" content="MKB Renovations - Professional kitchen and bathroom renovation services in Minnehaha, Washington. Quality craftsmanship and exceptional design." />
</svelte:head>

<div>
    <Hero />
    <Services />
    <!-- <ImageCarousel /> -->
    <Reviews />
</div>