<script lang="ts">
	import herohome from '@/assets/herohome.webp';
	import bathroom from '@/assets/bathroom.webp';
	import adu from '@/assets/adu.webp';
	import sinkImg from '@/assets/sink.webp';
	import houseReno2 from '@/assets/housereno2.webp';
</script>

<svelte:head>
	<title>Services - MKB Renovations</title>
	<meta name="title" content="Services - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/services" />
	<meta property="og:title" content="Services - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/services" />
	<meta property="twitter:title" content="Services - MKB Renovations" />
</svelte:head>

<main class="pt-20">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-surface-white py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="pointer-events-none absolute inset-0 opacity-10">
			<div
				class="absolute top-0 right-0 h-full w-1/2 translate-x-1/4 skew-x-12 transform bg-primary-fixed-dim/20"
			></div>
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-grid-margin text-center">
			<span class="mb-4 block font-label-caps text-label-caps text-primary"
				>Craftsmanship That Lasts</span
			>
			<h1
				class="mx-auto mb-6 max-w-3xl font-display-lg-mobile text-display-lg-mobile text-on-background md:font-display-lg md:text-display-lg"
			>
				Expert Renovation Services
			</h1>
			<p class="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-secondary">
				From bespoke kitchen islands to luxurious primary suites, we bring professional
				design and stress-free execution to every corner of your home.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-center font-label-caps text-label-caps text-on-primary transition-all hover:opacity-90 md:w-fit"
					href="#kitchen"
				>
					View Kitchens <span class="material-symbols-outlined text-[20px]"
						>restaurant</span
					>
				</a>
				<a
					class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-subtle px-8 py-4 font-label-caps text-label-caps text-secondary transition-all hover:bg-surface-container md:w-fit"
					href="#bathroom"
				>
					View Bathrooms <span class="material-symbols-outlined text-[20px]">bathtub</span
					>
				</a>
				<a
					class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-subtle px-8 py-4 font-label-caps text-label-caps text-secondary transition-all hover:bg-surface-container md:w-fit"
					href="#adu"
				>
					View ADU's <span class="material-symbols-outlined text-[20px]">house</span>
				</a>
			</div>
		</div>
	</section>
	<!-- Kitchen Renovations -->
	<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop" id="kitchen">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-center gap-grid-gutter md:grid-cols-12">
				<div class="order-2 md:order-1 md:col-span-5">
					<h2
						class="mb-6 border-l-4 border-primary pl-4 font-headline-md text-headline-md text-on-surface"
					>
						Kitchen Renovations
					</h2>
					<p
						class="mb-8 font-body-md text-body-md leading-relaxed text-on-surface-variant"
					>
						Transform your kitchen into a culinary masterpiece. We manage every detail,
						from space planning to the final coat of paint, ensuring a balance of
						function and architectural beauty.
					</p>
					<div class="mb-8 space-y-4">
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Custom Cabinetry
								</p>
								<p class="text-sm text-secondary">
									Bespoke storage solutions tailored to your lifestyle and
									aesthetic.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Countertop Installation
								</p>
								<p class="text-sm text-secondary">
									Premium quartz, granite, and marble surfaces with precision edge
									detailing.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Appliance Integration
								</p>
								<p class="text-sm text-secondary">
									Seamless fitting of smart appliances and professional-grade
									ranges.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Lighting Design
								</p>
								<p class="text-sm text-secondary">
									Layered lighting schemes including task, ambient, and accent
									fixtures.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="order-1 md:order-2 md:col-span-7">
					<div class="group relative">
						<div
							class="aspect-4/3 overflow-hidden rounded-xl border border-gray-subtle shadow-sm"
						>
							<img
								alt="Luxury kitchen renovation"
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								src={herohome}
							/>
						</div>
						<div
							class="absolute -bottom-6 -left-6 hidden max-w-60 rounded-xl border border-gray-subtle bg-surface-white p-6 shadow-lg lg:block"
						>
							<p class="mb-1 text-headline-md font-bold text-primary">98%</p>
							<p
								class="font-label-caps text-label-caps text-sm leading-tight text-secondary"
							>
								Customer Satisfaction Rating
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Bathroom Remodeling -->
	<section class="bg-surface-white py-section-gap-mobile md:py-section-gap-desktop" id="bathroom">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-center gap-grid-gutter md:grid-cols-12">
				<div class="md:col-span-7">
					<div class="grid grid-cols-2 gap-4">
						<div
							class="aspect-square overflow-hidden rounded-xl border border-gray-subtle shadow-sm"
						>
							<img
								alt="Modern bathroom details"
								class="h-full w-full object-cover"
								src={sinkImg}
							/>
						</div>
						<div
							class="mt-8 aspect-square overflow-hidden rounded-xl border border-gray-subtle shadow-sm"
						>
							<img
								alt="Designer shower installation"
								class="h-full w-full object-cover"
								src={bathroom}
							/>
						</div>
					</div>
				</div>
				<div class="md:col-span-5">
					<h2
						class="mb-6 border-l-4 border-primary pl-4 font-headline-md text-headline-md text-on-surface"
					>
						Bathroom Remodeling
					</h2>
					<p
						class="mb-8 font-body-md text-body-md leading-relaxed text-on-surface-variant"
					>
						Create a private sanctuary. From master suites to guest baths, we combine
						modern fixtures with meticulous tile work to deliver a space that adds both
						value and luxury to your daily routine.
					</p>
					<ul class="space-y-6">
						<li class="flex gap-4">
							<div class="h-fit rounded-full bg-primary-fixed-dim/30 p-2">
								<span
									class="material-symbols-outlined text-primary"
									style="font-variation-settings: 'FILL' 1;">spa</span
								>
							</div>
							<div>
								<h4 class="font-label-caps text-label-caps text-on-surface">
									Custom Tile Work
								</h4>
								<p class="text-sm text-on-surface-variant">
									Hand-laid porcelain, ceramic, and natural stone with waterproof
									backing.
								</p>
							</div>
						</li>
						<li class="flex gap-4">
							<div class="h-fit rounded-full bg-primary-fixed-dim/30 p-2">
								<span
									class="material-symbols-outlined text-primary"
									style="font-variation-settings: 'FILL' 1;">faucet</span
								>
							</div>
							<div>
								<h4 class="font-label-caps text-label-caps text-on-surface">
									Modern Fixtures
								</h4>
								<p class="text-sm text-on-surface-variant">
									High-efficiency, designer hardware that blends form and
									function.
								</p>
							</div>
						</li>
						<li class="flex gap-4">
							<div class="h-fit rounded-full bg-primary-fixed-dim/30 p-2">
								<span
									class="material-symbols-outlined text-primary"
									style="font-variation-settings: 'FILL' 1;">shower</span
								>
							</div>
							<div>
								<h4 class="font-label-caps text-label-caps text-on-surface">
									Shower &amp; Tub Installation
								</h4>
								<p class="text-sm text-on-surface-variant">
									Freestanding soaking tubs and curbless shower transformations.
								</p>
							</div>
						</li>
						<li class="flex gap-4">
							<div class="h-fit rounded-full bg-primary-fixed-dim/30 p-2">
								<span
									class="material-symbols-outlined text-primary"
									style="font-variation-settings: 'FILL' 1;">grid_view</span
								>
							</div>
							<div>
								<h4 class="font-label-caps text-label-caps text-on-surface">
									Vanity Design
								</h4>
								<p class="text-sm text-on-surface-variant">
									Custom cabinetry and stone tops for organized, elegant storage.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- ADU's -->
	<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop" id="adu">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-center gap-grid-gutter md:grid-cols-12">
				<div class="order-2 md:order-1 md:col-span-5">
					<h2
						class="mb-6 border-l-4 border-primary pl-4 font-headline-md text-headline-md text-on-surface"
					>
						Additions/ADU's
					</h2>
					<p
						class="mb-8 font-body-md text-body-md leading-relaxed text-on-surface-variant"
					>
						Expand your home with thoughtful, functional spaces built to blend
						seamlessly with your existing architecture. From early planning to final
						inspection, we handle every detail to create rooms that feel natural,
						intentional, and built to last.
					</p>
					<div class="mb-8 space-y-4">
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Design & Space Planning
								</p>
								<p class="text-sm text-secondary">
									Smart layouts that maximize square footage, natural light, and
									long-term usability.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Foundation & Structural Work
								</p>
								<p class="text-sm text-secondary">
									Engineered footings, framing, and load-bearing solutions that
									ensure safety and durability.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Full ADU Construction
								</p>
								<p class="text-sm text-secondary">
									Detached or attached units built to code, ideal for guests,
									rental income, or multigenerational living.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span
								class="material-symbols-outlined text-primary"
								style="font-variation-settings: 'FILL' 1;">check_circle</span
							>
							<div>
								<p class="mb-1 font-label-caps text-label-caps text-on-surface">
									Interior Finishes
								</p>
								<p class="text-sm text-secondary">
									Quality flooring, cabinetry, fixtures, and trim that bring
									comfort and cohesion to the new space.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="order-1 md:order-2 md:col-span-7">
					<div class="group relative">
						<div
							class="aspect-4/3 overflow-hidden rounded-xl border border-gray-subtle shadow-sm"
						>
							<img
								alt="Luxury ADU"
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								src={adu}
							/>
						</div>
						<div
							class="absolute -bottom-6 -left-6 hidden max-w-60 rounded-xl border border-gray-subtle bg-surface-white p-6 shadow-lg lg:block"
						>
							<p class="mb-1 text-headline-md font-bold text-primary">98%</p>
							<p
								class="font-label-caps text-label-caps text-sm leading-tight text-secondary"
							>
								Customer Satisfaction Rating
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Whole House Renovations -->
	<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop" id="whole-house">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="mb-16 text-center">
				<h2 class="mb-4 font-headline-md text-headline-md text-on-surface">
					Whole-House Renovations
				</h2>
				<p class="mx-auto max-w-2xl font-body-lg text-body-lg text-secondary">
					Unified design across your entire home. We orchestrate complex multi-room
					projects with a single point of accountability.
				</p>
			</div>
			<!-- Bento Grid Layout -->
			<div
				class="grid h-auto grid-cols-1 grid-rows-2 gap-grid-gutter md:h-150 md:grid-cols-4"
			>
				<div
					class="group flex flex-col overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-2 md:row-span-2"
				>
					<div class="h-2/3 overflow-hidden">
						<img
							alt="Open concept living"
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							src={houseReno2}
						/>
					</div>
					<div class="grow p-8">
						<h3 class="mb-2 font-headline-md text-headline-md">
							Architectural Cohesion
						</h3>
						<p class="mb-4 text-on-surface-variant">
							Ensuring consistent finishes, flooring, and lighting throughout your
							entire residence.
						</p>
						<!-- <span
							class="flex items-center gap-2 font-label-caps text-label-caps text-primary"
							>Learn More <span class="material-symbols-outlined text-[16px]"
								>arrow_forward</span
							></span
						> -->
					</div>
				</div>
				<div
					class="group flex items-center justify-between overflow-hidden rounded-xl border border-gray-subtle bg-surface-white p-8 md:col-span-2"
				>
					<div class="max-w-[60%]">
						<h3 class="mb-2 font-headline-md text-headline-md">Project Management</h3>
						<p class="text-sm text-on-surface-variant">
							A dedicated lead for every phase, from permitting to final walkthrough.
						</p>
					</div>
					<span
						class="material-symbols-outlined text-6xl text-primary opacity-20 transition-opacity group-hover:opacity-40"
						>construction</span
					>
				</div>
				<div
					class="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-gray-subtle bg-surface-white p-8 md:col-span-1"
				>
					<div
						class="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<h3 class="relative z-10 mb-2 font-label-caps text-label-caps text-on-surface">
						Additions
					</h3>
					<p class="relative z-10 text-xs text-secondary">
						Master suite expansions and sunrooms.
					</p>
				</div>
				<a
					href="/contact"
					class="group flex cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-primary p-8 text-on-primary transition-all hover:shadow-lg md:col-span-1"
				>
					<h3 class="mb-2 font-headline-md text-headline-md">Book a Consultation</h3>
					<p class="mb-4 text-sm text-on-primary/80">
						Discuss your full-home vision with our experts.
					</p>
					<span class="material-symbols-outlined self-end text-4xl"
						>arrow_circle_right</span
					>
				</a>
			</div>
		</div>
	</section>
	<!-- CTA Section -->
	<section class="px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
		<div
			class="relative mx-auto max-w-7xl overflow-hidden rounded-full border border-outline-variant bg-surface-container-highest p-12 text-center md:p-20"
		>
			<div class="absolute inset-0 opacity-5">
				<div class="grid h-full w-full grid-cols-12">
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
					<div class="border-r border-on-background"></div>
				</div>
			</div>
			<h2
				class="relative z-10 mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg"
			>
				Ready to refresh your home?
			</h2>
			<p
				class="relative z-10 mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
			>
				Join hundreds of satisfied homeowners in Vancouver and Portland who trusted us with
				their transformation.
			</p>
			<div class="relative z-10 flex flex-col items-center justify-center gap-6 md:flex-row">
				<a
					href="/contact"
					class="rounded-full bg-primary px-10 py-5 font-headline-md text-sm text-on-primary shadow-lg transition-transform hover:scale-105 sm:text-headline-md"
				>
					Get Your FREE Estimate
				</a>
				<a
					class="flex items-center gap-3 font-headline-md text-headline-md text-on-surface"
					href="tel:3609917646"
				>
					<span
						class="material-symbols-outlined rounded-full bg-surface-white p-3 text-primary shadow-sm"
						>call</span
					>
					(360) 991-7646
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
	.text-label-caps {
		text-transform: uppercase;
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
