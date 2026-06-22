<script lang="ts">
	import renovationIMG from '@/assets/housereno.webp';
	import vancouverbathroomreno from '@/assets/vancouverbathroomreno.jpeg';
	import richfieldbathroomreno from '@/assets/richfieldbathroom.jpg';
	import richfieldbathroom2 from '@/assets/richfieldbathroom2.jpg';
	import kitchenrenoandAddition from '@/assets/kitchenreno.jpeg';
	import bathroom2 from '@/assets/bathroom2.jpeg';
	import kitchenhero from '@/assets/Hero.webp';
</script>

<svelte:head>
	<title>Projects - MKB Renovations</title>
	<meta name="title" content="Projects - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/projects" />
	<meta property="og:title" content="Projects - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/projects" />
	<meta property="twitter:title" content="Projects - MKB Renovations" />
</svelte:head>

<main class="pt-20">
	<!-- Hero Section -->
	<section class="relative flex h-100 items-center justify-center overflow-hidden">
		<img
			alt="Luxury Home Project"
			class="absolute inset-0 h-full w-full object-cover"
			src={renovationIMG}
		/>
		<div class="absolute inset-0 bg-on-background/40"></div>
		<div class="relative z-10 px-grid-margin text-center">
			<h1 class="mb-4 font-display-lg text-display-lg text-white md:text-display-lg">
				Our Featured Projects
			</h1>
			<p class="mx-auto max-w-2xl font-body-lg text-body-lg text-surface-bright">
				Discover how we transform Pacific Northwest homes with precision, transparency, and
				award-winning design.
			</p>
		</div>
	</section>
	<!-- Project Gallery Section -->
	<section
		class="mx-auto max-w-7xl px-grid-margin py-section-gap-mobile md:py-section-gap-desktop"
	>
		<!-- Bento-style Grid -->
		<div class="grid grid-cols-1 gap-grid-gutter md:grid-cols-12">
			<!-- Project 1: Modern Salmon Creek Kitchen (Large) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-8"
			>
				<div class="aspect-video overflow-hidden">
					<img
						alt="Modern Kitchen"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={kitchenhero}
					/>
				</div>
				<div class="p-8">
					<div class="mb-4 flex items-start justify-between">
						<div>
							<span
								class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
								>Kitchen Remodel</span
							>
							<h3 class="font-headline-md text-headline-md text-on-surface">
								Modern Salmon Creek Kitchen
							</h3>
						</div>
					</div>
					<p class="font-body-md text-body-md text-secondary">
						A complete culinary transformation featuring custom cabinetry, integrated
						smart appliances, and a stunning waterfall marble island. PNW inspired
						wooden accents.
					</p>
				</div>
			</div>
			<!-- Project 2: West Linn Primary Bath (Small) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-4"
			>
				<div class="aspect-square overflow-hidden">
					<img
						alt="Luxury Bathroom Renovation"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={vancouverbathroomreno}
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Washougal Primary Bath
					</h3>
					<p class="font-body-md text-body-md text-sm text-secondary">
						Spa-inspired retreat with heated floors and a seamless tile integration into
						the bathtub.
					</p>
				</div>
			</div>
			<!-- Project 3: Camas Whole-Home Refresh (Small) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-4"
			>
				<div class="aspect-square overflow-hidden">
					<img
						alt="Clark County Bathroom"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={richfieldbathroom2}
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						PNW Refresh
					</h3>
					<p class="font-body-md text-body-md text-sm text-secondary">
						A clean, modern bathroom remodel featuring warm PNW inspired materials and
						minimalist fixtures.
					</p>
				</div>
			</div>
			<!-- Project 4: Portland Heights Chef's Kitchen (Large) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-8"
			>
				<div class="aspect-video overflow-hidden">
					<img
						alt="Kitchen Renovation + Addition"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={kitchenrenoandAddition}
					/>
				</div>
				<div class="p-8">
					<div class="mb-4 flex items-start justify-between">
						<div>
							<span
								class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
								>Addition</span
							>
							<h3 class="font-headline-md text-headline-md text-on-surface">
								Vancouver Kitchen Reno + Full House Addition
							</h3>
						</div>
					</div>
					<p class="font-body-md text-body-md text-secondary">
						Completely redesigned kitchen with an addition behind to expand the living
						room.
					</p>
				</div>
			</div>
			<!-- Project 5: Lake Oswego Guest Bath -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-6"
			>
				<div class="aspect-16/10 overflow-hidden">
					<img
						alt="Guest Bath in Richfield"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={richfieldbathroomreno}
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Ridgefield Bathroom Renovation
					</h3>
					<p class="font-body-md text-body-md text-secondary">
						Small space, big impact. Using vertical textures and big windows to create
						an airy feel and a view of the nature of PNW.
					</p>
				</div>
			</div>
			<!-- Project 6: Ridgefield Outdoor Living -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-6"
			>
				<div class="aspect-16/10 overflow-hidden">
					<img
						alt="Bathroom renovation"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src={bathroom2}
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Vancouver Bathroom Reno + Full House
					</h3>
					<p class="font-body-md text-body-md text-secondary">
						Floor to ceiling tile covered walls, modern light fixtures and heated
						floors.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- CTA Section -->
	<section
		class="border-y border-gray-subtle bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="mx-auto max-w-7xl px-grid-margin text-center">
			<h2 class="mb-6 font-display-lg text-display-lg text-on-surface md:text-display-lg">
				Ready to Start Your Own Transformation?
			</h2>
			<p class="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-secondary">
				From initial design to final walkthrough, we provide a stress-free experience and
				craftsmanship that lasts a lifetime.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
				<button
					class="w-full rounded-full bg-primary px-10 py-4 font-label-caps text-label-caps text-on-primary transition-all hover:-translate-y-1 hover:shadow-xl md:w-auto"
				>
					Book Your Free Estimate
				</button>
				<button
					class="w-full rounded-full border border-primary px-10 py-4 font-label-caps text-label-caps text-primary transition-all hover:bg-primary/5 md:w-auto"
				>
					View More Reviews
				</button>
			</div>
		</div>
	</section>
</main>
