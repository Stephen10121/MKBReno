<script lang="ts">
	import pnw from '@/assets/pnw.webp';
	import servingHere from '@/assets/servinghere.webp';
	import {
		ArrowRight,
		BadgeCheck,
		Hammer,
		House,
		MapPin,
		Mountain,
		Phone,
		Star,
		Tractor,
		Users,
		Waves
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Service Areas - MKB Renovations</title>
	<meta name="title" content="Service Areas - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/service-areas" />
	<meta property="og:title" content="Service Areas - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/service-areas" />
	<meta property="twitter:title" content="Service Areas - MKB Renovations" />
</svelte:head>

<main class="pt-20">
	<!-- Hero Section -->
	<section class="relative flex h-153.5 items-center overflow-hidden">
		<div class="absolute inset-0 z-0">
			<div
				class="absolute inset-0 z-10 bg-linear-to-r from-background via-background/80 to-transparent"
			></div>
			<img class="h-full w-full object-cover" alt="PNW landscape" src={pnw} />
		</div>
		<div class="relative z-20 mx-auto w-full max-w-7xl px-grid-margin">
			<div class="max-w-2xl">
				<span
					class="mb-4 inline-block rounded-full bg-primary-fixed/30 px-3 py-1 font-label-caps text-label-caps text-primary"
					>PACIFIC NORTHWEST SPECIALISTS</span
				>
				<h1
					class="mb-6 font-display-lg text-display-lg-mobile leading-tight md:text-display-lg"
				>
					Service Areas
				</h1>
				<p class="mb-8 text-body-lg text-secondary">
					Bringing expert craftsmanship and stress-free transformations to homes across
					the Vancouver, WA and Portland, OR metro areas.
				</p>
				<div class="flex flex-wrap gap-4">
					<div class="flex items-center gap-2 font-bold text-primary">
						<MapPin />
						<span>Pacific Northwest</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Cities Served Bento Grid -->
	<section class="bg-surface px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 font-headline-md text-headline-md">Cities We Proudly Serve</h2>
				<div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
			</div>
			<div class="grid grid-cols-1 gap-grid-gutter md:grid-cols-2 lg:grid-cols-4">
				<!-- City: Vancouver -->
				<div
					class="group rounded-xl border border-gray-subtle bg-surface-white p-8 transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
					>
						<House />
					</div>
					<h3 class="mb-3 font-headline-md text-headline-md">Vancouver, WA</h3>
					<p class="mb-6 text-secondary">
						Quality kitchen and bathroom renovations in the heart of Vancouver and Clark
						County.
					</p>
					<a
						class="flex items-center gap-2 font-bold text-primary hover:underline"
						href="/service-areas/vancouver"
					>
						See Local Projects
						<ArrowRight class="text-sm" />
					</a>
				</div>
				<!-- City: Camas -->
				<div
					class="group rounded-xl border border-gray-subtle bg-surface-white p-8 transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
					>
						<Mountain />
					</div>
					<h3 class="mb-3 font-headline-md text-headline-md">Camas, WA</h3>
					<p class="mb-6 text-secondary">
						Luxury transformations for homes overlooking the scenic hills and lakes of
						Camas.
					</p>
					<a
						class="flex items-center gap-2 font-bold text-primary hover:underline"
						href="/service-areas/camas"
					>
						View City Page
						<ArrowRight class="text-sm" />
					</a>
				</div>
				<!-- City: Battle Ground -->
				<div
					class="group rounded-xl border border-gray-subtle bg-surface-white p-8 transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
					>
						<Tractor />
					</div>
					<h3 class="mb-3 font-headline-md text-headline-md">Battle Ground, WA</h3>
					<p class="mb-6 text-secondary">
						Expert whole-house remodels tailored for the growing community of Battle
						Ground.
					</p>
					<a
						class="flex items-center gap-2 font-bold text-primary hover:underline"
						href="/service-areas/battle-ground"
					>
						See Local Projects
						<ArrowRight class="text-sm" />
					</a>
				</div>
				<!-- City: Washougal -->
				<div
					class="group rounded-xl border border-gray-subtle bg-surface-white p-8 transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
					>
						<Waves />
					</div>
					<h3 class="mb-3 font-headline-md text-headline-md">Washougal, WA</h3>
					<p class="mb-6 text-secondary">
						Innovative design solutions for residential properties across the Washougal
						riverfront.
					</p>
					<a
						class="flex items-center gap-2 font-bold text-primary hover:underline"
						href="/service-areas/washougal"
					>
						View City Page
						<ArrowRight class="text-sm" />
					</a>
				</div>
			</div>
		</div>
	</section>
	<!-- Map Section / Interactive Placeholder -->
	<section class="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="flex flex-col items-center gap-16 lg:flex-row">
				<div class="w-full lg:w-1/2">
					<div
						class="relative aspect-square overflow-hidden rounded-2xl border-8 border-surface-white p-10 shadow-2xl"
					>
						<img
							class="h-full w-full object-cover"
							alt="Serving here"
							src={servingHere}
						/>
						<div
							class="absolute top-4 left-4 rounded-lg border border-gray-subtle bg-surface-white/90 p-4 shadow-md backdrop-blur-sm"
						>
							<div class="flex items-center gap-2 font-bold text-primary">
								<Star class="h-4 w-4" />
								<span class="font-label-caps text-label-caps">LOCAL HUB</span>
							</div>
							<p class="mt-1 text-[10px] text-secondary">
								Clark County &amp; Portland Metro
							</p>
						</div>
					</div>
				</div>
				<div class="w-full lg:w-1/2">
					<h2 class="mb-8 font-headline-md text-headline-md">
						Why Choose MKB for Your Local Project?
					</h2>
					<div class="space-y-8">
						<div class="flex gap-4">
							<div class="shrink-0 text-primary">
								<BadgeCheck />
							</div>
							<div>
								<h4 class="mb-1 font-bold">PNW Building Code Expertise</h4>
								<p class="text-secondary">
									We have navigated countless local permit processes in both
									Washington and Oregon, ensuring your project is fully compliant
									and built to last in our unique climate.
								</p>
							</div>
						</div>
						<div class="flex gap-4">
							<div class="shrink-0 text-primary">
								<Users />
							</div>
							<div>
								<h4 class="mb-1 font-bold">Community-First Approach</h4>
								<p class="text-secondary">
									As local residents ourselves, we value the trust of our
									neighbors. Our reputation is built on transparent communication
									and the highest quality craftsmanship.
								</p>
							</div>
						</div>
						<div class="flex gap-4">
							<div class="shrink-0 text-primary">
								<Hammer />
							</div>
							<div>
								<h4 class="mb-1 font-bold">Local Resource Network</h4>
								<p class="text-secondary">
									We maintain strong relationships with the best local suppliers
									and specialist trades across Clark and Multnomah counties to
									bring you superior materials.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- CTA Section -->
	<section class="bg-primary py-section-gap-mobile text-on-primary md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin text-center">
			<h2 class="mb-6 font-display-lg text-display-lg-mobile md:text-display-lg">
				Ready to transform your home?
			</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg opacity-90">
				Enter your zip code to confirm we serve your neighborhood or request a free,
				no-obligation estimate today.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
				<a
					href="/contact"
					class="hover:bg-opacity-90 w-full rounded-lg bg-surface-white px-10 py-4 font-bold text-primary transition-all active:scale-95 md:w-auto"
				>
					Request FREE Estimate
				</a>
			</div>
			<div class="mt-8 flex items-center justify-center gap-4 text-sm opacity-80">
				<span class="flex items-center gap-1 text-sm">
					<Phone />
					(360) 991-7646
				</span>
				<span class="h-1 w-1 rounded-full bg-on-primary"></span>
				<span>Fully Licensed &amp; Insured</span>
			</div>
		</div>
	</section>
</main>
