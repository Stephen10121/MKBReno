<script lang="ts">
	import { isContactModalOpen } from '@/store';
	import { BadgeCheck, ClipboardClock, Hammer, MapPin, Phone, Star } from '@lucide/svelte';
	import constructionPic from '@/assets/construction.png';
	import servinghereimg from '@/assets/servinghere.webp';

	const processSteps = [
		{
			title: 'Consultation & Planning',
			desc: 'Every project begins with a detailed consultation. As an experienced home addition contractor in Clark County, WA, we take the time to understand your vision, budget, and goals. We evaluate your property and help determine the best approach for your home expansion or ADU build.'
		},
		{
			title: 'Design & Layout',
			desc: "We create custom designs that blend perfectly with your existing structure. Our home addition design services ensure your new space matches your home's layout, rooflines, and style while maximizing functionality."
		},
		{
			title: 'Permits & Approvals',
			desc: 'We handle all permitting to ensure your project meets Washington state building codes and local Clark County requirements. This includes submitting plans and coordinating approvals so your home addition project stays on track.'
		},
		{
			title: 'Site Preparation',
			desc: 'Our team prepares the site by clearing, leveling, and completing any demolition needed. We protect your existing structure while preparing for construction.'
		},
		{
			title: 'Foundation Construction',
			desc: 'A solid foundation is key to any successful home addition or ADU construction. We excavate, pour footings, and build foundation walls or slabs designed for long-term durability.'
		},
		{
			title: 'Framing',
			desc: 'We construct the structural framework, including floors, walls, and roof systems. This is where your custom home addition begins to take shape.'
		},
		{
			title: 'Exterior & Roofing',
			desc: "We install roofing, siding, windows, and doors to fully enclose the structure. Our goal is to seamlessly match your existing home's exterior for a cohesive look."
		},
		{
			title: 'Electrical, Plumbing & HVAC',
			desc: 'We install all essential systems, including electrical wiring, plumbing, and heating/cooling. Every system is built to meet code and ensure long-term performance.'
		},
		{
			title: 'Insulation & Drywall',
			desc: 'We install high-quality insulation for energy efficiency, followed by drywall installation and finishing to create smooth interior walls.'
		},
		{
			title: 'Interior Finishes',
			desc: 'From flooring and cabinets to trim and paint, this phase brings your home renovation or addition to life with clean, professional finishes.'
		},
		{
			title: 'Fixtures & Final Details',
			desc: 'We install lighting, plumbing fixtures, and final details to complete your space with precision and care.'
		},
		{
			title: 'Final Inspection & Walkthrough',
			desc: 'We complete all inspections and walk you through your finished project to ensure everything meets your expectations and local building standards.'
		}
	];

	const whyChoose = [
		'Licensed, bonded, and insured',
		'Experienced general contractor in Clark County, WA',
		'Specializing in home additions, ADUs, and full home remodeling',
		'Efficient build timelines (construction often completed in ~90 days)',
		'5-star rated on Google'
	];
</script>

<svelte:head>
	<meta
		property="twitter:title"
		content="Home Additions in Clark County, WA | ADUs & Remodeling | MKB Renovations"
	/>
	<meta
		property="og:title"
		content="Home Additions in Clark County, WA | ADUs & Remodeling | MKB Renovations"
	/>
	<meta
		name="title"
		content="Home Additions in Clark County, WA | ADUs & Remodeling | MKB Renovations"
	/>
	<title>Home Additions in Clark County, WA | ADUs & Remodeling | MKB Renovations</title>
	<meta property="twitter:url" content="https://www.mkb-renovations.com/additions" />
	<meta property="og:url" content="https://www.mkb-renovations.com/additions" />

	<link rel="canonical" href="https://www.mkb-renovations.com/additions" />

	<meta
		name="description"
		content="Licensed contractor specializing in home additions, ADUs, and remodeling in Clark County, WA. Design to finish construction with high-quality craftsmanship."
	/>
	<meta
		property="og:description"
		content="Licensed contractor specializing in home additions, ADUs, and remodeling in Clark County, WA. Design to finish construction with high-quality craftsmanship."
	/>
	<meta
		property="twitter:description"
		content="Licensed contractor specializing in home additions, ADUs, and remodeling in Clark County, WA. Design to finish construction with high-quality craftsmanship."
	/>
