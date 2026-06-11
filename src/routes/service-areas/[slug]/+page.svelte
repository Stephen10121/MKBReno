<script lang="ts">
	import hero from '@/assets/Hero.jpg';

	let { data } = $props();
</script>

<svelte:head>
	<title>Serving {data.shortName} - MKB Renovations</title>
	<meta name="title" content="Serving {data.shortName} - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/{data.slug}" />
	<meta property="og:title" content="Serving {data.shortName} - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/{data.slug}" />
	<meta property="twitter:title" content="Serving {data.shortName} - MKB Renovations" />
</svelte:head>

<main class="mt-18">
	<!-- Hero Section -->
	<section class="relative flex min-h-204.75 items-center pt-section-gap-mobile md:pt-0">
		<div class="absolute inset-0 z-0">
			<img alt="Vancouver Home Renovations" class="h-full w-full object-cover" src={hero} />
			<div
				class="absolute inset-0 bg-linear-to-r from-surface-white via-surface-white/80 to-transparent"
			></div>
		</div>
		<div class="relative z-10 mx-auto w-full max-w-7xl px-grid-margin">
			<div class="max-w-2xl">
				<span
					class="mb-4 inline-block bg-primary/10 px-3 py-1 font-label-caps text-label-caps text-primary"
					>EXPERT CRAFTSMANSHIP IN CLARK COUNTY</span
				>
				<h1
					class="mb-6 font-display-lg text-display-lg text-on-background md:text-display-lg"
				>
					Professional Home Renovations in {data.longName}
				</h1>
				<p class="mb-8 font-body-lg text-body-lg text-secondary">
					Elevating Pacific Northwest living through transparent, architectural
					transformations. From {data.neighborhoods[0]} to {data.neighborhoods[1]}, we
					bring renewed possibility to every corner of your home.
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="flex h-12 items-center gap-2 bg-primary px-8 font-label-caps text-label-caps font-bold text-on-primary transition-all hover:opacity-90"
					>
						START YOUR PROJECT <span class="material-symbols-outlined"
							>arrow_forward</span
						>
					</a>
				</div>
			</div>
		</div>
	</section>
	<!-- Local Context / Neighborhoods Bento Grid -->
	<section
		class="mx-auto max-w-7xl px-grid-margin py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="grid grid-cols-1 gap-grid-gutter md:grid-cols-12">
			<div class="flex flex-col justify-center md:col-span-4">
				<h2 class="mb-4 font-headline-md text-headline-md text-primary">
					Your Local {data.shortName} Partner
				</h2>
				<p class="font-body-md text-body-md leading-relaxed text-secondary">
					We understand the unique architectural character of {data.shortName}'s diverse
					neighborhoods. Whether it's the historic charm of Downtown, the modern estates
					in {data.neighborhoods[0]}, or the family-oriented residences of {data
						.neighborhoods[1]}, our team provides tailored renovation solutions that
					respect the local context.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-8">
				<div class="glass-card group p-8 transition-colors hover:border-primary">
					<div class="mb-4 text-primary">
						<span
							class="material-symbols-outlined text-4xl"
							style="font-variation-settings: 'FILL' 0;">location_city</span
						>
					</div>
					<h3 class="mb-2 font-headline-md text-headline-md">Downtown &amp; Uptown</h3>
					<p class="text-body-md text-secondary">
						Specialized restorations for historic structures and modern urban dwellings
						in the city's vibrant core.
					</p>
				</div>
				<div class="glass-card group p-8 transition-colors hover:border-primary">
					<div class="mb-4 text-primary">
						<span class="material-symbols-outlined text-4xl">landscape</span>
					</div>
					<h3 class="mb-2 font-headline-md text-headline-md">
						{data.neighborhoods[0]} &amp; {data.neighborhoods[2]}
					</h3>
					<p class="text-body-md text-secondary">
						High-end whole-house transformations for discerning homeowners in
						{data.shortName}'s premier districts.
					</p>
				</div>
				<div class="glass-card group p-8 transition-colors hover:border-primary">
					<div class="mb-4 text-primary">
						<span class="material-symbols-outlined text-4xl">park</span>
					</div>
					<h3 class="mb-2 font-headline-md text-headline-md">{data.neighborhoods[1]}</h3>
					<p class="text-body-md text-secondary">
						Expert kitchen and bath updates tailored for the classic residential layouts
						of {data.shortName}.
					</p>
				</div>
				<div class="flex items-center justify-between bg-primary p-8 text-on-primary">
					<div>
						<h3 class="mb-1 font-headline-md text-headline-md">
							Serving All Zip Codes
						</h3>
						<p class="opacity-90">
							{data.zipCodes.join(', ')} &amp; more.
						</p>
					</div>
					<span class="material-symbols-outlined text-3xl">map</span>
				</div>
			</div>
		</div>
	</section>
	<!-- Services Offered -->
	<section class="bg-surface-container py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto mb-16 max-w-7xl px-grid-margin text-center">
			<span class="font-label-caps text-label-caps text-primary">OUR CORE CAPABILITIES</span>
			<h2 class="mt-2 font-display-lg text-display-lg">
				Specialized {data.shortName} Services
			</h2>
		</div>
		<div
			class="mx-auto grid max-w-7xl grid-cols-1 gap-grid-gutter px-grid-margin md:grid-cols-3"
		>
			<!-- Kitchens -->
			<div
				class="flex flex-col overflow-hidden border border-gray-subtle bg-surface-white transition-shadow hover:shadow-lg"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						alt="Kitchen Remodeling"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						data-alt="A clean, minimalist kitchen renovation featuring custom green cabinetry accents and white subway tile backsplash. The lighting is bright and architectural, highlighting the professional finishing and high-quality materials. The style is modern corporate, emphasizing precision and cleanliness in a professional residential setting."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9SBGDOcOFCQfc-amZdd8IDpl-AvqD6aSapGxu-oqaxz_KvO-sbAzOQzpyw7xyKZfrfnxPJaUS9UojLw3T7Qf0kF_it-c2jbWS_sxnVaQL9W2ODnrDOmjitVlE8xObqN0rpa2Pg1eZSi6EB7jsUw0K6nnMRJcOdM5EaWNxPVTId6RDC3pN_s9b5-3Rlrrj5c2UFdZHKW7RXrY7XmkHYj_6bV0UI_jmJuvLQFxRE0KQS8RdXPxKPHIEIgJtb_gGijE3zZTEh3NUC7g"
					/>
					<div class="absolute top-4 left-4">
						<span
							class="bg-primary/90 px-3 py-1 font-label-caps text-label-caps text-on-primary"
							>KITCHENS</span
						>
					</div>
				</div>
				<div class="grow p-8">
					<h3 class="mb-4 font-headline-md text-headline-md">Kitchen Remodeling</h3>
					<p class="mb-6 text-body-md text-secondary">
						Culinary spaces designed for PNW entertaining. Custom cabinetry, smart
						layouts, and premium finishes.
					</p>
					<ul class="mb-8 space-y-3">
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Custom Island Designs
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Modern Appliance Integration
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Lighting &amp; Electrical Plans
						</li>
					</ul>
				</div>
			</div>
			<!-- Bathrooms -->
			<div
				class="flex flex-col overflow-hidden border border-gray-subtle bg-surface-white transition-shadow hover:shadow-lg"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						alt="Bathroom Remodeling"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						data-alt="A spa-like bathroom renovation with natural stone tiles and a frameless glass shower. The scene is illuminated with soft, cool daylight, evoking a sense of refreshment and renewed possibility. The design is minimalist and professional, perfectly reflecting the MKB Renovations brand identity of transparency and quality."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf_sNTGpF47r6jwcWTMIV4s6GPee4CsryHxz6xv6UmE48kmC85pEREjmMfvZSAJ0QUKtx8k46EboVFO_COzU1H_Fw_yLoVT80ljChtiaiatBJpawFi4VEPCGVWyQsbyS-efm-RwvkqujwN1ZjnoEatHRUCgisISV6rI0sruP25Wxaw_fp21MT220Tg8ziqCmIi1LvL_nO_hao5hcJ8Gf9cuRO6SXsBZpdL5YG1-fH8jN6PWBQJNIoErWAEvgfK1wZYioVkkUSLDf_D"
					/>
					<div class="absolute top-4 left-4">
						<span
							class="bg-primary/90 px-3 py-1 font-label-caps text-label-caps text-on-primary"
							>BATHROOMS</span
						>
					</div>
				</div>
				<div class="grow p-8">
					<h3 class="mb-4 font-headline-md text-headline-md">Bathroom Remodeling</h3>
					<p class="mb-6 text-body-md text-secondary">
						Transforming daily routines into spa-like experiences. Waterproofing
						excellence and aesthetic precision.
					</p>
					<ul class="mb-8 space-y-3">
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Walk-in Glass Showers
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Heated Flooring Systems
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Floating Vanity Installs
						</li>
					</ul>
				</div>
			</div>
			<!-- Whole House -->
			<div
				class="flex flex-col overflow-hidden border border-gray-subtle bg-surface-white transition-shadow hover:shadow-lg"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						alt="Whole-House Renovations"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						data-alt="A wide-angle view of an open-concept living space renovation, showing the seamless transition between a modern living room and dining area. High-quality flooring and architectural lighting create an airy, premium feel. The color palette is neutral with green accents, maintaining the brand's professional and uplifting personality."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_5gtZ3SUlj5zBLn82-Q0wOCcgsv1iTtk0jUS5XPgR_JwGeUbjw1YGMOjTF1Y2hTf9hM2EGLZ8_yreSdhDBGrH5dW59Njkau5bd3gddgNY_1zPhX8a4JVea8e2_NNNqOBA6sDsWlBRf_iHfOP6Yv_FyYesUMNaLievBteed0DdBTOk-d3H80qH5Kd9BwVWYoJqQHhs4XsgEFikZmpVSL1OkAYl2WaU-zopxKvWI2JMMwn40T-sRY2NoeBS5Zto5Cuc4VedWlQIy2fn"
					/>
					<div class="absolute top-4 left-4">
						<span
							class="bg-primary/90 px-3 py-1 font-label-caps text-label-caps text-on-primary"
							>WHOLE-HOUSE</span
						>
					</div>
				</div>
				<div class="grow p-8">
					<h3 class="mb-4 font-headline-md text-headline-md">Full Renovations</h3>
					<p class="mb-6 text-body-md text-secondary">
						Comprehensive structural and aesthetic overhauls. Managing every detail from
						permits to finishing touches.
					</p>
					<ul class="mb-8 space-y-3">
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Structural Wall Removal
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Unified Flooring &amp; Palettes
						</li>
						<li class="flex items-center gap-2 text-body-md text-on-surface-variant">
							<span class="material-symbols-outlined text-xl text-primary"
								>check_circle</span
							> Permitting &amp; Design Support
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- Why Vancouver Choose MKB -->
	<section
		class="mx-auto max-w-7xl px-grid-margin py-section-gap-mobile md:py-section-gap-desktop"
	>
		<div class="flex flex-col items-center gap-16 md:flex-row">
			<div class="w-full md:w-1/2">
				<img
					alt="PNW Craftsmanship"
					class="aspect-square w-full object-cover shadow-2xl"
					data-alt="A close-up shot of professional construction tools and high-end architectural blueprints laid out on a clean white surface. Soft natural light highlights the precision and attention to detail. This image represents the 'professionalism' and 'transparency' of MKB Renovations, using a clean corporate aesthetic with green brand accents."
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz_5NrQVLxVykVVXL1wvxF9EDQZHiAy1oQx7Xt39weZopnBqdw1cCloBg16a-Ar9CojD8ESblmBU_Lnzp-S5V4-GdwRou48emoZtvRyMQ9s5sgYWFWfD1C2-Er4EVnJY7fSCRwhizC-5ONGru6bd5kY3edjlSp74zO-9KSR2paM7Kho3URAmMOt29hUd-yr9JsOjZfktkoXXp71l3fvezIrdQ9mPdNNbAX9sijQqMvoa91sTBGkOZlF32IPbjTNGDR3Py_GvBtmt8t"
				/>
			</div>
			<div class="w-full md:w-1/2">
				<h2
					class="mb-8 font-display-lg text-display-lg-mobile text-on-background md:text-display-lg"
				>
					Why {data.shortName} Homeowners Choose MKB
				</h2>
				<div class="space-y-8">
					<div class="flex gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10"
						>
							<span class="material-symbols-outlined text-primary">verified_user</span
							>
						</div>
						<div>
							<h4 class="mb-2 font-headline-md text-headline-md">
								Local Washington Expertise
							</h4>
							<p class="text-body-md leading-relaxed text-secondary">
								Fully licensed, bonded, and insured specifically for WA state
								regulations. We know Clark County building codes inside and out.
							</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10"
						>
							<span class="material-symbols-outlined text-primary">architecture</span>
						</div>
						<div>
							<h4 class="mb-2 font-headline-md text-headline-md">
								PNW Craftsmanship
							</h4>
							<p class="text-body-md leading-relaxed text-secondary">
								We select materials and building methods that withstand the unique
								Pacific Northwest climate, ensuring your investment lasts for
								decades.
							</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10"
						>
							<span class="material-symbols-outlined text-primary">handshake</span>
						</div>
						<div>
							<h4 class="mb-2 font-headline-md text-headline-md">
								Transparent Partnership
							</h4>
							<p class="text-body-md leading-relaxed text-secondary">
								No "construction chaos." We provide clear timelines, fixed budgets,
								and daily communication throughout the transformation process.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Testimonial Section -->
	<section
		class="relative overflow-hidden bg-primary py-section-gap-mobile text-on-primary md:py-section-gap-desktop"
	>
		<div class="pointer-events-none absolute top-0 right-0 opacity-10">
			<span class="material-symbols-outlined text-[400px]">format_quote</span>
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-grid-margin">
			<div class="max-w-3xl">
				<div class="mb-8 flex gap-1">
					<span
						class="material-symbols-outlined"
						style="font-variation-settings: 'FILL' 1;">star</span
					>
					<span
						class="material-symbols-outlined"
						style="font-variation-settings: 'FILL' 1;">star</span
					>
					<span
						class="material-symbols-outlined"
						style="font-variation-settings: 'FILL' 1;">star</span
					>
					<span
						class="material-symbols-outlined"
						style="font-variation-settings: 'FILL' 1;">star</span
					>
					<span
						class="material-symbols-outlined"
						style="font-variation-settings: 'FILL' 1;">star</span
					>
				</div>
				<p
					class="mb-12 font-display-lg text-display-lg-mobile leading-tight italic md:text-display-lg"
				>
					"Mark was a great person to work with to remodel our kitchen! The attention to
					detail was outstanding and he didn't cut any corners. Mark kept us updated with
					the timeline throughout the whole process and we were very happy with the
					results! Would definitely hire him again for future projects."
				</p>
				<div>
					<p class="font-headline-md text-headline-md">— Veronica B.</p>
					<p class="mt-1 font-label-caps text-label-caps uppercase opacity-80">
						Kitchen Remodel
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- CTA Section -->
	<section class="px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
		<div class="mx-auto max-w-7xl bg-surface-container-highest p-12 text-center md:p-24">
			<h2 class="mb-6 font-display-lg text-display-lg">
				Start Your {data.shortName} Project
			</h2>
			<p class="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-secondary">
				Ready to transform your home? Schedule a free on-site consultation with our
				{data.shortName} team to discuss your vision and get an accurate estimate.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					class="flex h-14 items-center justify-center gap-2 bg-primary px-10 font-label-caps text-label-caps font-bold text-on-primary transition-all hover:opacity-90 active:scale-95"
					href="tel:3609917646"
				>
					<span class="material-symbols-outlined">call</span> CALL (360) 991-7646
				</a>
				<button
					class="h-14 border border-primary bg-surface-white px-10 font-label-caps text-label-caps font-bold text-primary transition-all hover:bg-primary hover:text-on-primary"
				>
					REQUEST ESTIMATE ONLINE
				</button>
			</div>
		</div>
	</section>
</main>
