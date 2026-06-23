<script lang="ts">
	import heroImg from '@/assets/herohome.webp';
	import kitchenImg from '@/assets/Hero.webp';
	import bathroomImg from '@/assets/bathroom.webp';
	import houseReno from '@/assets/housereno.webp';
	import vancouverReno from '@/assets/vancouverreno.webp';
	import {
		ArrowRight,
		BadgeCheck,
		BrainCog,
		CircleCheck,
		DraftingCompass,
		MapPin,
		Phone,
		Star
	} from '@lucide/svelte';
</script>

<svelte:head>
	<meta property="twitter:title" content="MKB Renovations | Kitchen & Bath Remodeling" />
	<meta property="og:title" content="MKB Renovations | Kitchen & Bath Remodeling" />
	<meta name="title" content="MKB Renovations | Kitchen & Bath Remodeling" />
	<title>MKB Renovations | Kitchen & Bath Remodeling</title>
	<meta property="twitter:url" content="https://www.mkb-renovations.com/" />
	<meta property="og:url" content="https://www.mkb-renovations.com/" />

	<link rel="canonical" href="https://www.mkb-renovations.com/" />

	<meta
		name="description"
		content="MKB Renovations - Professional kitchen and bathroom renovation services in the Pacific Northwest. Quality craftsmanship and exceptional design."
	/>
	<meta
		property="og:description"
		content="MKB Renovations - Professional kitchen and bathroom renovation services in the Pacific Northwest. Quality craftsmanship and exceptional design."
	/>
	<meta
		property="twitter:description"
		content="MKB Renovations - Professional kitchen and bathroom renovation services in the Pacific Northwest. Quality craftsmanship and exceptional design."
	/>
</svelte:head>

