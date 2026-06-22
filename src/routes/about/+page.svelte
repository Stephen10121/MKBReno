<script lang="ts">
	import MarkImage from '$lib/assets/mark.webp';
	import kitchenIMG from '@/assets/Hero.webp';
	import renovationIMG from '@/assets/housereno.webp';
</script>

<svelte:head>
	<title>About MKB Renovations - MKB Renovations</title>
	<meta name="title" content="About MKB Renovations - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/about" />
	<meta property="og:title" content="About MKB Renovations - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/about" />
	<meta property="twitter:title" content="About MKB Renovations - MKB Renovations" />
</svelte:head>

<main class="pt-20">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-surface py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="absolute inset-0 z-0 opacity-10">
			<div
				class="absolute top-0 right-0 h-full w-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
			></div>
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-grid-margin text-center">
			<p class="mb-4 font-label-caps text-label-caps text-primary">
				Established &amp; Professional
			</p>
			<h1
				class="mx-auto mb-6 max-w-3xl font-display-lg text-display-lg md:font-display-lg md:text-display-lg"
			>
				Transforming Homes with Precision and Care
			</h1>
			<p class="mx-auto max-w-2xl font-body-lg text-body-lg text-secondary">
				MKB Renovations is a family-owned team dedicated to breathing new life into
				residential spaces across Vancouver, WA and surrounding areas.
			</p>
		</div>
	</section>
	<!-- Introduction Bento -->
	<section class="bg-white py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-stretch gap-grid-gutter md:grid-cols-12">
				<div class="flex flex-col justify-center md:col-span-7">
					<h2 class="mb-6 font-headline-md text-headline-md text-on-surface">
						Built on Trust, Defined by Craft
					</h2>
					<div class="space-y-6 text-body-md text-secondary">
						<p>
							Founded on the principle that home renovation should be an uplifting
							experience, MKB Renovations has spent decades perfecting the balance
							between high-end architectural aesthetics and stress-free project
							management.
						</p>
						<p>
							Our team specializes in kitchen and bathroom remodeling, but our passion
							extends to whole-house transformations. We understand that your home is
							your sanctuary, and our mission is to ensure every square inch reflects
							your vision and quality standards.
						</p>
						<div class="flex items-center gap-4 font-bold text-primary">
							<span class="material-symbols-outlined">verified</span>
							<span>Licensed, Insured, &amp; Locally Operated</span>
						</div>
					</div>
				</div>
				<div
					class="relative h-100 overflow-hidden rounded-xl border border-gray-subtle md:col-span-5 md:h-auto"
				>
					<img
						class="h-full w-full object-cover"
						alt="Kitchen renovation"
						src={kitchenIMG}
					/>
				</div>
			</div>
		</div>
	</section>
	<!-- The Team Section -->
	<section class="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
				<div class="order-2 md:order-1">
					<div class="relative inline-block">
						<div
							class="absolute -bottom-6 -left-6 z-0 h-full w-full rounded-xl bg-primary/10"
						></div>
						<img
							alt="Mark Pavliuk, Founder of MKB Renovations"
							class="relative z-10 w-full max-w-md rounded-xl shadow-sm grayscale transition-all duration-500 hover:grayscale-0"
							src={MarkImage}
						/>
					</div>
				</div>
				<div class="order-1 md:order-2">
					<h2 class="mb-2 font-headline-md text-headline-md text-on-surface">
						Meet Our Founder
					</h2>
					<p class="mb-8 font-label-caps text-label-caps text-primary">
						Mark Pavliuk | Master Craftsman
					</p>
					<div class="space-y-6 text-body-md text-secondary">
						<p>
							Leading the team is Mark Pavliuk, a professional who brings decades of
							hands-on experience to every project. Mark's philosophy is simple:
							construction doesn't have to be chaotic.
						</p>
						<p>
							By maintaining a transparent workflow and a relentless focus on the
							"architectural experience," Mark has built MKB Renovations into a
							household name for discerning homeowners in the Pacific Northwest.
						</p>
						<p>
							When you work with us, you're not just hiring a contractor, you're
							partnering with a team that values your time, your budget, and the
							legacy of your home.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Values/Mission -->
	<section class="bg-white py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto mb-16 max-w-7xl px-grid-margin text-center">
			<h2 class="mb-4 font-headline-md text-headline-md">Our Core Values</h2>
			<p class="mx-auto max-w-xl text-secondary">
				The pillars that define every renovation we undertake.
			</p>
		</div>
		<div
			class="mx-auto grid max-w-7xl grid-cols-1 gap-grid-gutter px-grid-margin md:grid-cols-3"
		>
			<!-- Value Card 1 -->
			<div
				class="group rounded-xl border border-gray-subtle p-8 transition-shadow hover:shadow-lg"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
				>
					<span class="material-symbols-outlined">architecture</span>
				</div>
				<h3 class="mb-3 font-headline-md text-headline-md">Craftsmanship</h3>
				<p class="text-secondary">
					We don't cut corners. Every joint, every finish, and every structural element is
					executed to the highest architectural standards.
				</p>
			</div>
			<!-- Value Card 2 -->
			<div
				class="group rounded-xl border border-gray-subtle p-8 transition-shadow hover:shadow-lg"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
				>
					<span class="material-symbols-outlined">visibility</span>
				</div>
				<h3 class="mb-3 font-headline-md text-headline-md">Integrity</h3>
				<p class="text-secondary">
					Total transparency in pricing and timelines. We believe honest communication is
					the foundation of every successful project.
				</p>
			</div>
			<!-- Value Card 3 -->
			<div
				class="group rounded-xl border border-gray-subtle p-8 transition-shadow hover:shadow-lg"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
				>
					<span class="material-symbols-outlined">volunteer_activism</span>
				</div>
				<h3 class="mb-3 font-headline-md text-headline-md">Client-First</h3>
				<p class="text-secondary">
					Your vision is our priority. we work closely with you to ensure the final result
					exceeds your wildest expectations.
				</p>
			</div>
		</div>
	</section>
	<!-- Call to Action -->
	<section class="relative overflow-hidden py-section-gap-mobile md:py-section-gap-desktop">
		<div class="absolute inset-0 z-0 bg-primary">
			<img
				class="h-full w-full object-cover opacity-20"
				alt="House renovation"
				src={renovationIMG}
			/>
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-grid-margin text-center">
			<h2 class="mb-6 font-display-lg text-display-lg text-on-primary">
				Ready to Start Your Transformation?
			</h2>
			<p class="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-primary/80">
				Let's discuss your project and provide you with a comprehensive, no-obligation
				estimate for your next renovation project.
			</p>
			<div class="flex flex-col justify-center gap-4 md:flex-row">
				<a
					class="flex items-center justify-center rounded-lg bg-surface-white px-10 py-5 text-label-caps font-bold text-primary transition-colors hover:bg-primary-fixed-dim"
					href="/contact"
				>
					Get A Free Estimate
				</a>
				<a
					class="flex items-center justify-center gap-2 rounded-lg border border-on-primary px-10 py-5 text-label-caps font-bold text-on-primary transition-colors hover:bg-on-primary hover:text-primary"
					href="tel:3609917646"
				>
					<span class="material-symbols-outlined">call</span>
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
</style>