</svelte:head>

<section class="relative flex min-h-screen items-center overflow-hidden py-section-gap">
	<div class="absolute inset-0 z-0">
		<img
			class="h-full w-full object-cover"
			alt="Hero additions"
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZhC0MEU7rW9oeEbcySPwXCL8qi0oETOiOzW77Jbp2tuW5EF8LmG-XbbBQI1EQxlw4yFEitLCABgqgQJdoF0k_gFO5DQ0FcE3HGUaDCa5gu0dDaBw7kwE24w3gPnrz5cB96K1xSeuMePYazvPU2489kt7dKyxo21uKksy0PdTB5vgsgnUyLQcXeI7J_6TWA8kSwTPrkS03EzUQxs9PZyCVeoSCBNw0TyP4gdql6tW8yZWBmaCK_Dm0gkNXRsOnISEd3uEkCB-QTU"
		/>
		<div class="hero-gradient absolute inset-0"></div>
	</div>
	<div class="relative z-10 mx-auto max-w-container-max px-margin-desktop text-white">
		<div class="max-w-3xl">
			<h1 class="mb-6 font-headline-xl text-headline-xl-mobile md:text-headline-xl">
				Home Additions in Clark County, WA
			</h1>
			<p class="mb-8 font-headline-md text-headline-sm text-primary-fixed md:text-headline-md">
				Custom Home Additions, ADUs &amp; Remodeling by MKB Renovations
			</p>
			<p class="mb-10 font-body-lg text-body-lg leading-relaxed text-surface-variant">
				At MKB Renovations, we specialize in home additions in Clark County, Washington, delivering
				high-quality craftsmanship from design to completion. Whether you're building an ADU
				(Accessory Dwelling Unit), adding a bedroom, expanding your living space, or constructing a
				full home addition, our team provides a seamless, start-to-finish experience.
			</p>
			<div class="flex flex-wrap gap-4">
				<button
					onclick={() => isContactModalOpen.set(true)}
					class="rounded-lg bg-primary px-8 py-4 font-label-md text-label-md text-on-primary shadow-lg transition-colors hover:bg-tertiary"
				>
					Get FREE Estimate
				</button>
				<a
					class="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-label-md text-label-md text-white transition-colors hover:bg-white/10"
					href="tel:3609917646"
				>
					<Phone />
					(360) 991-7646
				</a>
			</div>
		</div>
	</div>