<main class="pt-20">
	<!-- Hero Section -->
	<section class="overlow-hidden relative flex min-h-screen items-center">
		<div class="absolute inset-0 z-0">
			<img
				class="h-full w-full object-cover"
				alt="Hero home page"
				src={heroImg}
				fetchpriority="high"
			/>
			<div class="noise absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
		</div>
		<div class="relative z-10 mx-auto w-full max-w-7xl px-grid-margin">
			<div
				class="mt-10 flex max-w-2xl flex-col gap-2 pb-10 text-white sm:mt-0 sm:gap-0 sm:pb-10"
			>
				<span
					class="mb-6 inline-block w-fit max-w-full overflow-hidden rounded-full bg-primary/90 px-4 py-1 font-label-caps text-label-caps text-nowrap text-ellipsis text-on-primary"
					>Licensed & Insured • Clark County & Beyond</span
				>
				<h1
					class="mb-6 font-display-lg-mobile text-display-lg-mobile leading-tight md:font-display-lg md:text-display-lg"
				>
					Pacific Northwest's Trusted <span class="text-primary-fixed"
						>Renovation Team</span
					>
				</h1>
				<p class="mb-10 font-body-lg text-body-lg text-white/90">
					Expert kitchen, bathroom, and whole-house renovations. Where quality
					craftsmanship meets exceptional design, from concept to completion.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/contact"
						class="rounded-lg bg-primary px-8 py-4 text-center text-lg font-bold text-on-primary transition-all hover:bg-primary-container active:scale-95"
					>
						Get Your FREE Estimate
					</a>
				</div>
				<div class="mt-12 flex items-center gap-6">
					<div class="flex flex-col">
						<span class="text-2xl font-bold text-primary-fixed">4.9/5</span>
						<span class="font-label-caps text-label-caps">Google Rating</span>
					</div>
					<div class="h-10 w-px bg-white/20"></div>
					<div class="flex flex-col">
						<span class="text-2xl font-bold text-primary-fixed">10+ Years</span>
						<span class="font-label-caps text-label-caps">Local Expertise</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Value Propositions -->
	<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="mb-16 text-center">
				<h2 class="mb-2 font-headline-md text-headline-md text-primary">Why Choose MKB</h2>
				<p class="mx-auto max-w-xl text-secondary">
					We provide a seamless renovation experience through a disciplined approach and
					attention to detail.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-grid-gutter md:grid-cols-3">
				<!-- Pillar 1 -->
				<div
					class="group rounded-xl border border-gray-subtle bg-white p-10 transition-all hover:shadow-xl"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 transition-transform group-hover:scale-110"
					>
						<DraftingCompass class="text-3xl text-primary" />
					</div>
					<h3 class="mb-4 font-headline-md text-headline-md">Elite Craftsmanship</h3>
					<p class="leading-relaxed text-on-surface-variant">
						Our team brings decades of combined experience, ensuring every cut, joint,
						and finish is executed with architectural precision.
					</p>
				</div>
				<!-- Pillar 2 -->
				<div
					class="group rounded-xl border border-gray-subtle bg-white p-10 transition-all hover:shadow-xl"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 transition-transform group-hover:scale-110"
					>
						<BadgeCheck class="text-3xl text-primary" />
					</div>
					<h3 class="mb-4 font-headline-md text-headline-md">Transparent Process</h3>
					<p class="leading-relaxed text-on-surface-variant">
						No surprises. We provide detailed estimates, clear timelines, and constant
						communication from consultation to final walkthrough.
					</p>
				</div>
				<!-- Pillar 3 -->
				<div
					class="group rounded-xl border border-gray-subtle bg-white p-10 transition-all hover:shadow-xl"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 transition-transform group-hover:scale-110"
					>
						<BrainCog class="text-3xl text-primary" />
					</div>
					<h3 class="mb-4 font-headline-md text-headline-md">Uplifting Design</h3>
					<p class="leading-relaxed text-on-surface-variant">
						We don't just fix homes; we refresh them. Our designs focus on functionality
						and renewed possibility for your daily life.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- Services Overview (Bento Grid Style) -->
	<section class="bg-white py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="mb-12 flex flex-col items-start justify-between sm:items-end md:flex-row">
				<div class="max-w-xl">
					<h2
						class="mb-4 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-headline-md md:text-3xl"
					>
						Tailored Solutions for Your Home
					</h2>
					<p class="text-secondary">
						Specializing in transformations that blend luxury aesthetics with practical
						longevity.
					</p>
				</div>
				<a
					href="/services"
					class="mt-6 border-b-2 border-primary font-bold text-primary transition-all hover:pb-1 md:mt-0"
					>View All Services</a
				>
			</div>
			<div class="grid h-auto grid-cols-1 gap-6 md:h-175 md:grid-cols-12">
				<!-- Kitchens -->
				<div
					class="group relative min-h-150 overflow-hidden rounded-2xl border border-gray-subtle md:col-span-8 md:min-h-fit"
				>
					<img
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						alt="A white/wooden accent kitchen"
						src={kitchenImg}
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"
					></div>
					<div class="absolute bottom-0 left-0 p-8 text-white">
						<h3 class="mb-2 text-2xl font-bold">Kitchen Renovations</h3>
						<p class="mb-4 max-w-md text-white/80">
							Transform your kitchen into a culinary masterpiece with custom cabinetry
							and premium lighting design.
						</p>
						<ul class="flex flex-wrap gap-4 font-label-caps text-label-caps">
							<li class="flex items-center gap-1">
								<CircleCheck class="text-sm text-primary-fixed" /> Custom Cabinetry
							</li>
							<li class="flex items-center gap-1">
								<CircleCheck class="text-sm text-primary-fixed" /> Pro Appliances
							</li>
							<li class="flex items-center gap-1">
								<CircleCheck class="text-sm text-primary-fixed" /> Smart Lighting
							</li>
						</ul>
					</div>
				</div>
				<!-- Bathrooms -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-gray-subtle md:col-span-4"
				>
					<img
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						alt="Bathroom remodel"
						src={bathroomImg}
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"
					></div>
					<div class="absolute bottom-0 left-0 p-8 text-white">
						<h3 class="mb-2 text-2xl font-bold">Bath Remodeling</h3>
						<p class="mb-4 text-white/80">
							Create a comfortable, inviting retreat with custom tile work and modern
							fixtures.
						</p>
						<a
							href="/services#bathroom"
							class="rounded-lg bg-white px-6 py-2 text-sm font-bold text-primary"
							>Bathroom remodeling services</a
						>
					</div>
				</div>
				<!-- Whole House -->
				<div
					class="group relative h-64 min-h-100 overflow-hidden rounded-2xl border border-gray-subtle md:col-span-12 md:min-h-fit"
				>
					<img
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						alt="House Renovation"
						src={houseReno}
					/>
					<div class="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
					<div class="absolute inset-0 flex items-center p-12">
						<div class="max-w-md text-white">
							<h3 class="mb-2 text-2xl font-bold">Whole-House Renovations</h3>
							<p class="mb-6 text-white/80">
								Comprehensive transformations that revitalize every corner of your
								living space.
							</p>
							<a
								href="/contact"
								class="rounded-lg border border-white/40 px-6 py-2 text-sm font-bold transition-colors hover:bg-white/10"
								>Get Consultation</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Showcase Section -->
	<section
		class="overflow-hidden bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<span
						class="mb-4 block font-label-caps text-label-caps font-bold tracking-widest text-primary"
						>FEATURED SHOWCASE</span
					>
					<h2 class="mb-6 font-display-lg-mobile md:font-display-lg">
						The Vancouver Transformation
					</h2>
					<p class="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
						This whole-house project in Vancouver involved expanding the living room to
						create a vibrant, open space concept. We utilized semi-custom gray cabinetry
						to anchor the space, paired with marble surfaces and oak flooring.
					</p>
					<div class="mb-10 grid grid-cols-2 gap-8">
						<div>
							<span class="block text-2xl font-bold text-primary">8 Weeks</span>
							<span class="font-label-caps text-label-caps text-secondary"
								>PROJECT TIMELINE</span
							>
						</div>
						<div>
							<span class="block text-2xl font-bold text-primary"
								>Concept-to-Keys</span
							>
							<span class="font-label-caps text-label-caps text-secondary"
								>FULL MANAGEMENT</span
							>
						</div>
					</div>
					<!-- <button class="rounded-lg bg-primary px-8 py-4 font-bold text-on-primary"
						>View Project Details</button
					> -->
				</div>
				<div class="relative order-1 lg:order-2">
					<div class="relative z-10 aspect-square overflow-hidden rounded-2xl shadow-2xl">
						<img
							class="h-full w-full object-cover"
							alt="Kitchen renovation in vancouver."
							src={vancouverReno}
						/>
					</div>
					<div
						class="absolute -right-10 -bottom-10 z-0 h-64 w-64 rounded-2xl bg-primary opacity-10"
					></div>
					<div
						class="absolute -top-10 -left-10 z-0 h-48 w-48 rounded-full border-2 border-primary/20"
					></div>
				</div>
			</div>
		</div>
	</section>
	<!-- Testimonials -->
	<section class="bg-white py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin text-center">
			<h2 class="mb-4 font-headline-md text-headline-md">What Our Clients Say</h2>
			<p class="mb-16 text-secondary">Real experiences from homeowners in our community.</p>
			<div class="mx-auto max-w-4xl">
				<div class="relative rounded-3xl border border-gray-subtle bg-surface p-12 md:p-20">
					<span class="absolute top-8 left-8 text-7xl text-primary/20">""</span>
					<p
						class="mb-8 font-headline-md text-2xl leading-relaxed text-on-surface italic md:text-3xl"
					>
						"Very satisfied with the work!! We love our new bathroom"
					</p>
					<div class="flex flex-col items-center">
						<div
							class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
						>
							<span class="text-xl font-bold text-primary">S</span>
						</div>
						<h4 class="text-lg font-bold">Sam Pilat</h4>
						<p class="font-label-caps text-label-caps text-secondary">
							BATHROOM RENOVATION • VANCOUVER, WA
						</p>
						<div class="mt-4 flex gap-1 text-primary">
							<Star class="text-primary" />
							<Star class="text-primary" />
							<Star class="text-primary" />
							<Star class="text-primary" />
							<Star class="text-primary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- CTA Section -->
	<section class="px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
		<div
			class="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-20"
		>
			<div
				class="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"
			></div>
			<div class="relative z-10">
				<h2 class="mb-6 font-display-lg-mobile font-bold text-white md:text-5xl">
					Ready to Refresh Your Home?
				</h2>
				<p class="mx-auto mb-10 max-w-2xl text-lg text-white/80">
					Schedule your free on-site estimate today and take the first step toward your
					dream renovation. Serving the entire Vancouver and Portland metro area.
				</p>
				<div class="flex flex-col justify-center gap-6 sm:flex-row">
					<a
						href="/contact"
						class="rounded-lg bg-white px-10 py-5 text-sm font-bold text-primary shadow-lg transition-all hover:bg-surface-container-low md:text-xl"
					>
						Get FREE Estimate
					</a>
					<a
						class="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-white/10 md:text-xl"
						href="tel:3609917646"
					>
						<Phone />
						(360) 991-7646
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div
				class="mb-12 flex flex-col items-start justify-between sm:items-center md:flex-row"
			>
				<div class="text-left">
					<h2
						class="mb-2 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-headline-md md:text-3xl"
					>
						Service Areas
					</h2>
					<p class="text-secondary">Proudly serving local communities in Clark County.</p>
				</div>
				<div class="mx-8 hidden h-px grow bg-outline-variant/30 md:block"></div>
				<div class="mt-2 flex items-center gap-2 font-bold text-primary">
					<MapPin />
					<span>Pacific Northwest</span>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-grid-gutter sm:grid-cols-2 lg:grid-cols-4">
				<a
					class="group rounded-xl border border-gray-subtle bg-white p-8 transition-all hover:border-primary hover:shadow-md"
					href="/service-areas/battle-ground"
				>
					<h3 class="mb-2 text-lg font-bold text-on-surface">Battle Ground, WA</h3>
					<div class="flex items-center gap-1 text-sm font-bold text-primary">
						<span>View Services</span>
						<ArrowRight
							class="text-sm transition-transform group-hover:translate-x-1"
						/>
					</div>
				</a>
				<a
					class="group rounded-xl border border-gray-subtle bg-white p-8 transition-all hover:border-primary hover:shadow-md"
					href="/service-areas/vancouver"
				>
					<h3 class="mb-2 text-lg font-bold text-on-surface">Vancouver, WA</h3>
					<div class="flex items-center gap-1 text-sm font-bold text-primary">
						<span>View Services</span>
						<ArrowRight
							class="text-sm transition-transform group-hover:translate-x-1"
						/>
					</div>
				</a>
				<a
					class="group rounded-xl border border-gray-subtle bg-white p-8 transition-all hover:border-primary hover:shadow-md"
					href="/service-areas/washougal"
				>
					<h3 class="mb-2 text-lg font-bold text-on-surface">Washougal, WA</h3>
					<div class="flex items-center gap-1 text-sm font-bold text-primary">
						<span>View Services</span>
						<ArrowRight
							class="text-sm transition-transform group-hover:translate-x-1"
						/>
					</div>
				</a>
				<a
					class="group rounded-xl border border-gray-subtle bg-white p-8 transition-all hover:border-primary hover:shadow-md"
					href="/service-areas/camas"
				>
					<h3 class="mb-2 text-lg font-bold text-on-surface">Camas, WA</h3>
					<div class="flex items-center gap-1 text-sm font-bold text-primary">
						<span>View Services</span>
						<ArrowRight
							class="text-sm transition-transform group-hover:translate-x-1"
						/>
					</div>
				</a>
			</div>
		</div>
	</section>
</main>
