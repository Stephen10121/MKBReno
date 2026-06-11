<script lang="ts">
	import renovationIMG from '@/assets/housereno.jpg';
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
		<!-- Filter Logic (UI Only) -->
		<div class="mb-12 flex flex-wrap justify-center gap-4">
			<button
				class="filter-btn active rounded-full border border-outline px-8 py-2 font-label-caps text-label-caps transition-all"
				>All Projects</button
			>
			<button
				class="filter-btn rounded-full border border-outline px-8 py-2 font-label-caps text-label-caps transition-all hover:border-primary hover:text-primary"
				>Kitchens</button
			>
			<button
				class="filter-btn rounded-full border border-outline px-8 py-2 font-label-caps text-label-caps transition-all hover:border-primary hover:text-primary"
				>Bathrooms</button
			>
			<button
				class="filter-btn rounded-full border border-outline px-8 py-2 font-label-caps text-label-caps transition-all hover:border-primary hover:text-primary"
				>Whole-Home</button
			>
		</div>
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
						data-alt="A stunning modern kitchen in Salmon Creek featuring emerald green cabinetry and sleek white marble countertops. The space is illuminated by warm under-cabinet lighting and designer pendant fixtures. The overall aesthetic is clean and architectural, utilizing a minimalist modern style that feels fresh and sophisticated."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0h955n0f4VKHgQgUpM-nhWgzJBVJDlDNtanfoYATcmEy2agDtzxV6amkepDvpXuq47Jl7flY2o6isuXJ6-KY8V_nqaz6QfDneptH0ST5ksPLT8oUbWxKF_Hd8kVhL-jRFu8uTpfgSdgK8P1TGaRYm83ULp5Cn8GZfMKRDBQ9LNr6XQrwzP0bzh4fSvi589whKa914qaS7w33cbFQgj4UZ6NU-a3OKLNdUPH-6bdph0S_nO-aGOtBRNf_Vigv4MZmz0tspecG6Sx_8"
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
						<span class="material-symbols-outlined text-3xl text-primary"
							>arrow_outward</span
						>
					</div>
					<p class="font-body-md text-body-md text-secondary">
						A complete culinary transformation featuring custom cabinetry, integrated
						smart appliances, and a stunning waterfall marble island.
					</p>
				</div>
			</div>
			<!-- Project 2: West Linn Primary Bath (Small) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-4"
			>
				<div class="aspect-square overflow-hidden">
					<img
						alt="Luxury Bathroom"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						data-alt="A serene primary bathroom in West Linn with a freestanding soaking tub and floor-to-ceiling porcelain tiles. Soft, diffused natural light pours in from a frosted window, creating an airy, spa-like atmosphere. The design emphasizes tranquility and minimalist luxury through a palette of soft whites and natural wood."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmIJeT7CmkLphCmxPvlBesYogCDl23LLLQCK9UedwHfxtznQccix5LpqzcoFN0MP2xldYQpt9ljVe4Klna4e3T_9fXNRsvT4WcaUo5QwgEAU0DcmKkKFvjhmQRbo9o6TXPag-CLYJK4R39bWZaEpNbY-gMqH3Tcx2AScTgk7HReqHpWjqk8_CVdx7XKkJ9J9uUJSSrIIGx8q0HlpbItDJlGi6y55-J_StpVpUxwUsK6FzYDWRw-pejaKPTnxLAsXoF2E6c0Mgnp3_u"
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						West Linn Primary Bath
					</h3>
					<p class="font-body-md text-body-md text-sm text-secondary">
						Spa-inspired retreat with heated floors and a curbless walk-in shower.
					</p>
				</div>
			</div>
			<!-- Project 3: Camas Whole-Home Refresh (Small) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-4"
			>
				<div class="aspect-square overflow-hidden">
					<img
						alt="Living Space"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						data-alt="An open-concept living area in Camas showing a whole-home renovation. The space features refinished white oak floors and a minimalist stone fireplace. High ceilings and large windows maximize natural light, creating a bright, uplifting environment that reflects a professional and polished construction approach."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmqSKyVvduXZF5M4G2FlCV9SpNgkbWEocaB4hMxtQmETHayJz8iJGYyBWiGxP8x1EwhQjOxXynQtZXhswEktdGCQaxUfdU-LMZsGPpp0I47MxSeDSfajalZf95jnzo1lZzmnWYPxatshx2vRwcyjiRWPmVu0qD3XOSvz1XAbLypMSIRHYPFkdrzHjliUm1HHorgKneT8ZMaBHsZ6fc_XvOu40zfuPvLPdsYz4dCtjEb2EAxoMeSFIQz9Ygxb4-M4hrAPzpW76ctOen"
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Whole-House</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Camas Refresh
					</h3>
					<p class="font-body-md text-body-md text-sm text-secondary">
						Unifying an aging floor plan into a cohesive, modern sanctuary for a growing
						family.
					</p>
				</div>
			</div>
			<!-- Project 4: Portland Heights Chef's Kitchen (Large) -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-8"
			>
				<div class="aspect-video overflow-hidden">
					<img
						alt="Chef's Kitchen"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						data-alt="A professional-grade chef's kitchen in Portland Heights featuring a massive central island with a built-in cooktop. Dark wood accents contrast beautifully with pristine white walls and high-end stainless steel appliances. The mood is sophisticated and functional, embodying a sense of high-end architectural excellence and quality craftsmanship."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxQ-2Fy4mYUesY0kxI6jQxT0gz1e_76cBi9MjiBpdtEX8PFDD1KKvdYdLSMRGZ-v6k2Bms7ZkTlLEbV0bCG4hFgC8Pt8NrNxui4bToxoGOJpTepp8WH-RKR_jWby1eX6LZgf9YT4doIjadlpV9cFAVtI3rwWxY9FzErPVtFaFZUyoaGDiX4ejnt9XF_OoRnFt5LmTY-_69f-Vmec5Pe5jkpwmxXuu8Vqo1pVgPaP6UFbgd1xnHKq4raSCf2k1BaFC0oLbBnBfJbdM"
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
								Portland Heights Chef's Suite
							</h3>
						</div>
						<span class="material-symbols-outlined text-3xl text-primary"
							>arrow_outward</span
						>
					</div>
					<p class="font-body-md text-body-md text-secondary">
						A culinary powerhouse designed for entertaining, featuring pro-series
						Wolf/Sub-Zero appliances and custom storage solutions.
					</p>
				</div>
			</div>
			<!-- Project 5: Lake Oswego Guest Bath -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-6"
			>
				<div class="aspect-16/10 overflow-hidden">
					<img
						alt="Guest Bath"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						data-alt="A chic guest bathroom in Lake Oswego showcasing intricate tile work and a modern floating vanity. The lighting is crisp and even, highlighting the vibrant green accent tiles that tie into the brand's refresh theme. The space feels premium and meticulously detailed, demonstrating a stress-free transformation."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAivRkuFsUGYGZTVp58RiOvLG3-iphtjJyi5f4PlKDo3Rlw3hEwAs62YKjgOX37Wmemy08W3IuumtYS7wcI5mF5PCTe4SydsJ4slKgO_rI-0ToZ8VtCMEJsQaL0M34b26_qjTy79D9j5lX6wwyNXKyhAWqptt3ZvGCCHxtPOtYiovv8rOjsJl7QKmkSVMvZ6dDMavMcnYalzwMFCRDfwYETEKo0mWkzD2ZkEDJ1A7VwRVlss_kbM58HrK9fbzHOUpDU8eJG2CppWy66"
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Bathroom</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Lake Oswego Guest Suite
					</h3>
					<p class="font-body-md text-body-md text-secondary">
						Small space, big impact. Using vertical textures and floating fixtures to
						create an airy feel.
					</p>
				</div>
			</div>
			<!-- Project 6: Ridgefield Outdoor Living -->
			<div
				class="group project-card relative overflow-hidden rounded-xl border border-gray-subtle bg-surface-white md:col-span-6"
			>
				<div class="aspect-16/10 overflow-hidden">
					<img
						alt="Outdoor Living"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						data-alt="A luxurious outdoor living space in Ridgefield with a built-in kitchen and stone fireplace. The surrounding Pacific Northwest greenery is vibrant and healthy. High-quality patio photography captures the 'refreshing' brand personality, moving away from chaotic construction toward a polished architectural experience."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuUYsTHLQbIGQGx_nzdy1ROlsIYy90i5o3jhXTIWeH3pT3HFjF5WSrfxTyQAo5NHRf_zhJVPmDh1fehQoRMDPmnG1RdZW2Tu6AtOGh-fGh_oreW06o1wGKZWIK9DaQsKTqIW-FZlbv6JAWhUvZdlAWjyCpJtaffVWAqFoiJojW4_kQgqh63JWXvbiosLHM2PXtE1mIOKOYrG0DO8wqvn9LWcZzY-LZk8zvtroV28VNJcIp-rDne9Bx2TEw61xwYfdx-kkcbFy0pv3s"
					/>
				</div>
				<div class="p-6">
					<span
						class="mb-2 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
						>Exterior</span
					>
					<h3 class="mb-2 font-headline-md text-headline-md text-xl text-on-surface">
						Ridgefield Outdoor Oasis
					</h3>
					<p class="font-body-md text-body-md text-secondary">
						Extending the footprint of the home with a premium, four-season covered
						living space.
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
	<!-- Trust Signals / Logos -->
	<section class="overflow-hidden bg-surface-white py-12">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div
				class="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-700 hover:grayscale-0"
			>
				<img
					alt="Google"
					class="h-8"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1IzDzGExY5gSkVPcP15Iq-J43w4-CB0nLJrMbV4Rg2ni5yX5HkqNemXVEvmjkKy9L6JVnaoNJgeZxv5nYo_z48aVwSxlwctISUjE-MQjoD5lmvbR4HaW3OqauRdBWcIMgfHc0bvGpQVxICMywvk8JEGcsydVt3ycvBDAIgCsXIs6iZCKpk-kPQ9E9wxsWUJQ1C9CGr1-cjWq2zFwG6k3aHpb-ta0QIlVCvAjqmgUk44MiD0vdRaTIzjMRgxaTxLwD9jNHabvBePDr"
				/>
				<img
					alt="Yelp"
					class="h-10"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzJkyh2QCh75VyUSgaupF6GnQyhgGl2_dYwHpBF8_nBdLyYAHFGXx1AHwWMo7UuNnXn3UeDSEwMAQDxJcPgWrv1itokXJw9tTZLs94ZX-dXHZbb3gQ2UOSgbB6iZoJZoIAxlhmw8ijfXKK0b8yF4iUWoXGxBqw8p091izbj0zJ0J5CdqeIElFy3PmOS1Dmze48sPgbQtSee5yXHVSxVQZMH2O3fMgFLW2leSbrDRW4TwGYHV9k4QweIM11_SNSRDeFhuDNkpX33Kto"
				/>
				<img
					alt="Houzz"
					class="h-8"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXovnLeDvN0QuiGW9cOuL90ukIyLt8JqFp4dfpaTjTQoKyQu9iY4X7Z73tUjNtDQJ6vbwCiSr5LO0NSBoG052Z6KbEJ3e222jV_Oi-xrKjKThw3C9nKNVPtDEeQad_n7BEWggqXhl0ZLy_8caVfZnvbtYeYEG8c7f70hIR31C3sYp-ToLXLbG-r9CpGME0H6_zcNbSHRrfeH-udOCeGWsAZ0H_bjN57UxSoD5-4UAt1ziPejM1o9F4gESpO1WrGg2aRVgKJBpZOL3I"
				/>
				<div class="flex items-center gap-2">
					<span class="text-2xl font-bold text-on-surface">BBB</span>
					<span class="font-bold text-primary">A+ RATED</span>
				</div>
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
		vertical-align: middle;
	}

	.filter-btn.active {
		background-color: #006b30;
		color: white;
		border-color: #006b30;
	}
</style>