</section>
<!-- Why Choose Us -->
<section class="bg-surface py-section-gap">
	<div class="mx-auto max-w-container-max px-margin-desktop">
		<div class="grid grid-cols-1 items-center gap-gutter lg:grid-cols-2">
			<div>
				<h2 class="mb-8 font-headline-lg text-headline-lg text-on-surface">
					Why Choose MKB Renovations
				</h2>
				<ul class="space-y-6">
					<li class="flex items-start gap-4">
						<BadgeCheck class="h-10 w-10 rounded-full bg-primary-fixed/20 p-2 text-primary" />
						<div>
							<h3 class="mb-1 font-headline-sm text-headline-sm">Licensed, Bonded, and Insured</h3>
							<p class="text-on-surface-variant">
								Complete protection and peace of mind for every homeowner we serve.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<Hammer class="h-10 w-10 rounded-full bg-primary-fixed/20 p-2 text-primary" />
						<div>
							<h3 class="mb-1 font-headline-sm text-headline-sm">Experienced General Contractor</h3>
							<p class="text-on-surface-variant">
								Expertise in Clark County, WA local building codes and complex structural additions.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<ClipboardClock class="h-10 w-10 rounded-full bg-primary-fixed/20 p-2 text-primary" />
						<div>
							<h3 class="mb-1 font-headline-sm text-headline-sm">Efficient Build Timelines</h3>
							<p class="text-on-surface-variant">
								Construction often completed in ~90 days, minimizing disruption to your daily life.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<Star class="h-10 w-10 rounded-full bg-primary-fixed/20 p-2 text-primary" />
						<div>
							<h3 class="mb-1 font-headline-sm text-headline-sm">5-Star Rated on Google</h3>
							<p class="text-on-surface-variant">
								Our reputation for excellence is backed by satisfied clients across the region.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="relative">
				<div
					class="aspect-square overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high shadow-xl"
				>
					<img class="h-full w-full object-cover" alt="Construction site" src={constructionPic} />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-surface-container-low py-section-gap">
	<div class="mx-auto max-w-container-max px-margin-desktop">
		<div class="mb-16 text-center">
			<h2 class="mb-4 font-headline-lg text-headline-lg text-on-surface">
				Our Start-to-Finish Process
			</h2>
			<p class="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
				We've refined our 12-step process to ensure transparency, quality, and speed for your home
				addition project.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
			<!-- Step 1 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">01</div>
				<h3 class="font-headline-sm text-headline-sm">Consultation &amp; Planning</h3>
				<p class="text-on-surface-variant">
					We evaluate your property and help determine the best approach for your home expansion or
					ADU build.
				</p>
			</div>
			<!-- Step 2 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">02</div>
				<h3 class="font-headline-sm text-headline-sm">Design &amp; Layout</h3>
				<p class="text-on-surface-variant">
					Custom designs matching your home’s layout, rooflines, and style while maximizing
					functionality.
				</p>
			</div>
			<!-- Step 3 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">03</div>
				<h3 class="font-headline-sm text-headline-sm">Permits &amp; Approvals</h3>
				<p class="text-on-surface-variant">
					We handle all permitting to ensure your project meets Washington state building codes.
				</p>
			</div>
			<!-- Step 4 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">04</div>
				<h3 class="font-headline-sm text-headline-sm">Site Preparation</h3>
				<p class="text-on-surface-variant">
					Clearing, leveling, and demolition while protecting your existing structure.
				</p>
			</div>
			<!-- Step 5 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">05</div>
				<h3 class="font-headline-sm text-headline-sm">Foundation</h3>
				<p class="text-on-surface-variant">
					Excavating and building foundation walls or slabs designed for long-term durability.
				</p>
			</div>
			<!-- Step 6 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">06</div>
				<h3 class="font-headline-sm text-headline-sm">Framing</h3>
				<p class="text-on-surface-variant">
					Constructing the structural framework, where your custom addition begins to take shape.
				</p>
			</div>
			<!-- Step 7 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">07</div>
				<h3 class="font-headline-sm text-headline-sm">Exterior &amp; Roofing</h3>
				<p class="text-on-surface-variant">
					Installing roofing, siding, windows, and doors to match your existing home’s exterior.
				</p>
			</div>
			<!-- Step 8 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">08</div>
				<h3 class="font-headline-sm text-headline-sm">Electrical &amp; Plumbing</h3>
				<p class="text-on-surface-variant">
					Installing all essential systems to code for long-term performance and reliability.
				</p>
			</div>
			<!-- Step 9 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">09</div>
				<h3 class="font-headline-sm text-headline-sm">Insulation &amp; Drywall</h3>
				<p class="text-on-surface-variant">
					High-quality insulation for energy efficiency, followed by precision drywall finishing.
				</p>
			</div>
			<!-- Step 10 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">10</div>
				<h3 class="font-headline-sm text-headline-sm">Interior Finishes</h3>
				<p class="text-on-surface-variant">
					Flooring, cabinets, trim, and paint—bringing your renovation to life with clean finishes.
				</p>
			</div>
			<!-- Step 11 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">11</div>
				<h3 class="font-headline-sm text-headline-sm">Fixtures &amp; Details</h3>
				<p class="text-on-surface-variant">
					Final lighting, plumbing fixtures, and precision details to complete your luxury space.
				</p>
			</div>
			<!-- Step 12 -->
			<div
				class="flex flex-col gap-4 rounded-xl border border-outline-variant bg-surface p-stack-lg transition-shadow hover:shadow-md"
			>
				<div class="font-headline-md text-headline-md text-primary opacity-20">12</div>
				<h3 class="font-headline-sm text-headline-sm">Final Inspection</h3>
				<p class="text-on-surface-variant">
					A final walkthrough and inspection to ensure everything meets your expectations.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-section-gap">
	<div class="mx-auto max-w-container-max px-margin-desktop">
		<div
			class="grid grid-cols-1 items-center gap-stack-lg rounded-xl bg-primary-container p-12 text-on-primary-container md:grid-cols-2"
		>
			<div>
				<h2 class="mb-4 font-headline-lg text-headline-lg text-on-primary">
					Serving Clark County &amp; Beyond
				</h2>
				<p class="mb-8 text-body-lg opacity-90">
					We are the local experts for additions and ADUs across the region. If you're in one of
					these areas, we're ready to help.
				</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex items-center gap-2">
						<MapPin class="text-primary-fixed" />
						Vancouver, WA
					</div>
					<div class="flex items-center gap-2">
						<MapPin class="text-primary-fixed" />
						Battle Ground, WA
					</div>
					<div class="flex items-center gap-2">
						<MapPin class="text-primary-fixed" />
						Camas, WA
					</div>
					<div class="flex items-center gap-2">
						<MapPin class="text-primary-fixed" />
						Washougal, WA
					</div>
					<div class="col-span-2 flex items-center gap-2">
						<MapPin class="text-primary-fixed" />
						Clark County, WA
					</div>
				</div>
			</div>
			<div
				class="h-64 overflow-hidden rounded-lg border border-outline bg-surface-container-highest md:h-full"
			>
				<img
					alt="Map of Clark County Service Area"
					class="h-full w-full object-cover opacity-80 grayscale"
					data-location="Clark County, WA"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOEeleq4Jua8v-h_vuYnKc5Ik_OaafF3OcGLz2ilzV-4fGmgHD1SXRWBI4RxJumKztEOyPdBeW0E6uvceRc8vw45Rfyc-RNqshQT5si6iaLv5Z3_j8wfjTENR3mZhZN30WlavaCUYIMmiUZfilUOBu889Gi5KJnbDVmlBfCSCnQ7p6GcIKL8q_2vShZ_CgHMo-PPuISBXkIFmDL0BEZP4satVXI5fb3lVOV7DGZ577wwbMfUv6z8Ev5njS4D9MNwO8jLneqESH8hQ"
				/>
			</div>
		</div>
	</div>
</section>
<!-- Final CTA -->
<section class="bg-surface py-section-gap">
	<div class="mx-auto max-w-container-max px-margin-desktop text-center">
		<h2 class="mb-8 font-headline-xl text-headline-xl">Ready to Expand Your Home?</h2>
		<p class="mx-auto mb-12 max-w-2xl text-body-lg text-on-surface-variant">
			Contact Clark County's leading addition contractor for a detailed consultation and a free
			estimate for your project.
		</p>
		<div class="flex flex-col justify-center gap-6 md:flex-row">
			<button
				class="rounded-lg bg-primary px-10 py-5 font-headline-sm text-headline-sm text-on-primary shadow-lg transition-transform hover:scale-105 hover:bg-tertiary"
			>
				Get FREE Estimate
			</button>
			<a
				class="flex items-center justify-center gap-3 rounded-lg border border-primary px-10 py-5 font-headline-sm text-headline-sm text-primary transition-colors hover:bg-primary/5"
				href="tel:3609917646"
			>
				<span class="material-symbols-outlined">call</span>
				(360) 991-7646
			</a>
		</div>
	</div>
</section>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
	.hero-gradient {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
	}
</style>
